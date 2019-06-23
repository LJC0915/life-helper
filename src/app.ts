import express from "express";
import {Pool} from "pg";

const app = express();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

app.set("port", process.env.PORT || 3000);
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/db", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM test_table");
    const results = {results: result ? result.rows : null};
    res.send(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

export default app;
