import { gql } from "apollo-server-express";

export default gql`
  scalar Date

  type Auth {
    token: String!
  }

  type Status {
    message: String!
  }

  type User {
    _id: ID!
    username: String!
    firstname: String
    lastname: String
    birth: String
    avatar: String
    level: Int
    games: [Game]
    createdAt: Date!
    updatedAt: Date!
  }

  type Me {
    _id: ID!
    username: String!
    firstname: String!
    lastname: String!
    birth: String
    avatar: String
    level: Int
    games: [Game]
    createdAt: Date!
    updatedAt: Date!
  }

  type Challenge {
    _id: ID!
    animal: String!
    timeToDraw: Int
    flippoCoins: Int
    difficulty: Int
    createdAt: Date!
    updatedAt: Date!
  }

  type Game {
    _id: ID!
    challenge: String!
    user: User!
    reached: Boolean
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    getUser(_id: ID): User

    getUsers: [User]

    signin(username: String!, password: String!): Auth

    me: Me

    getChallenge(_id: ID): Challenge

    getChallenges: [Challenge]

    getGame(_id: ID!): Game

    getGames: [Game]

    getUserGames: [Game]
  }

  type Mutation {
    signup(
      username: String!
      password: String!
      firstname: String
      lastname: String
      birth: String
      avatar: String
      level: Int
      challengesApproved: [String]
    ): Auth

    updateUser(
      _id: ID!
      username: String
      password: String
      firstname: String
      lastname: String
      birth: String
      avatar: String
      level: Int
      challengesApproved: [String]
    ): User

    deleteUser(_id: ID!): Status

    createChallenge(
      animal: String!
      timeToDraw: Int!
      flippoCoins: Int!
      difficulty: Int!
    ): Challenge

    updateChallenge(
      _id: ID!
      animal: String
      timeToDraw: Int
      flippoCoins: Int
      difficulty: Int
    ): Challenge

    deleteChallenge(_id: ID!): Status

    createGame(challenge: String!): Game

    updateGame(_id: ID!, reached: Boolean!): Game

    deleteGame(_id: ID!): Status
  }
`;
