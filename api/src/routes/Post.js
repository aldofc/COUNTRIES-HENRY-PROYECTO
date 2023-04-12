// const { Router } = require('express')
// const { Activity, Country } = require('../db');


// const router = Router();

// router.post('/' ,  async (req,res) => {
//     let{name, difficulty, duration, season, countries }= req.body

//     //console.log(countries)

//     try{
//         let createActivity = await Activity.create({
//             name,
//             difficulty,
//             duration,
//             season
            
//         })

//         const typeActivity = await Country.findAll({
//             where: {name: countries }
//         })
//         console.log(typeActivity)
//         await createActivity.addCountry(typeActivity)
//         //console.log(createActivity)
//         res.status(200).send(createActivity)
//     } catch (error) {
//         res.status(404).send(error)
//     }
// })


// module.exports=router;



// // const { Router } = require('express');
// // const { postActivity } = require('../Controllers/ControllerActivities/postControllers')
// // const router = Router();

// // router.post('/', async (req, res) => {
// //     const { name, difficulty, duration, season, countries} = req.body;
// //     try {
// //         let newActivity = await postActivity(name, difficulty, duration, season, countries)
// //         res.status(200).send(newActivity)
// //     } catch (error) {
// //         console.log('Error postActivity en el llamado ' + error)
// //     }
// // })



// // module.exports = router;



// // const { Router } = require('express');
// // const { Country, Activity, cache } = require('../db');
// // const { getAllCountries } = require('../Controllers/ControllerActivities/postControllers');

// // const router = Router();


// // router.post('/', async (req, res, next) => {
// //     const { name, difficulty, duration, season, countries } = req.body;

// //     try {
// //         if (!name || !difficulty || !duration || !season || !countries) return res.status(500).send({ error: 'Wrong data' });
// //         if (!cache.allCountries) await getAllCountries();
// //     } catch (error) {
// //         next(error)
// //     }

// //     Activity.create({ name, difficulty, duration, season }).then(activity => {
// //         countries.forEach(id => {
// //             Country.findByPk(id).then(async country => {
// //                 await country.addActivity(activity);
// //             }).catch(error => {
// //                 console.log(error);
// //             });
// //             console.log(activity)

// //             const cacheCountry = cache.allCountries.find(c => c.id === id);
// //             cacheCountry.dataValues.Activities.push(activity);
// //         });

// //         return res.status(201).send(activity);
// //     }).catch(error => {
// //         if (error.name === 'SequelizeUniqueConstraintError') return res.status(500).send('Activity already exists.');
// //         res.status(500).send(error.message);
// //     });
// // });


// // module.exports = router;