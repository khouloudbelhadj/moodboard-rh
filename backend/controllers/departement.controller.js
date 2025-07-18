const departementService = require("../services/departement.service");

module.exports = {
  createDepartement: async (req, res) => {
    try {
      const departement = await departementService.createDepartement(req.body);
      res.status(201).json(departement);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la création du département" });
    }
  },

  getAllDepartements: async (req, res) => {
    try {
      const departements = await departementService.getAllDepartements();
      res.json(departements);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des départements" });
    }
  },

  getDepartementById: async (req, res) => {
    try {
      const departement = await departementService.getDepartementById(req.params.id);
      if (!departement) {
        return res.status(404).json({ error: "Département non trouvé" });
      }
      res.json(departement);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération du département" });
    }
  },

  updateDepartement: async (req, res) => {
    try {
      const departement = await departementService.updateDepartement(req.params.id, req.body);
      res.json(departement);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la mise à jour du département" });
    }
  },

  deleteDepartement: async (req, res) => {
    try {
      await departementService.deleteDepartement(req.params.id);
      res.json({ message: "Département supprimé" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la suppression du département" });
    }
  },
};
