#!/bin/bash
prjname="DomiWeb"

echo "=============================="
echo ${prjname}
echo "=============================="

git pull

# install packages && run on local server
cd dormitory_web
npm install
npm run dev

# build
# npm run build

# root dir
cd -

# get commit message
printf "\n"
read -p "Enter commit message: " commitmsg

# commit
git add .
git commit -m $commitmsg
git push

exit
