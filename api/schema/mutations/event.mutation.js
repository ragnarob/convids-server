const eventsData = require("../data/events");

const mutation = {
  addRecurringEvent: async function ({ recurringEvent }, context) {
    const newRecurringEvent = await context.prismaClient.recurringEvent.create({
      data: {
        ...recurringEvent,
      },
    });
    console.log("NEW RECURRING EVENT IS", newRecurringEvent);
    return {
      data: recurringEvent,
      ok: true,
    };
  },

  addEvent: async function ({ title, country, date, links }, context) {
    const event = {
      id: eventsData.length + 1,
      title,
      country,
      date,
      links,
    };
    eventsData.push(event);
    return {
      data: event,
      ok: true,
    };
  },

  updateEvent: async function ({ id, title, country, date, links }, context) {
    const event = eventsData.find((event) => event.id === id);
    if (!event) {
      return {
        error: "Event not found",
        ok: false,
      };
    }
    event.title = title || event.title;
    event.country = country || event.country;
    event.date = date || event.date;
    event.links = links || event.links;
    return {
      data: event,
      ok: true,
    };
  },

  deleteEvent: async function ({ id }, context) {
    const event = eventsData.find((event) => event.id === id);
    if (!event) {
      return {
        error: "Event not found",
        ok: false,
      };
    }
    eventsData.splice(eventsData.indexOf(event), 1);
    return {
      data: event,
      ok: true,
    };
  },
};

module.exports = mutation;
