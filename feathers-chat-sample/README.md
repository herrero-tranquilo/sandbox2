#### [x] 앱 생성

```
npm install @feathersjs/cli -g

mkdir feathers-chat-sample
cd feathers-chat-sample/
feathers generate app

```

#### [x] 서비스 생성

```
feathers generate service
```

```javascript
    const socket = io("http://localhost:3030");
    const app = feathers();

    app.configure(feathers.socketio(socket));

    ...
    app.service("users").create({
        email,
        name,
        githubId,
        password
    });
```
