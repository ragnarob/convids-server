module.exports = {
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
};
