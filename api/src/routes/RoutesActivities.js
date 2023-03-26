 const { Router } = require('express');
 const { getActivities } = require ('../Handlers/activityHandlers');

 const routesActivities = Router();

 routesActivities.get('/' , getActivities);
// routesActivities.post('/' , postActivities );



 module.exports = routesActivities