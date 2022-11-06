module.exports = {
  makers: async function ({ limit }, context) {
    const makers = context.prismaClient.maker.findMany({
      limit: limit || undefined,
    });
    return makers;
  },
  maker: async function ({ id }, context) {
    const maker = context.prismaClient.maker.findUnique({
      where: {
        id: id,
      },
    });
    return maker;
  },
};
