const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

module.exports = {
    
  createUser: async (req, res) => {
    try {
      const {
        nom,
        prenom,
        email,
        motDePasse,
        telephone,
        dateNaissance,
        adresse,
        role,
        photoProfil,
        googleId,
        equipeId,
      } = req.body;

          const existingUser = await prisma.utilisateur.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ error: "Un utilisateur avec cet email existe déjà." });
    }

      const nouvelUtilisateur = await prisma.utilisateur.create({
        data: {
          nom,
          prenom,
          email,
          motDePasse,
          telephone: telephone || null,
          dateNaissance: dateNaissance ? new Date(dateNaissance) : null,
          adresse: adresse || null,
          role,
          photoProfil: photoProfil || null,
          googleId: googleId || null,
          equipeId: equipeId || null,
          // dateInscription a la valeur par défaut now() 
        },
        include: {
          equipe: {
            include: {
              departement: true
            }
          }
        }
      });

      res.status(201).json(nouvelUtilisateur);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la création de l'utilisateur" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
        const utilisateurs = await prisma.utilisateur.findMany({
        include: {
          equipe: {
            include: {
              departement: true
            }
          }
        }
      });
      res.json(utilisateurs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs" });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      if (data.dateNaissance) {
        data.dateNaissance = new Date(data.dateNaissance);
      }

      const utilisateur = await prisma.utilisateur.update({
        where: { id },
        data,
        include: {
          equipe: {
            include: {
               departement: true
            }
          }
        }
      });

      res.json(utilisateur);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la mise à jour de l'utilisateur" });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      await prisma.utilisateur.delete({ where: { id } });
      res.json({ message: "Utilisateur supprimé" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur" });
    }
  }
};
