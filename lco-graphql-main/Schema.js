import { buildSchema } from 'graphql'

const schme = buildSchema(`
    type Course {
        id: ID
        coursName: String
        category: String
        price: Int
        language: String
        email: String
        teachingAssists: [TeachAssists]
    }

    type TeachAssists {
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
`)