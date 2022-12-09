#!/bin/bash
echo "Code ApplicationStart event script ran."

npm i

npx pm2 start index.js --name=NodejsDeploymentStackApplication