const { getRedis } = require("./redis");

const USERS_KEY = "atc:users"; // hash: email -> JSON {role, addedAt}
const LOGS_KEY = "atc:logs"; // list of JSON strings, newest first (LPUSH)
const LOGS_MAX = 5000;

function normEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function seedAdmins() {
  return String(process.env.ADMIN_SEED_EMAILS || "")
    .split(",")
    .map((e) => normEmail(e))
    .filter(Boolean);
}

async function getUser(email) {
  const redis = getRedis();
  const e = normEmail(email);
  const raw = await redis.hget(USERS_KEY, e);
  if (raw) {
    const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
    return { email: e, role: parsed.role, addedAt: parsed.addedAt, addedBy: parsed.addedBy };
  }
  if (seedAdmins().includes(e)) {
    const record = { role: "admin", addedAt: new Date().toISOString(), addedBy: "seed" };
    await redis.hset(USERS_KEY, { [e]: JSON.stringify(record) });
    return { email: e, ...record };
  }
  return null;
}

async function listUsers() {
  const redis = getRedis();
  const all = await redis.hgetall(USERS_KEY);
  if (!all) return [];
  return Object.entries(all)
    .map(([email, raw]) => {
      const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
      return { email, role: parsed.role, addedAt: parsed.addedAt, addedBy: parsed.addedBy };
    })
    .sort((a, b) => (a.addedAt || "").localeCompare(b.addedAt || ""));
}

async function upsertUser(email, role, addedBy) {
  const redis = getRedis();
  const e = normEmail(email);
  if (!e || !e.includes("@")) throw new Error("invalid_email");
  const record = { role: role === "admin" ? "admin" : "instructor", addedAt: new Date().toISOString(), addedBy: addedBy || "unknown" };
  await redis.hset(USERS_KEY, { [e]: JSON.stringify(record) });
  return { email: e, ...record };
}

async function removeUser(email) {
  const redis = getRedis();
  const e = normEmail(email);
  await redis.hdel(USERS_KEY, e);
}

async function pushLog(entry) {
  const redis = getRedis();
  const record = {
    ts: Date.now(),
    email: entry.email || "(anonymous)",
    action: entry.action || "unknown",
    detail: entry.detail || "",
  };
  await redis.lpush(LOGS_KEY, JSON.stringify(record));
  await redis.ltrim(LOGS_KEY, 0, LOGS_MAX - 1);
  return record;
}

async function listLogs(limit) {
  const redis = getRedis();
  const n = Math.min(Math.max(Number(limit) || 500, 1), LOGS_MAX);
  const raw = await redis.lrange(LOGS_KEY, 0, n - 1);
  return raw.map((r) => (typeof r === "string" ? JSON.parse(r) : r));
}

async function allLogs() {
  const redis = getRedis();
  const raw = await redis.lrange(LOGS_KEY, 0, -1);
  return raw.map((r) => (typeof r === "string" ? JSON.parse(r) : r));
}

module.exports = {
  normEmail,
  getUser,
  listUsers,
  upsertUser,
  removeUser,
  pushLog,
  listLogs,
  allLogs,
};
