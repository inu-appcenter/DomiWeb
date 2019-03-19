#!/bin/bash
prjname="DomiWeb"

echo "=============================="
echo ${prjname}
echo "=============================="

git pull

# install packages
cd dormitory_web
npm install

# prebuild
npm run build

# run on local server
npm run dev

# root dir
cd -

# get commit message
printf "\n"
IFS= read -r -p "Enter commit message: " commitmsg

# commit
git add .
git commit -m "$commitmsg"
git push

exit
