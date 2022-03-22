const { response } = require('express');

const get = async (req, res = response) => { res.json({ message: 'Note get' }); };

const getById = async (req, res = response) => res.json({ message: 'Note get by ID' });

module.exports = {
  get,
  getById,
};
