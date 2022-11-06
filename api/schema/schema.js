const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Event {
    id: ID!
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
    id: ID!
    title: String!
    shortTitle: String
    furtrackTag: String
    country: String!
    links: [String]
  }
  type RecurringEventResponse {
    data: RecurringEvent
    error: String
    ok: Boolean
  }
  type Video {
    id: ID!
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
    id: ID!
    name: String!
    links: [String]
    country: String!
  }
  type SongArtist {
    id: ID!
    name: String!
  }
  type Song {
    id: ID!
    title: String!
    artist: SongArtist!
  }
  type Query {
    events(limit: Int): [Event!]!
    event(id: ID!): Event!
    videos(limit: Int, searchText: String): [Video!]
    video(id: ID!): Video!
    makers(limit: Int): [Maker!]
    maker(id: ID!): Maker!
    artists(limit: Int): [SongArtist!]
    artist(id: ID!): SongArtist!
  }
  type Mutation {
    addEvent(title: String!, country: String!, date: String!, links: [String]): EventResponse
    updateEvent(id: ID!, title: String, country: String, date: String, links: [String]): EventResponse
    deleteEvent(id: ID!): EventResponse
  }
`);

module.exports = schema;

// addVideo(title: String!, eventId: ID, makerId: ID!, url: String!, date: String!, songs: [Song]): VideoResponse
// updateVideo(id: ID!, title: String, eventId: ID, makerId: ID, url: String, date: String, songs: [Song]): VideoResponse
// deleteVideo(id: ID!): VideoResponse
// addMaker(name: String!, links: [String], country: String!): Maker
// updateMaker(id: ID!, name: String, links: [String], country: String): Maker
// deleteMaker(id: ID!): Maker
