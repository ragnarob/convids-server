const eventQuery = require("./event.query");
const makerQuery = require("./maker.query");
const videoQuery = require("./video.query");

module.exports = {
  ...eventQuery,
  ...makerQuery,
  ...videoQuery,
};
