const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const createUser = async (data) => {
  const existingUser = await prisma.utilisateur.findUnique({
    where: { email: data.email }
  });

  if (existingUser) {
    throw new Error('Un utilisateur avec cet email existe déjà.');
  }

  return prisma.utilisateur.create({
    data: {
      nom: data.nom,
      prenom: data.prenom,
      email: data.email,
      motDePasse: data.motDePasse,
      telephone: data.telephone || null,
      dateNaissance: data.dateNaissance ? new Date(data.dateNaissance) : null,
      adresse: data.adresse || null,
      role: data.role,
      photoProfil: data.photoProfil || null,
      googleId: data.googleId || null,
      equipeId: data.equipeId || null,
    },
    include: {
      equipe: {
        include: { departement: true }
      }
    }
  });
};

const getAllUsers = async () => {
  return prisma.utilisateur.findMany({
    include: {
      equipe: {
        include: { departement: true }
      }
    }
  });
};

const updateUser = async (id, data) => {
  if (data.dateNaissance) data.dateNaissance = new Date(data.dateNaissance);
  return prisma.utilisateur.update({
    where: { id },
    data,
    include: {
      equipe: {
        include: { departement: true }
      }
    }
  });
};

const deleteUser = async (id) => {
  return prisma.utilisateur.delete({
    where: { id }
  });
};

const getUserById = async (id) => {
  return prisma.utilisateur.findUnique({
    where: { id },
    include: {
      equipe: {
        include: { departement: true }
      }
    }
  });
};

const getUsersByEquipe = async (equipeId) => {
  return prisma.utilisateur.findMany({
    where: { equipeId },
    include: {
      equipe: {
        include: { departement: true }
      }
    }
  });
};

const getUsersByDepartement = async (departementId) => {
  return prisma.utilisateur.findMany({
    where: {
      equipe: {
        departementId: departementId
      }
    },
    include: {
      equipe: {
        include: { departement: true }
      }
    }
  });
};

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserById,
  getUsersByEquipe,
  getUsersByDepartement,
};
