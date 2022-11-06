const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Event {
    id: Int!
    title: String!
    shortTitle: String
    furtrackTag: String
    date: String!
    recurringEvent: RecurringEvent!
  }
  type EventResponse {
    data: Event
    error: String
    ok: Boolean
  }

  type RecurringEvent {
    id: Int!
    title: String!
    shortTitle: String
    furtrackTag: String
    country: String!
    links: String
    events: [Event]
  }
  type RecurringEventResponse {
    data: RecurringEvent
    error: String
    ok: Boolean
  }
  type Video {
    id: Int!
    title: String!
    event: Event
    maker: Maker!
    url: String!
    date: String!
    songs: [Song]
  }
  type VideoResponse {
    data: Video
    error: String
    ok: Boolean
  }
  type Maker {
    id: Int!
    name: String!
    links: [String]
    country: String!
  }
  type SongArtist {
    id: Int!
    name: String!
  }
  type Song {
    id: Int!
    title: String!
    artist: SongArtist!
  }
  type Query {
    events(limit: Int): [Event!]!
    event(id: Int!): Event!
    recurringEvents(limit: Int): [RecurringEvent!]!
    recurringEvent(id: Int!): RecurringEvent!
    videos(limit: Int, searchText: String): [Video!]
    video(id: Int!): Video!
    makers(limit: Int): [Maker!]
    maker(id: Int!): Maker!
    artists(limit: Int): [SongArtist!]
    artist(id: Int!): SongArtist!
  }
  type Mutation {
    addRecurringEvent(
      title: String!
      shortTitle: String
      furtrackTag: String
      country: String!
      links: String
    ): RecurringEventResponse
    addEvent(
      title: String!
      shortTitle: String
      furtrackTag: String
      date: String!
      recurringEventId: Int
    ): EventResponse
  }
`);

module.exports = schema;

// addVideo(title: String!, eventId: ID, makerId: ID!, url: String!, date: String!, songs: [Song]): VideoResponse
// updateVideo(id: ID!, title: String, eventId: ID, makerId: ID, url: String, date: String, songs: [Song]): VideoResponse
// deleteVideo(id: ID!): VideoResponse
// addMaker(name: String!, links: [String], country: String!): Maker
// updateMaker(id: ID!, name: String, links: [String], country: String): Maker
// deleteMaker(id: ID!): Maker
