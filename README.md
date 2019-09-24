
![freeCodeCamp-Elkgrove-graphql](https://user-images.githubusercontent.com/31245853/65402206-d5437b80-dd81-11e9-87b9-73967f2a9ed5.png)

# Overview
A server that delivers NASA's Mars Rover API over a GraphQL endpoint. 

This was the accompanying repo created during the **Creating a GraphQL Server with Nodejs & graphql-yoga** presentation at freeCodeCamp - Elk Grove on September 20, 2019.

See Deployed api here: https://graphql-mars-rover-api.herokuapp.com

See Presentation here: https://docs.google.com/presentation/d/1grA9FNVYdam5E4GRWEVkG83DjTYrT7c1a2hq-JkSGqA/edit?usp=sharing

# Getting Started
Run these commands in your terminal 

`git clone`

`yarn` or `npm install` (installs the node modules required to run the server)

`yarn dev` or `npm run dev` (see package.json file under "scripts" for what this runs)

Visit localhost:5000 to see the graphiql and run queries against this endpoint!

# Sample Queries

Querying Rover Manifest Data
```
query {
  rover(roverName: "Curiosity") {
    name
    status
    landingDate
  }
}
```

Querying Rover Manifest Data & Photo Data
```
query {
  rover(roverName: "Curiosity") {
    name
    photos {
      src
    }
  }
}
```

Using the same query multiple times in one graphql call. (Aliasing)
```
query {
  curiosity: rover(roverName: "Curiosity") {
    name
    photos {
      src
    }
  }
  spirit: rover(roverName: "Spirit") {
    name
    status << -- Notice they don't have to be exactly the same query
    photos {
      src
    }
  }  
}
```
