const express = require("express");
const path = require("path");

const app = express();
/* */

app.use(express.static(__dirname));

app.use(express.json());


const { sumar, restar }= require("./calculadora");


app.post("/sumar", (req, res) => {
    const { a, b } = req.body;
    res.json({ resultado: sumar(a, b) });
});

app.post("/restar", (req, res) => {
    const { a, b } = req.body;
    res.json({ resultado: restar(a, b) });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));

module.exports = app;
