import express from "express";

const app = express();
const port = 3000;

app.set("port", process.env.PORT || port);
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}!`));

export default app;
