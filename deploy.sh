#!/bin/sh

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git checkout -b gh-pages
git add -f screenshots
git commit --message "Travis deploy: $TRAVIS_BUILD_NUMBER"

git remote add origin-pages https://${GITHUB_TOKEN}@github.com/rigor789/nativescript-vue-ui-tests.git > /dev/null 2>&1
git push --quiet --set-upstream origin-pages gh-pages