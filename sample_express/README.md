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

- npm install sequelize sqlite3
- cd src
- npx sequelize-cli init
- sequelize model:generate --name User --attributes userId:string,name:string,engName:string
- sequelize db:migrate
- sqlite 확인
