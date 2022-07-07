#!/bin/bash

git checkout main && git pull && git checkout -b upgradeToVuePress$1
yarn upgrade vuepress-vite@2.0.0-beta.$1
rm -R node_modules && rm yarn.lock && yarn install
npm run docs:build
npm run docs:dev