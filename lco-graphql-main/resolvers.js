import { buildSchema } from 'graphql';

class Course {
    constructor(id, { courseName, category, price, language, email, teachingAssists }) {
        this.id = id;
        this.courseName = courseName;
        this.category = category;
        this.price = price;
        this.language = language;
        this.email = email;
        this.teachingAssists = teachingAssists;
    }
}

const courseholder = {};

const resolvers = {
    getCourse: ({ id }) => {
        return new Course(id, courseholder[id]);
    },
    createCourse: ({ input }) => {
        try {
            let id = "23213KNJKNCJDSN";
            courseholder[id] = input;
            console.log(courseholder);
            return new Course(id, input);
        } catch (error) {
            console.error('Error creating course:', error);
            return null;
        }
    }
};

export default resolvers;
