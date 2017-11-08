const express = require('express');
const schema = require('@dashboard/schema');

const {
  graphqlExpress,
  graphiqlExpress,
} = require('apollo-server-express');
const bodyParser = require('body-parser');

const app = express();

app.use("/graphql", function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

const endPoint = (url, graphiql, schema) => {
  app.use(url, bodyParser.json(), graphqlExpress((request) => {
    return {
      context: {
      },
      schema,
      tracing: request.get('x-tracing') === '1'
    }
  }));

  app.use(graphiql, graphiqlExpress({
    endpointURL: `/api/graphql${url}`,
  }));
};

endPoint('/graphql', '/graphiql', schema());

app.listen(4000);
console.log('GraphQL server started on port 4000');
