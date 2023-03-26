const {Activity} = require('../db');

const createDB = async (name,difficulty,duration,season) => 
    await Activity.create({name,difficulty,duration,season}); //devuelve una promesa por eso lleva await

module.exports={createDB}