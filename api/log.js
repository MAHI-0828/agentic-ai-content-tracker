const { getSessionEmail } = require("../lib/auth");
const { getUser, pushLog } = require("../lib/store");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "method_not_allowed" });
    return;
  }
  try {
    const email = getSessionEmail(req);
    if (!email) {
      res.status(401).json({ error: "not_authenticated" });
      return;
    }
    const user = await getUser(email);
    if (!user) {
      res.status(401).json({ error: "not_authenticated" });
      return;
    }
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const action = String(body.action || "").slice(0, 80);
    const detail = String(body.detail || "").slice(0, 500);
    if (!action) {
      res.status(400).json({ error: "missing_action" });
      return;
    }
    await pushLog({ email, action, detail });
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "server_error", message: String((err && err.message) || err) });
  }
};
