const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenue sur le backend MoodBoard RH !");
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});

const userRoutes = require("./routes/user.routes");
app.use("/utilisateurs", userRoutes);

const equipeRoutes = require("./routes/equipe.routes");
app.use("/equipes", equipeRoutes);

const departementRoutes = require("./routes/departement.routes");
app.use("/departements", departementRoutes);
