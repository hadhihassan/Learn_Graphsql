import { nanoid } from 'nanoid';

class Course {
    constructor(id, {
        courseName, category, price, language, email, teachingAssists
    }) {
        this.id = id;
        this.courseName = courseName;
        this.category = category;
        this.price = price;
        this.language = language;
        this.email = email;
        this.teachingAssists = teachingAssists;
    }
}
