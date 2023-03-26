const { Activity , Country } = require ('../db');

const getActivities = async (req,res) => {
    try{
        const activities = await Activity.findAll();
        res.send(activities)
    }catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports={
    getActivities
}
