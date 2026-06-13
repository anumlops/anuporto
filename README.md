# anuporto — AI Tools Portfolio

A full-stack portfolio for a tech enthusiast exploring AI tooling. Built with Astro, Tailwind CSS v4, and Neon PostgreSQL. Deployed on Vercel.

## Tech Stack

- **Framework:** [Astro](https://astro.build/) v6 (hybrid SSG + SSR)
- **Database:** [Neon](https://neon.tech/) (serverless PostgreSQL)
- **Hosting:** [Vercel](https://vercel.com/)
- **Styling:** Tailwind CSS v4
- **Content:** Astro content collections (projects) + Neon DB (daily log, tools)

## Pages

| Route | Type | Description |
|---|---|---|
| `/` | Static | Hero + featured projects |
| `/projects` | Static | Project showcase gallery |
| `/projects/[slug]` | Static | Individual project detail |
| `/daily` | SSR | Daily advancement log |
| `/daily/[slug]` | SSR | Individual log entry |
| `/tools` | SSR | AI tools showcase |
| `/tools/[slug]` | SSR | Tool detail page |
| `/about` | Static | About me |
| `/admin` | SSR | Protected daily log editor |
| `/api/daily` | API | POST endpoint for new entries |

## Local Development

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your Neon DATABASE_URL and ADMIN_PASSWORD

# Run dev server
npm run dev

# Build for production
npm run build
```

### Database Setup

1. Create a project on [Neon](https://neon.tech)
2. Copy your connection string
3. Run the schema from `src/db/schema.sql` in Neon's SQL editor

## Deployment

The site is connected to Vercel — pushing to `main` auto-deploys.

Set these environment variables in your Vercel project:

- `DATABASE_URL` — your Neon connection string
- `ADMIN_PASSWORD` — password for the `/admin` page

## Project Structure

```
src/
├── components/       # Reusable Astro components
├── content/          # Projects content collection (markdown)
├── layouts/          # Base layout shell
├── lib/              # Neon DB query library + projects lib
├── pages/
│   ├── api/          # API routes
│   ├── daily/        # Daily log SSR pages
│   ├── projects/     # Project SSG pages
│   └── tools/        # Tools SSR pages
└── db/               # SQL schema
```
