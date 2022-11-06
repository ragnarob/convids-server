const mutation = {
  addMaker: async function ({ name, country, furtrackTag, links }, context) {
    const newMaker = await context.prismaClient.maker.create({
      data: {
        name,
        country,
        furtrackTag,
        links,
      },
    });
    return {
      data: newMaker,
      ok: true,
    };
  },
};

module.exports = mutation;
