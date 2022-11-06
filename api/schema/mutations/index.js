const eventMutations = require("./event.mutation");
const videoMutations = require("./video.mutation");
const makerMutations = require("./maker.mutation");

module.exports = {
  ...eventMutations,
  ...videoMutations,
  ...makerMutations,
};
