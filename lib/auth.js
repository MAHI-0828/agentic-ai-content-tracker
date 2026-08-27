const crypto = require("crypto");

const COOKIE_NAME = "atc_session";
const MAX_AGE_SECONDS = 30 * 24 * 60 * 60; // 30 days

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error(
      "Missing AUTH_SECRET env var. Set it to any long random string in your Vercel project settings."
    );
  }
  return secret;
}

function sign(value) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("base64url");
}

function makeToken(email) {
  const expiry = Date.now() + MAX_AGE_SECONDS * 1000;
  const payload = `${email}.${expiry}`;
  const sig = sign(payload);
  return `${Buffer.from(payload).toString("base64url")}.${sig}`;
}

function verifyToken(token) {
  if (!token || typeof token !== "string" || !token.includes(".")) return null;
  const [payloadB64, sig] = token.split(".");
  if (!payloadB64 || !sig) return null;
  let payload;
  try {
    payload = Buffer.from(payloadB64, "base64url").toString("utf8");
  } catch (e) {
    return null;
  }
  const expectedSig = sign(payload);
  const a = Buffer.from(sig);
  const b = Buffer.from(expectedSig);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  // Split on the LAST "." only — an email address can itself contain dots
  // (e.g. "cse.19cbs1065@gmail.com"), so a naive split(".") would mis-parse it.
  const lastDot = payload.lastIndexOf(".");
  if (lastDot === -1) return null;
  const email = payload.slice(0, lastDot);
  const expiry = Number(payload.slice(lastDot + 1));
  if (!email || !expiry || Date.now() > expiry) return null;
  return { email };
}

function parseCookies(req) {
  const header = req.headers.cookie;
  const out = {};
  if (!header) return out;
  header.split(";").forEach((part) => {
    const idx = part.indexOf("=");
    if (idx === -1) return;
    const k = part.slice(0, idx).trim();
    const v = part.slice(idx + 1).trim();
    out[k] = decodeURIComponent(v);
  });
  return out;
}

function setSessionCookie(res, email) {
  const token = makeToken(email);
  const parts = [
    `${COOKIE_NAME}=${encodeURIComponent(token)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    "Secure",
    `Max-Age=${MAX_AGE_SECONDS}`,
  ];
  res.setHeader("Set-Cookie", parts.join("; "));
}

function clearSessionCookie(res) {
  res.setHeader(
    "Set-Cookie",
    `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Secure; Max-Age=0`
  );
}

function getSessionEmail(req) {
  const cookies = parseCookies(req);
  const token = cookies[COOKIE_NAME];
  const session = verifyToken(token);
  return session ? session.email : null;
}

module.exports = {
  setSessionCookie,
  clearSessionCookie,
  getSessionEmail,
};
