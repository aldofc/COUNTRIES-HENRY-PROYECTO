const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
 const routesCountries = require('./RoutesCountries');
 const routesActivities = require('./RoutesActivities')
 const {routerFilter} = require('./Filters')

 //const routesActivities = require('./RoutesActivities');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

 router.use('/countries' , routesCountries );
 router.use('/activities' , routesActivities );
 router.use('/filters' , routerFilter);



module.exports = router;
