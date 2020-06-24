const socket = io();

const client = feathers();
client.configure(feathers.socketio(socket));

client.configure(
  feathers.authentication({
    storage: window.localStorage,
  })
);

const login = async () => {
  try {
    return await client.reAuthenticate();
  } catch (error) {
    return await client.authenticate({
      strategy: "local",
      email: "testemail@email.com",
      password: "testpassword",
    });
  }
};

const main = async () => {
  const auth = await login();

  console.log("User is authenticated", auth);

  await client.logout();
};

main();
