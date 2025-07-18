const userService = require('../services/user.service');

module.exports = {
  createUser: async (req, res) => {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      if (error.message.includes('email')) {
        return res.status(400).json({ error: error.message });
      }
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la création de l'utilisateur" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs" });
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la mise à jour de l'utilisateur" });
    }
  },

  deleteUser: async (req, res) => {
    try {
      await userService.deleteUser(req.params.id);
      res.json({ message: "Utilisateur supprimé" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur" });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération de l'utilisateur" });
    }
  },

  getUsersByEquipe: async (req, res) => {
    try {
      const users = await userService.getUsersByEquipe(req.params.equipeId);
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs par équipe" });
    }
  },

  getUsersByDepartement: async (req, res) => {
    try {
      const users = await userService.getUsersByDepartement(req.params.departementId);
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs par département" });
    }
  },
};
