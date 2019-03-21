#!/bin/bash
echo "=============================="
echo "${PWD##*/}"
echo "=============================="

git pull

cd dormitory_web

# install dependencies
npm install

# build for production with minification
npm run build

# serve with hot reload at localhost:5630
npm run dev

# root dir
cd -

# get commit message
printf "\n"
IFS= read -r -p "Enter commit message: " commitmsg

# if commitmsg empty
if [ -z "$commitmsg" ]
then
    echo "Commit message is empty"
    commitmsg="Add files via upload"
fi

printf "\n"
git add .
git commit -m "$commitmsg"
git push

exit
