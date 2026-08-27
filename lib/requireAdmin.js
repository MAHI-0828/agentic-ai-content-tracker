const { getSessionEmail } = require("./auth");
const { getUser } = require("./store");

// Resolves the requesting admin's email, or writes a 401/403 response and returns null.
async function requireAdmin(req, res) {
  const email = getSessionEmail(req);
  if (!email) {
    res.status(401).json({ error: "not_authenticated" });
    return null;
  }
  const user = await getUser(email);
  if (!user) {
    res.status(401).json({ error: "not_authenticated" });
    return null;
  }
  if (user.role !== "admin") {
    res.status(403).json({ error: "not_admin" });
    return null;
  }
  return email;
}

module.exports = { requireAdmin };
