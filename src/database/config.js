const mongoose = require('mongoose');
const { log: logger } = require('console');

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
  } catch (err) {
    logger(err);
    throw new Error('Error al inicializar DB');
  }
};

module.exports = {
  dbConnect,
};
