const { ApolloServer } = require('apollo-server');//fetch appollo server
const typeDefs = require('./schema.js');//it fetch all types from schema file

const resolvers = {
    Query : {
       user : () => {
           //logic to call the database or another api
           return {
               name: "muneeb",
               age: 21
           }
       } 
    }
}


const server = new ApolloServer({ typeDefs, resolvers });//and then we specify those types in appollo server

server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/dev
    `);
  });