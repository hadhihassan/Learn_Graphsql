import { buildSchema } from 'graphql'

const schme = buildSchema(`
    type Course {
        id: ID
        coursName: String
        category: String
        price: Int
        language: String
        email: String
        teachingAssists: [TeachingAssists]
    }

    type TeachingAssists {
        firstName: String
        lastName: String
        experience: Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }

    type Query {
        getCourse(id): Course
    }

    input CourseInput {
        id: ID
        coursName: String!
        category: String
        price: Int!
        language: String
        email: String
        stack: Stack
        teachingAssists: [TeachingAssists]
    }
    input InputTeachingAssists{
        firstName: String
        lastName: String
        experience: Int
    }

    type Mutation {
        createCourse(input: CourseInput): Course
    }
`)