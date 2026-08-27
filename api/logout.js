const { clearSessionCookie, getSessionEmail } = require("../lib/auth");
const { pushLog } = require("../lib/store");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "method_not_allowed" });
    return;
  }
  try {
    const email = getSessionEmail(req);
    clearSessionCookie(res);
    if (email) await pushLog({ email, action: "logout", detail: "" });
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "server_error", message: String((err && err.message) || err) });
  }
};
