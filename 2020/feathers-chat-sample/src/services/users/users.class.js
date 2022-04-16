const { Service } = require("feathers-nedb");
const crypto = require("crypto");
const gravatarUrl = "https://s.gravatar.com/avatar";

const query = "s=60";

const getGravatar = (email) => {
  const hash = crypto
    .createHash("md5")
    .update(email.toLowerCase())
    .digest("hex");

  return `${gravatarUrl}/${hash}?${query}`;
};
exports.Users = class Users extends Service {
  create(data, params) {
    const { email, name, githubId, password } = data;

    const avatar = data.avatar || getGravatar(email);
    const userData = {
      email,
      name,
      password,
      githubId,
      avatar,
    };
    return super.create(userData, params);
  }
};
