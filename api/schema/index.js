const schema = require("./schema");

const queries = require("./queries");
const mutations = require("./mutations");

const resolvers = {
  ...queries,
  ...mutations,
};

module.exports = {
  schema,
  resolver: resolvers,
};
