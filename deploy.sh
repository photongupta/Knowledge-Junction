#! /bin/bash

rm -rf KJ-react
echo 'cloning'
git clone  https://${GITHUB_TOKEN}:x-oauth-basic@github.com/photongupta/KJ-react.git 2> /dev/null
cd KJ-react
echo 'installing'
npm install 2> /dev/null
npm test


cd ..
rm -rf Knowledge-Junction
echo 'cloning'
git clone https://${GITHUB_TOKEN}:x-oauth-basic@github.com/photongupta/Knowledge-Junction.git 2> /dev/null
cd Knowledge-Junction
echo 'installing'
npm install 2> /dev/null
npm test

echo 'creating build'
npm run build 2> /dev/null
mkdir -p ../public
mv build/* ../public/.
cd ../KJ-react
rm .travis.yml
cd ..
rm -rf Knowledge-Junction
mv ${SERVER}/* ${SERVER}/.* .
rm -rf ${SERVER}
echo 'created build' 