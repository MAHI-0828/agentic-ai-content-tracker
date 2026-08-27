const { requireAdmin } = require("../../lib/requireAdmin");
const { listUsers, upsertUser, removeUser, pushLog } = require("../../lib/store");

module.exports = async (req, res) => {
  const adminEmail = await requireAdmin(req, res);
  if (!adminEmail) return;

  try {
    if (req.method === "GET") {
      const users = await listUsers();
      res.status(200).json({ ok: true, users });
      return;
    }

    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

      if (Array.isArray(body.rows)) {
        // Bulk add via CSV
        const results = [];
        for (const row of body.rows) {
          const email = String(row.email || "").trim().toLowerCase();
          const role = row.role === "admin" ? "admin" : "instructor";
          if (!email || !email.includes("@")) continue;
          const user = await upsertUser(email, role, adminEmail);
          results.push(user);
        }
        await pushLog({
          email: adminEmail,
          action: "admin_bulk_add",
          detail: `${results.length} user(s)`,
        });
        res.status(200).json({ ok: true, added: results });
        return;
      }

      const email = String(body.email || "").trim().toLowerCase();
      const role = body.role === "admin" ? "admin" : "instructor";
      if (!email || !email.includes("@")) {
        res.status(400).json({ error: "invalid_email" });
        return;
      }
      const user = await upsertUser(email, role, adminEmail);
      await pushLog({ email: adminEmail, action: "admin_add_user", detail: `${email} (${role})` });
      res.status(200).json({ ok: true, user });
      return;
    }

    if (req.method === "DELETE") {
      const email = String(req.query.email || "").trim().toLowerCase();
      if (!email) {
        res.status(400).json({ error: "missing_email" });
        return;
      }
      await removeUser(email);
      await pushLog({ email: adminEmail, action: "admin_remove_user", detail: email });
      res.status(200).json({ ok: true });
      return;
    }

    res.status(405).json({ error: "method_not_allowed" });
  } catch (err) {
    res.status(500).json({ error: "server_error", message: String((err && err.message) || err) });
  }
};
