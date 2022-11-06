const mutation = {
  addVideo: async function (
    { title, eventId, makerId, url, date, songs },
    context
  ) {
    const newVideo = await context.prismaClient.video.create({
      data: {
        title,
        url,
        date,
        songs,
        event: {
          connect: {
            id: eventId,
          },
        },
        maker: {
          connect: {
            id: makerId,
          },
        },
      },
    });
    return {
      data: newVideo,
      ok: true,
    };
  },
};

module.exports = mutation;
