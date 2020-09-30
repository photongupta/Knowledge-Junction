#! /bin/bash

rm -rf ${SERVER_NAME}
echo 'cloning'
git clone  https://${GITHUB_TOKEN}:x-oauth-basic@github.com/${USERNAME}/${SERVER_NAME}.git 2> /dev/null
cd ${SERVER_NAME}
echo 'installing'
npm install 2> /dev/null
npm test


cd ..
rm -rf ${APP_NAME}
echo 'cloning'
git clone https://${GITHUB_TOKEN}:x-oauth-basic@github.com/${USERNAME}/${APP_NAME}.git 2> /dev/null
cd ${APP_NAME}
echo 'installing'
npm install 2> /dev/null
npm test

echo 'creating build'
npm run build 2> /dev/null
mkdir -p ../public
mv build/* ../public/.
cd ../${SERVER_NAME}
rm .travis.yml
cd ..
rm -rf ${APP_NAME}
mv ${SERVER}/* ${SERVER}/.* .
rm -rf ${SERVER}
echo 'created build' 