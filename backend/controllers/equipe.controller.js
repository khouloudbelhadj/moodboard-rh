const equipeService = require("../services/equipe.service");

module.exports = {
createEquipe: async (req, res) => {
  try {
    const { nom, description, departementId } = req.body;

    if (!departementId || typeof departementId !== 'string' || departementId.trim() === '') {
      return res.status(400).json({ error: "ID de département invalide" });
    }

    const equipe = await equipeService.createEquipe({
      nom,
      description,
      departementId, 
    });

    res.status(201).json(equipe);
  } catch (error) {
    console.error(error);
    if (error.code === 'P2003') {
      res.status(400).json({ error: "Département inexistant" });
    } else {
      res.status(500).json({ error: "Erreur lors de la création de l'équipe" });
    }
  }
},

  getAllEquipes: async (req, res) => {
    try {
      const equipes = await equipeService.getAllEquipes();
      res.json(equipes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des équipes" });
    }
  },

  getEquipeById: async (req, res) => {
    try {
      const equipe = await equipeService.getEquipeById(req.params.id);
      if (!equipe) {
        return res.status(404).json({ error: "Équipe non trouvée" });
      }
      res.json(equipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération de l'équipe" });
    }
  },

  getEquipesByDepartement: async (req, res) => {
    try {
      const equipes = await equipeService.getEquipesByDepartement(req.params.departementId);
      res.json(equipes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des équipes du département" });
    }
  },

updateEquipe: async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: "ID invalide" });
    }

    if (req.body.departementId && typeof req.body.departementId !== 'string') {
      return res.status(400).json({ error: "ID de département invalide" });
    }

    const equipe = await equipeService.updateEquipe(id, req.body);
    res.json(equipe);
  } catch (error) {
    console.error(error);
    if (error.code === 'P2003') {
      res.status(400).json({ error: "Département invalide ou inexistant" });
    } else {
      res.status(500).json({ error: "Erreur lors de la mise à jour de l'équipe" });
    }
  }
},

  deleteEquipe: async (req, res) => {
    try {
      await equipeService.deleteEquipe(req.params.id);
      res.json({ message: "Équipe supprimée" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la suppression de l'équipe" });
    }
  },
};
