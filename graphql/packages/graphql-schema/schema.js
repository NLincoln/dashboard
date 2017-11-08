// language=GraphQL Schema
const schema = `
scalar Date
scalar DateTime
scalar DateTimeTimeZone
scalar PhoneNumber
scalar Email
scalar JSON

enum TODO_STATE {
  TODO
  IN_PROGRESS
  DONE
}

type Entry {
  id: ID!
  class: Class!
  state: TODO_STATE
  due_date: DateTimeTimeZone
  notify_at: DateTimeTimeZone
  title: String
}

type Class {
  id: ID!
  title: String
  name: String
  color: String

  entries: [Entry]
}

type Query {
  classes: [Class]
}

input EntryInput {
  class: ID!
  title: String!
}

type Mutation {
  createEntry(entry: EntryInput!): Entry
  updateEntry(id: ID! entry: EntryInput!): Entry

  updateEntryState(id: ID! state: TODO_STATE): Entry
}
`;
module.exports = schema;
