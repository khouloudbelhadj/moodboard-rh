const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const createDepartement = async (data) => {
  return prisma.departement.create({ data });
};

const getAllDepartements = async () => {
  return prisma.departement.findMany();
};

const updateDepartement = async (id, data) => {
  return prisma.departement.update({
    where: { id },
    data,
  });
};

const deleteDepartement = async (id) => {
  return prisma.departement.delete({
    where: { id }
  });
};

const getDepartementById = async (id) => {
  return prisma.departement.findUnique({
    where: { id }
  });
};

module.exports = {
  createDepartement,
  getAllDepartements,
  updateDepartement,
  deleteDepartement,
  getDepartementById,
};
