##### "express init"

- npm -g install express-generator
- npm -g list --depth=0
- mkdir sample_express
- cd sample_express
- express -f .
- npm i
- npm run start
- http://localhost:3000/ 확인

##### "default file modify"

- rm -rf public views
- npm uninstall jade
- app.js

  - [ delete ]

  ```javascript
  // view engine setup
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "jade");

  ...
  app.use(express.static(path.join(__dirname, "public")));
  ```

  - [ modify ]

    ```javascript
    res.render("error");
    ```

    - to

    ```javascript
    res.json({ error: err });
    ```

- routes/index.js [ modify ]

  ```javascript
  res.render("index", { title: "Express" });
  ```

  - to

  ```javascript
  res.json({ title: "Express" });
  ```

- npm run start
- http://localhost:3000/ 확인

##### "nodemon 설치"

- mkdir src
- mv ./routes ./src
- npm install -D nodemon
- touch nodemon.json

  ```javascript
    {
    "watch": ["./src"]
    }
  ```

- app.js [ modify ]

  ```javascript
  var indexRouter = require("./routes/index");
  var usersRouter = require("./routes/users");
  ```

  - to

    ```javascript
    var indexRouter = require("./src/routes/index");
    var usersRouter = require("./src/routes/users");
    ```

- npm run start

##### "구조 정리"

##### "sequelize + sqlite3"

- npm install sqlite3
- npm install -g sequelize-cli
- cd src
- sequelize init
- sequelize model:generate --name User --attributes userId:string,name:string,engName:string
- sequelize db:migrate

  - sequelize

    <pre> 
     sequelize db:migrate Run pending migrations
     sequelize db:migrate:schema:timestamps:add Update migration table to have timestamps
     sequelize db:migrate:status List the status of all migrations
     sequelize db:migrate:undo Reverts a migration
     sequelize db:migrate:undo:all Revert all migrations ran
     sequelize db:seed Run specified seeder
     sequelize db:seed:undo Deletes data from the database
     sequelize db:seed:all Run every seeder
     sequelize db:seed:undo:all Deletes data from the database
     sequelize db:create Create database specified by configuration
     sequelize db:drop Drop database specified by configuration
     sequelize init Initializes project
     sequelize init:config Initializes configuration
     sequelize init:migrations Initializes migrations
     sequelize init:models Initializes models
     sequelize init:seeders Initializes seeders
     sequelize migration:generate Generates a new migration file [별칭: migration:create] sequelize model:generate Generates a model and its migration [별칭: model:create] sequelize seed:generate Generates a new seed file [별칭: seed:create]
     </pre>

    - migration 취소 => sequelize db:migrate:undo
    - seed로 data추가 => sequelize seed:generate --name createUser
    - 모든 seed 실행 => sequelize db:seed:all

- sqlite 확인

##### "Get /user"

##### "Post /user"

#### db 컨테이너 마운트 후

- docker exec -it container_name bash

- su postgres

- cd ~/
- cd data
- vi postgresql.conf
- :/logging_collector

- logging_collector = on
- log_directory= '/logs'
- log_filename= 'postgresql.log'

#### Postgresql - Express 컨테이너간 연결 GET /user
