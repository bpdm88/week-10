import axios from "./axios";

//Q1
axios.get("/articles").then(({ data }) => console.log(data.data));

//Q2
axios
    .post("/articles", {
        title: "Article Ben",
        content: "Something interesting",
        tags: ["Hello"],
    })
    .then(({ data }) => console.log(data.data.id));

//Q3
axios.get("/articles/60").then(({ data }) => console.log(data.data));

//Q4
axios
    .patch("/articles/64", { tags: ["spoons", "api"] })
    .then(({ data }) => console.log(data.data.tags));

//Q5
axios.delete("/articles/74").then(({ data }) => console.log("DELETED!"));

//Q6
axios
    .post("/articles/60/comments", {
        email: "hello@gmail.com",
        comment: "Another great read",
    })
    .then(({ data }) => console.log(data.data.id));

//Q7

axios.get("/articles/60/comments").then(({ data }) => console.log(data.data));

//Q8

axios.get("/tags").then(({ data }) => console.log(data.data));
