const { setSessionCookie } = require("../lib/auth");
const { getUser, pushLog } = require("../lib/store");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "method_not_allowed" });
    return;
  }
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    const email = String(body.email || "").trim().toLowerCase();
    if (!email || !email.includes("@")) {
      res.status(400).json({ error: "invalid_email" });
      return;
    }
    const user = await getUser(email);
    if (!user) {
      res.status(403).json({ error: "not_authorized" });
      return;
    }
    setSessionCookie(res, email);
    await pushLog({ email, action: "login", detail: "" });
    res.status(200).json({ ok: true, email, role: user.role });
  } catch (err) {
    res.status(500).json({ error: "server_error", message: String((err && err.message) || err) });
  }
};
