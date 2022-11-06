// 1
const { PrismaClient } = require("@prisma/client");

// 2
const prisma = new PrismaClient();

// 3
async function main() {
  // const createpromises = events.map((event) => {
  //   return prisma.event.create({
  //     data: { ...event, date: new Date(event.date), links: event.links[0] },
  //   });
  // });

  // await Promise.all(createpromises);

  // await prisma.recurringEvent.create({
  //   data: {
  //     title: "Furway",
  //     country: "Norway",
  //     links: "https://furway.no",
  //     furtrackTag: "furway",
  //   },
  // });

  await prisma.event.create({
    data: {
      date: new Date("2022-07-15"),
      title: "Furway 2022",
      furtrackTag: "furway_2022",
      recurringEventId: 1,
    },
  });

  // await prisma.event.deleteMany();

  const allEvents = await prisma.event.findMany();
  console.log(allEvents);
}

// 4
main()
  .catch((e) => {
    throw e;
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect();
  });

// const events = [
//   {
//     title: "MFF 2021",
//     country: "USA",
//     date: "2021-11-28",
//     links: "https://furfest.org;https://twitter.com/furfest",
//   },
//   {
//     title: "Eurofurence 2022",
//     country: "Germany",
//     date: "2022-08-23",
//     links: ["https://eurofurence.org", "https://twitter.com/eurofurence"],
//   },
//   {
//     title: "Anthrocon 2022",
//     country: "USA",
//     date: "2022-03-01",
//     links: ["https://anthrocon.org"],
//   },
//   {
//     title: "Furway 2022",
//     country: "Norway",
//     date: "2022-01-01",
//     links: ["https://furway.no"],
//   },
// ];
