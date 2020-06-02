// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { data } = context;
    if (!data.text) {
      throw new Error("A message must have a text");
    }
    const { user } = context.params;
    const text = data.text.substring(0, 400);
    context.data = {
      text,
      userId: user._id,
      createAt: new Date().getTime(),
    };
    return context;
  };
};
