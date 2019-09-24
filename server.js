const { GraphQLServer } = require('graphql-yoga')
const { getRover } = require('./api')
const PORT = process.env.PORT || 5000
const typeDefs = `
  type Query {
    information: String
    rover(roverName: String): Rover
  }

  type Rover {
    name: String
    landingDate: String
    launchDate: String
    status: String
    maxSol: Int
    maxDate: String
    totalPhotos: Int
    photos: [Photo]
  }

  type Photo {
    id: Int
    sol: Int
    src: String
    earthDate: String
  }
`

const resolvers = {
  Query: {
    information: () => "This is a graphql server",
    rover: (root, args) => getRover(args.roverName)
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start({ port: PORT }, () => console.log('Server is running...'))
