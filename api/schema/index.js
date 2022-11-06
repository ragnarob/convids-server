const schema = require("./schema");
const eventMutation = require("./mutations/event.mutation");
const videoMutation = require("./mutations/video.mutation");
const query = require("./query");

const resolvers = {
  ...query,
  ...eventMutation,
  ...videoMutation,
};

module.exports = {
  schema,
  resolver: resolvers,
};
