#!/bin/sh

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git add -f screenshots
git commit --message "Travis deploy: $TRAVIS_JOB_NUMBER"

git remote add origin-push https://${GITHUB_TOKEN}@github.com/rigor789/nativescript-vue-ui-tests.git > /dev/null 2>&1

git pull origin-push master

git push origin-push master