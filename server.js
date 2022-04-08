const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Recipe = require('./models/Recipe')
const User = require('./models/User')

const { graphiqlExpress, graphqlExpress} = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))

// Connect schemas with graphql
app.use('/graphql',
bodyParser.json(),
graphqlExpress({
  schema,
  context: {
    Recipe,
    User
  }
}));

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
})
