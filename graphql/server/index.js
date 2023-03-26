let { ApolloServer } = require('apollo-server')
let typeDefs = require('./schema/schema')//calling types from schema.js
let resolvers =  require('./resolvers/')//calling resolvers

let apolloServer = new ApolloServer({typeDefs, resolvers})

apolloServer.listen().then(({url}) => {
    console.log(`server is running on ${url}`)
})