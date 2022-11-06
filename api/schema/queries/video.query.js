module.exports = {
  videos: async function ({ limit, searchText }, context) {
    const videos = context.prismaClient.video.findMany({
      where: {
        OR: [
          { title: { contains: searchText } },
          { maker: { name: { contains: searchText } } },
          { event: { title: { contains: searchText } } },
        ],
      },
      include: {
        maker: true,
        event: true,
      },
      take: limit || undefined,
      orderBy: {
        date: "desc",
      },
    });
    return videos;
  },

  video: async function ({ id }, context) {
    const video = videosData.find((video) => video.id === id);
    return video;
  },
};
