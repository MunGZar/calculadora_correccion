import express from "express";
import { sumar, restar } from "./calculadora.js";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/sumar", (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: sumar(a, b) });
});

app.post("/restar", (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: restar(a, b) });
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
