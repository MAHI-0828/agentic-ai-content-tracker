const { getSessionEmail } = require("../lib/auth");
const { getUser } = require("../lib/store");

module.exports = async (req, res) => {
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
    res.status(200).json({ ok: true, email, role: user.role });
  } catch (err) {
    res.status(500).json({ error: "server_error", message: String((err && err.message) || err) });
  }
};
