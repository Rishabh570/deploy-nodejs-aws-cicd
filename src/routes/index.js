const express = require('express');

const appRouter = express.Router();

const salesRoutes = require('./sales.routes');

appRouter.use('/', salesRoutes);

module.exports = appRouter;
