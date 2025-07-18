const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const createEquipe = async (data) => {
  const { nom, description, departementId } = data;

  return prisma.equipe.create({
    data: {
      nom,
      description,
      departement: {
        connect: {
          id: departementId, 
        },
      },
    },
    include: {
      departement: true,
    },
  });
};

const getAllEquipes = async () => {
  return prisma.equipe.findMany({
    include: { departement: true },
  });
};

const getEquipeById = async (id) => {
  return prisma.equipe.findUnique({
    where: { id }, 
    include: { departement: true },
  });
};

const getEquipesByDepartement = async (departementId) => {
  return prisma.equipe.findMany({
    where: { departementId }, 
    include: { departement: true },
  });
};

const updateEquipe = async (id, data) => {
  return prisma.equipe.update({
    where: { id }, 
    data: {
      nom: data.nom,
      description: data.description,
      departement: data.departementId ? { connect: { id: data.departementId } } : undefined,
    },
    include: { departement: true },
  });
};

const deleteEquipe = async (id) => {
  return prisma.equipe.delete({
    where: { id }, 
  });
};

module.exports = {
  createEquipe,
  getAllEquipes,
  getEquipeById,
  getEquipesByDepartement,
  updateEquipe,
  deleteEquipe,
};
