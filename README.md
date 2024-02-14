# Sequelize-TypeScript-Init
This is a code sample of initialization of Sequelize v.7 ORM used with TypeScript.
## Overview
This porject consists of:
1. Node.ts server
2. Sequelize v.7 ORM
3. SQLite db

Goal of this project is to prepare init enviroment that any project can be started with.
The code itself inits db file as well as example model. This also includes a helper function that imports all models exisitng in ./database/models directory.
Model names need to specifically be named as the file *.model.ts where * is model name or they need to export default.
  
