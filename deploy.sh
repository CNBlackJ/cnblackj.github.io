#!/usr/bin/env sh

set -e

npm run build

cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f https://6b21bd448da63398298896a191f5d9408ae42f63@github.com/CNBlackJ/cnblackj.github.io.git master
git push -f git@github.com:CNBlackJ/cnblackj.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -