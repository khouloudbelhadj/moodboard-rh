const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

module.exports = {
  createEquipe: async (req, res) => {
    try {
      const { nom, description, departementId } = req.body;
      const equipe = await prisma.equipe.create({
        data: { nom, description, departement: departementId ? { connect: { id: departementId } } : undefined },
      include: {
        departement: true, 
      }
    });
      res.status(201).json(equipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la création d'équipe" });
    }
  },

  getAllEquipes: async (req, res) => {
    try {
      const equipes = await prisma.equipe.findMany({
        include: {
          departement: true,
        },
      });
      res.json(equipes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des équipes" });
    }
  },

  updateEquipe: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      const equipe = await prisma.equipe.update({
        where: { id },
        data,
      });
      res.json(equipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la mise à jour de l'équipe" });
    }
  },

  deleteEquipe: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.equipe.delete({ where: { id } });
      res.json({ message: "Équipe supprimée" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la suppression de l'équipe" });
    }
  }
};
