require('dotenv-flow').config();

const express = require('express');
const cors = require('cors');
const { log: logger } = require('console');

const apiRoutes = require('./api/router');
const { dbConnect } = require('./database/config');

const app = express();

const { PORT } = process.env;

dbConnect();

const main = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cors());
  app.use(apiRoutes);

  app.listen(PORT, () => {
    logger(`Listening on PORT: ${PORT}`);
  });
};

main();
