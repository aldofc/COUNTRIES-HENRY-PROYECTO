const { Router } = require('express');
const { getActivities } = require('../Handlers/activityHandlers');
const { createActivity } = require('../Handlers/activityHandlers');

const routesActivities = Router();

routesActivities.get('/', getActivities);
routesActivities.post('/', createActivity);

module.exports = routesActivities