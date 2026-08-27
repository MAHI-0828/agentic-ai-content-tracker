# Agentic AI Content Tracker — Vercel (real auth + logging)

This is a working backend, not just a static page: instructor login, an
admin-managed email allowlist, and every login/open/copy event get stored
server-side in a real database, so they persist across devices and browsers
(not just your own browser's local storage).

## What you need to create (5–10 minutes, free)

**1. A free Upstash Redis database** — this is where users and logs are stored.
   - Go to https://console.upstash.com → sign up (GitHub/Google login is fine) → **Create Database**.
   - Any region is fine; pick one close to where your instructors are.
   - Once created, open the database → **REST API** section → copy:
     - `UPSTASH_REDIS_REST_URL`
     - `UPSTASH_REDIS_REST_TOKEN`

**2. Push this project to your GitHub repo** (`agentic-ai-content-tracker`),
   then import it into Vercel (vercel.com → **Add New → Project** → pick the repo).

**3. Add three environment variables in Vercel** — Project → Settings →
   Environment Variables (add for Production, Preview, and Development):

   | Name | Value |
   |---|---|
   | `UPSTASH_REDIS_REST_URL` | from step 1 |
   | `UPSTASH_REDIS_REST_TOKEN` | from step 1 |
   | `AUTH_SECRET` | any long random string (e.g. run `openssl rand -hex 32`) — used to sign login sessions |
   | `ADMIN_SEED_EMAILS` | `cse.19cbs1065@gmail.com` (comma-separate more if needed) — whoever's email is here automatically becomes an admin the first time they log in, so you can bootstrap access without a database console |

**4. Redeploy** (Vercel → Deployments → ⋯ → Redeploy) after adding the env vars,
   since they only apply to new deployments.

That's it — open the deployed URL, log in with one of the `ADMIN_SEED_EMAILS`
addresses, and use the Admin panel to add your 20-30 instructors (single or
bulk CSV, same as before).

## How it works

- `/api/login` checks the email against the allowlist stored in Redis (or the
  `ADMIN_SEED_EMAILS` bootstrap list) and sets a signed, httpOnly session
  cookie — no passwords.
- `/api/log` records every login, resource open, and link copy with a
  timestamp + email.
- `/api/admin/users` (GET/POST/DELETE) manages the access list — single add,
  bulk CSV add, and remove — admin-only.
- `/api/admin/logs` (GET, or `?export=csv` for a real file download)
  is the activity log viewer — admin-only.
- Course content (weeks/sessions/phase projects) is static, embedded directly
  in `public/app.js` — it isn't something instructors edit, so it doesn't need
  a database round-trip.

## Local testing (optional)

`npm install` then you'll need real Upstash credentials in a `.env.local` —
Vercel's `vercel dev` will pick them up if you link the project with
`vercel link` first, or run `vercel env pull` after adding them in the dashboard.
