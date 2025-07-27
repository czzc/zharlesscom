# zharless.com ![Let's Encrypt](https://img.shields.io/badge/SSL-Enabled-brightgreen?logo=letsencrypt)

## :rocket: Build Status

[![Production Deploy](https://github.com/czzc/zharlesscom/actions/workflows/deploy.yml/badge.svg)](https://github.com/czzc/zharlesscom/actions/workflows/deploy.yml)&nbsp;&nbsp;&nbsp;&nbsp;[![Development Deploy](https://github.com/czzc/zharlesscom/actions/workflows/deploy_dev.yml/badge.svg)](https://github.com/czzc/zharlesscom/actions/workflows/deploy_dev.yml)


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
- 🎨 Dark theme with CRT monitor aesthetic
- 🖥️ Interactive CRT monitor with turn-off/on animations (for some reason? fun to implement at least)
- ⚡ Font system with IBM Plex Sans + Space Grotesk
- 🎯 404 page with random messages and glitch effects
- 📱 Responsive design for all device sizes
- 🔧 Modular architecture with reusable components

---
## 📁 Project Structure (basics)

```
zharless.com/
  ├── README.md
  ├── package.json
  ├── next.config.mjs
  ├── tailwind.config.js
  ├── postcss.config.mjs
  ├── jsconfig.json
  │
  |──.github/
  |   |── workflows/
  |   ├── deploy.yml              # Main deploy to zharless.com
  |   └── deploy_dev.yml          # Dev deploy to dev.zharless.com
  |
  ├── public/
  │   ├── logo.png
  │   ├── me.webp
  │   ├── github-mark.svg
  │   └── linkedin.png
  │
  └── src/
      ├── app/
      |   |── favicon.ico
      │   ├── layout.js              # Root layout with font providers
      │   ├── page.js                # Home page route
      │   ├── not-found.js           # 404 page route
      │   └── globals.css            # Global styles and animations
      │
      ├── components/
      │   ├── pages/
      │   │   ├── HomePage.js        # Main landing page component
      │   │   └── NotFoundPage.js    # 404 page with glitch effects
      │   ├── Header.js              # CRT monitor header with animations
      │   ├── Footer.js              # Footer with social links
      │   ├── SocialLinks.js         # Reusable social media icons
      │   └── Icon.js                # Icon component factory
      │
      ├── contexts/
      │   └── FontContext.js         # Centralized font management
      │
      ├── constants/
      │   ├── colors.js              # Color palette definitions
      │   └── not_found_messages.js  # Random 404 messages
      │
      ├── data/
      │   └── personalInfo.js        # Personal information and bio
      │
      └── styles/
          └── fonts.js               # Google Fonts configuration

robots-dev.txt                       # Disallow crawlers in dev
robots-prod.txt                      # Allow crawlers in prod

next.config.js                       # Output set to 'export' for static generation
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
:heavy_check_mark: HTTPS (Let’s Encrypt integration)
:large_orange_diamond: Versioning info / deploy badge on footer
:large_orange_diamond: Add easter eggs from *Hackers*, *WarGames*, or *The Matrix*

---

## 🧙‍♂️ Author

Zac Harless  
[https://zharless.com](https://zharless.com)  
_Generally up to something weird and overengineered._



