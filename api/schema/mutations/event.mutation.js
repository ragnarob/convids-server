const mutation = {
  addRecurringEvent: async function (
    { title, shortTitle, furtrackTag, country, links },
    context
  ) {
    const newRecurringEvent = await context.prismaClient.recurringEvent.create({
      data: {
        title,
        shortTitle,
        furtrackTag,
        country,
        links,
      },
    });
    return {
      data: newRecurringEvent,
      ok: true,
    };
  },

  addEvent: async function (
    { title, shortTitle, furtrackTag, date, recurringEventId },
    context
  ) {
    const newEvent = await context.prismaClient.event.create({
      data: {
        title,
        shortTitle,
        furtrackTag,
        date,
        recurringEvent: {
          connect: {
            id: recurringEventId,
          },
        },
      },
    });
    return {
      data: newEvent,
      ok: true,
    };
  },
};

module.exports = mutation;
