const { response } = require('express');

module.exports = async (req, res = response) => res.json({ message: 'Note delete' });
