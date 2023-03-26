const { Activity } = require ('../db');
const { createDB } = require('../Controllers/postController');

const getActivities = async (req,res) => {
    try{
        const activities = await Activity.findAll();
        res.send(activities)
    }catch (error) {
        res.status(400).json({error: error.message});
    }
}

const createActivity = async (req,res) => {
    try{
        const {name , difficulty , duration , season} = req.body;
        const newActivity = await createDB(name , difficulty , duration , season);
        res.status(201).json(newActivity);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

module.exports={
    getActivities,
    createActivity
}



