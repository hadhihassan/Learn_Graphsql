import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import resolvers from './resolvers';
import schema from './Schema'; 

const app = express();
app.get("/", (req, res) => {
    res.send("Course is there");
});

const root = () => resolvers; 

app.use("/graphql", graphqlHTTP({
    schema,
    rootValue: root, 
    graphiql: true
}));

app.listen(9000, () => {
    console.log("Running app on port 9000");
});
