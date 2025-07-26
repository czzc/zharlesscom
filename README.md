# zharless.com

[![Production Deploy](https://github.com/czzc/zharlesscom/actions/workflows/deploy.yml/badge.svg)](https://github.com/czzc/zharlesscom/actions/workflows/deploy.yml)

[![Development Deploy](https://github.com/czzc/zharlesscom/actions/workflows/deploy_dev.yml/badge.svg)](https://github.com/czzc/zharlesscom/actions/workflows/deploy_dev.yml)


> “Because even your 404 page deserves a backstory.”

---

## 🧠 What is this?

A lovingly overbuilt, single-page website built with [Next.js](https://nextjs.org), automatically deployed to:

- 🌐 [**zharless.com**](https://zharless.com) from the `main` branch  
- 🧪 [**dev.zharless.com**](https://dev.zharless.com) from the `development` branch

CI/CD is handled via [GitHub Actions](https://github.com/features/actions), and every deploy logs a timestamped message into the server’s journal. Because... why not?

---

## ⚙️ Features

- 🧱 Built with Next.js 15
- 🚀 CI/CD deploy pipeline using GitHub Actions + rsync over SSH
- 🐧 Deployed to a self-hosted server
- 🧠 Glitchy 404 page with rotating witty messages (and a hidden *The Net* reference)
- 📜 All deploys are logged with `journalctl` under custom tags (`deploy` / `deploy-dev`)
- 💅 Clean, fast, no JS frameworks overkill beyond Next itself

---

## 📁 Project Structure (basics)

```
.github/
└── workflows/
    ├── deploy.yml        # Main deploy to zharless.com
    └── deploy_dev.yml    # Dev deploy to dev.zharless.com

/public/
├── 404.html              # Custom glitchy 404 page
├── favicon.ico
├── me.webp
└── assets/

/pages/
├── index.tsx
└── _error.tsx           # Custom 404 logic w/ randomized messages

robots-dev.txt           # Disallows crawlers in dev
robots-prod.txt          # Allows crawlers in prod

next.config.js           # Output set to 'export' for static generation
```
---

## 🔐 Secrets (GitHub Actions)

These are safely stored in GitHub’s Secret store and **not** committed:

- `SERVER_IP`
- `SERVER_USER`
- `SERVER_SSH_KEY`

If you're replicating this, make sure to do the same.

---

## 🤖 Deployment Flow

1. Push to `main` or `development`
2. GitHub Action:
   - Checks out code
   - Installs deps
   - Builds site
   - `rsync`s `/out` to the target server
   - SSHs in to log a `journalctl` entry like:
     ```
     Jul 26 15:25:11 zharless.com deploy[4154]: Site deployed at Sat Jul 26 03:25:11 PM UTC 2025 by GitHub Actions — commit bb91...
     ```

---

## 🤷‍♂️ Why tho?

Because I could.  
Because it’s clean.  
Because *The Net (1995)* deserves representation on the modern internet.

---

## 💡 TODO / Ideas for Later
:heavy_check_mark: `/robots.txt` that politely threatens bots
:clock9:HTTPS (Let’s Encrypt integration)
:large_orange_diamond: Versioning info / deploy badge on footer
:large_orange_diamond: Add easter eggs from *Hackers*, *WarGames*, or *The Matrix*

---

## 🧙‍♂️ Author

Zac Harless  
[https://zharless.com](https://zharless.com)  
_Generally up to something weird and overengineered._



