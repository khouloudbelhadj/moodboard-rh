const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

module.exports = {
  createDepartement: async (req, res) => {
    try {
      const { nom, description } = req.body;
      const departement = await prisma.departement.create({
        data: { nom, description},
      });
      res.status(201).json(departement);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la création de département" });
    }
  },

  getAllDepartements: async (req, res) => {
    try {
      const departements = await prisma.departement.findMany();
      res.json(departements);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des départements" });
    }
  },

  updateDepartement: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      const departement = await prisma.departement.update({
        where: { id },
        data,
      });
      res.json(departement);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la mise à jour du département" });
    }
  },

  deleteDepartement: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.departement.delete({ where: { id } });
      res.json({ message: "Département supprimé" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la suppression du département" });
    }
  }
};
