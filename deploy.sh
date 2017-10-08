#!/bin/sh

cd $HOME

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git clone --quiet --branch=master https://${GITHUB_TOKEN}@github.com/rigor789/nativescript-vue-ui-tests.git deploy > /dev/null 2>&1

cd deploy
cp -R $TRAVIS_BUILD_DIR/screenshots .

git add -f screenshots
git commit --message "[Travis Screenshots: $TRAVIS_JOB_NUMBER] [skip ci]"

git pull --force origin master
git push --force origin master