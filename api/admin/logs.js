const { requireAdmin } = require("../../lib/requireAdmin");
const { listLogs, allLogs } = require("../../lib/store");

function toCsv(rows) {
  const esc = (v) => {
    const s = String(v == null ? "" : v);
    if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
    return s;
  };
  const header = "timestamp,email,action,detail";
  const lines = rows.map((r) =>
    [new Date(r.ts).toISOString(), r.email, r.action, r.detail].map(esc).join(",")
  );
  return [header].concat(lines).join("\n");
}

module.exports = async (req, res) => {
  const adminEmail = await requireAdmin(req, res);
  if (!adminEmail) return;

  if (req.method !== "GET") {
    res.status(405).json({ error: "method_not_allowed" });
    return;
  }

  try {
    if (req.query.export === "csv") {
      const rows = await allLogs();
      const csv = toCsv(rows);
      res.setHeader("Content-Type", "text/csv; charset=utf-8");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="activity-logs-${new Date().toISOString().slice(0, 10)}.csv"`
      );
      res.status(200).send(csv);
      return;
    }

    const limit = req.query.limit;
    const rows = await listLogs(limit);
    res.status(200).json({ ok: true, logs: rows });
  } catch (err) {
    res.status(500).json({ error: "server_error", message: String((err && err.message) || err) });
  }
};
