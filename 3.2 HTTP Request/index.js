import express from "express";

const port = 3000;
const app = express();
//anonomous function
app.get("/", (req, res) => {

    res.send("<h1>Hello</h1>")
})
app.get("/about", (req, res) => {

    res.send("<h1>Another PAge</h1>")
})
app.get("/contact", (req, res) => {

    res.send("<h1>Johnathen</h1>")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
