const types = [
].map((type) => require(`./${type}`));
const schema = require('./schema');
const resolverMap = require('./resolver');

const by = (key) => (value) => value[key];

const filterMap = (key) => types.filter(by(key)).map(by(key));
const authorizors = filterMap('authorizor');
const resolvers = filterMap('resolver');
const models = filterMap('model');

const resolver = Object.assign({}, resolverMap, ...resolvers);

const {
  makeExecutableSchema
} = require('graphql-tools');

const compileSchema = () => makeExecutableSchema({
  typeDefs: [schema, ...models],
  resolvers: resolver
});

module.exports = compileSchema;
