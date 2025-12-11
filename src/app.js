import express from "express";
import { sumar, restar } from "./calculadora.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, "../public")));

app.post("/sumar", (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: sumar(a, b) });
});

app.post("/restar", (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: restar(a, b) });
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
