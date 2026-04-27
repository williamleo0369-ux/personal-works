#!/bin/bash
# William Lee — One-shot push to GitHub
# Usage:  bash push-to-github.sh
# Requires: git installed + GitHub auth set up on your Mac (Keychain / SSH / gh CLI)

set -e

REPO_URL="https://github.com/williamleo0369-ux/personal-works.git"
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

echo "==> Working in: $DIR"
echo ""
echo "==> Local image hashes BEFORE push (这是即将推上去的版本):"
md5 -q portfolio_images/page_06.jpg | xargs -I{} echo "    page_06.jpg  MD5: {}"
md5 -q portfolio_images/page_07.jpg | xargs -I{} echo "    page_07.jpg  MD5: {}"
ls -la portfolio_images/page_06.jpg portfolio_images/page_07.jpg | awk '{print "    " $9 "  size: " $5 " bytes"}'
echo ""

# Clean up any partial git state from previous attempts
rm -rf .git 2>/dev/null || true

echo "==> Initializing fresh git repo..."
git init -b main
git config user.email "williamleo0237@gmail.com"
git config user.name "William Lee"

echo "==> Adding remote..."
git remote add origin "$REPO_URL"

echo "==> Adding files..."
git add -A
TOTAL=$(git status --short | wc -l | tr -d ' ')
echo "    $TOTAL files staged"

# Verify the two key images are actually staged
echo ""
echo "==> Verifying project 03/04 images are in the commit:"
if git ls-files --stage | grep -E "page_0(6|7)\.jpg"; then
  echo "    ✅ page_06.jpg & page_07.jpg are staged"
else
  echo "    ❌ MISSING! Aborting."
  exit 1
fi
echo ""

echo "==> Committing..."
git commit -m "feat: refresh project 03/04 mockups + cache-busting

- New OT three-screen Quant Monitor mockup (page_06.jpg)
- New 空间焕新 Home Renovator AI mockup (page_07.jpg)
- Add ?v=20260427 query strings to bypass browser cache"

echo ""
echo "==> Pushing to $REPO_URL ..."
git push -u origin main --force

echo ""
echo "✅  Done!  Repo is live at:"
echo "    https://github.com/williamleo0369-ux/personal-works"
echo ""
echo "🔍  Verify the new images are actually on GitHub:"
echo "    https://github.com/williamleo0369-ux/personal-works/blob/main/portfolio_images/page_06.jpg"
echo "    https://github.com/williamleo0369-ux/personal-works/blob/main/portfolio_images/page_07.jpg"
echo ""
echo "🌐  Live site (硬刷新 = Cmd+Shift+R 绕过缓存):"
echo "    https://williamleo0369-ux.github.io/personal-works/"
echo ""
echo "⏰  GitHub Pages 部署一般 30 秒-2 分钟，如果还是旧图，等 2 分钟后再硬刷新一次。"
