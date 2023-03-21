const { Router } = require('express');
const postActivities = require('../Handlers/postActivitiesHandler')
const getActivities = require('../Handlers/ActivitiesHandler')

const routesActivities = Router();

routesActivities.get('/' , getActivities);
routesActivities.post('/' , postActivities );



module.exports = routesActivities