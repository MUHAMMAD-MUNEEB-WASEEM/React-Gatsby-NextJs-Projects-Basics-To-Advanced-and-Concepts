const { gql } = require('apollo-server');

const typeDefs = gql`
  type User{
      name: String
      age: Int
  }

  type Course{
      name: String
      courseId: Int
  }
  
  type Query{
      user: User
      course: Course
  }
`;

module.exports = typeDefs;
