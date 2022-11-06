const eventsData = require("./data/events");
const videosData = require("./data/videos");
const makersData = require("./data/makers");
const { songs: songsData, artists: artistsData } = require("./data/songs");

const query = {
  events: async function ({ limit }, context) {
    const events = context.prismaClient.event.findMany({
      limit: limit || undefined,
      include: {
        recurringEvent: true,
      },
    });
    return events;
  },
  event: async function ({ id }, context) {
    const event = context.prismaClient.event.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        recurringEvent: true,
      },
    });
    return event;
  },
  recurringEvents: async function ({ limit }, context) {
    const recurringEvents = context.prismaClient.recurringEvent.findMany({
      limit: limit || undefined,
      include: {
        events: true,
      },
    });
    return recurringEvents;
  },
  recurringEvent: async function ({ id }, context) {
    const recurringEvent = context.prismaClient.recurringEvent.findUnique({
      where: {
        id: id,
      },
    });
    return recurringEvent;
  },
  videos: async function ({ limit, searchText }, context) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let videoResults = [...videosData];

        videoResults.sort((a, b) => {
          console.log(a.date, b.date);
          return a.date - b.date;
        });

        if (searchText) {
          const searchTextLower = searchText.toLowerCase();
          const filteredVideos = videoResults.filter((video) => {
            const titleLower = video.title.toLowerCase();
            const makerNameLower = video.maker.name.toLowerCase();
            const eventNameLower = video.event?.title?.toLowerCase() ?? "";
            return (
              titleLower.includes(searchTextLower) ||
              makerNameLower.includes(searchTextLower) ||
              eventNameLower.includes(searchTextLower)
            );
          });
          videoResults = filteredVideos;
        }
        if (limit) {
          videoResults = videoResults.slice(0, limit);
        }
        resolve(videoResults);
      }, 600);
    });
  },
  video: async function ({ id }, context) {
    const video = videosData.find((video) => video.id === id);
    return video;
  },
  makers: async function ({ limit }, context) {
    return limit ? makersData.slice(0, limit) : makersData;
  },
  maker: async function ({ id }, context) {
    const maker = makersData.find((maker) => maker.id === id);
    return maker;
  },
  artists: async function ({ limit }, context) {
    console.log(artistsData);
    return limit ? artistsData.slice(0, limit) : artistsData;
  },
  artist: async function ({ id }, context) {
    const artist = artistsData.find((artist) => artist.id === id);
    return artist;
  },
};

module.exports = query;
