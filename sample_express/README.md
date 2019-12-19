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
- app.js [ delete ]

  ```javascript
  // view engine setup
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "jade");

  ...
  app.use(express.static(path.join(__dirname, "public")));
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
