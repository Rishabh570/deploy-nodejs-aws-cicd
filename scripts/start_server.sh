#!/bin/bash
echo "Code ApplicationStart event script ran."

# CodeDeploy does not take source files from what you specify in the files section of the appspec.yml
# It picks the code revision from inside /opt/codedeploy-agent/

# Move to the correct code location
cd /deploy-nodejs-aws-cicd 

sudo npm i

npx pm2 start index.js --name=NodejsDeploymentStackApplication