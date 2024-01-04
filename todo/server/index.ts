import express, { Application, Request, Response } from "express";
import cors from "cors";
import { uid } from "uid";
const mysql = require("mysql2");

type TodoResult = {
  id: string;
  todo: string;
};

const connection = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "password",
  database: "todos",
});
const app: Application = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//GET method
app.get("/", (req: Request, res: Response) => {
  console.log("GET COMPLETE");
  const sql = "SELECT * FROM todo";
  connection.query(sql, (err: Error, result: TodoResult) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    return res.status(200).json({ todos: result });
  });
});

// POST method
app.post("/add", (req: Request, res: Response) => {
  console.log("post method!");
  const { todo } = req.body.data;
  const id = uid();
  const sql = `INSERT INTO todo VALUES("${id}","${todo}")`;
  connection.query(sql, (err: Error, result: TodoResult) => {
    if (err) {
      console.log(err)
      return res.status(500).json({ message: err.message });
    }
    return res.status(200).json({ id: id, todo });
  });
});

// Delete method

app.delete("/delete", (req: Request, res: Response) => {
  console.log("delete!");
  const { id } = req.body;
  const sql = `DELETE FROM todo WHERE id = "${id}"`;
  connection.query(sql, (err: Error, result: TodoResult) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    return res.status(200).json({ message: "success" });
  });
});

// put method

app.put("/update", (req: Request, res: Response) => {
  console.log("update");
  const { id, todo } = req.body.data;
  const sql = `UPDATE todo SET todo="${todo}" WHERE id = "${id}"`;
  connection.query(sql, (err: Error, result: TodoResult) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    return res.status(200).json({ id: id, todo });
  });
});

//connection
try {
  app.listen(PORT, () => {
    console.log(`server running at localhost:${PORT}`);
  });
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
