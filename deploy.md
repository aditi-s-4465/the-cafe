Deploy guide — Aditi-s-Personal-Website

Prerequisites
- Install nvm and set Node 24:
  nvm install 24 && nvm use 24

# If you want to follow LTS instead, use:
# nvm install --lts && nvm use --lts
- Authenticate gh CLI: gh auth login

Useful package.json scripts
- "dev": "next dev --turbopack"
- "build": "next build"
- "predeploy": "npm run build"
- "deploy": "sh -c \"touch out/.nojekyll && gh-pages -d out\""

Update dependencies (minor-only)
1. nvm use --lts
2. rm -rf node_modules .next out
3. npx npm-check-updates -t minor -u
4. npm install --no-audit --no-fund
5. npm run build

Export & deploy (static)
- Ensure next.config.* contains: output: 'export'
- Build: npm run build (this will export when output:'export')
- Ensure out/.nojekyll exists (prevents Jekyll stripping _next)
- Deploy: npm run deploy

Common asset/path issues
- Stylesheets live at out/_next/static/css. url(...) in those CSS files is resolved relative to the CSS file. If CSS contains url(./image.png) the browser will request out/_next/static/css/image.png (wrong).
- Fixes: CSS should reference relative paths that reach the actual files, e.g. url(../media/...) or url(../../../image.png) depending on location.
- Alternatively, configure next.config (basePath/assetPrefix) to generate correct absolute URLs for GitHub Pages, but that can produce repo-subpath absolute URLs which sometimes need extra care.

Quick troubleshooting checklist
- Hard-refresh or Incognito with DevTools: Disable cache and reload.
- Check Network tab for Request URL and HTTP status for CSS, fonts, and images.
- If CSS/JS 404 -> ensure out/_next assets were pushed to gh-pages branch and .nojekyll present.
- Add .nojekyll to gh-pages: (worktree)
  git worktree add /tmp/ghpages gh-pages
  echo > /tmp/ghpages/.nojekyll && cd /tmp/ghpages && git add .nojekyll && git commit -m "add .nojekyll" && git push origin gh-pages

Useful curl checks
- curl -I <asset-url>
- curl -sL <site-url> | sed -n '1,160p'  # inspect head and asset links

Notes
- Prefer fixing export configuration (next.config) so post-processing of out/ isn't necessary.
- If npm throws "Cannot find module 'node:path'" switch to Node LTS with nvm.

If you want, I can create an npm script to post-process out/ paths automatically. 
