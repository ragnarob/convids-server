const schema = require("./schema");
const eventMutation = require("./mutations/event.mutation");
const videoMutation = require("./mutations/video.mutation");
const makerMutations = require("./mutations/maker.mutation");
const query = require("./query");

const resolvers = {
  ...query,
  ...eventMutation,
  ...videoMutation,
  ...makerMutations,
};

module.exports = {
  schema,
  resolver: resolvers,
};
