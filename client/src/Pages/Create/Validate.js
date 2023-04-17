import './Validate.css'

const validate = (activity) => {
    let errors = {};
    if (!activity.name.trim()) {
        errors.name = <h6 className='colorRed'>'Name required' </h6>
    };
    if (activity.difficulty > 5 || activity.difficulty < 1) {
        errors.difficulty = <h6 className='colorRed'>'Maximum difficulty from 1 to 5' </h6>
    };
    if (activity.duration > 24 || activity.duration < 1) {
        errors.duration = <h6 className='colorRed'>'Maximum duration from 1 to 24 hours' </h6>
    };
    if (!activity.season) {
        errors.season = <h6 className='colorRed'>'Select a season'  </h6>
    };
    if (!activity.countries.length) {
        errors.countries = <h6 className='colorRed'>'Select at least one country' </h6>
    };

    return errors;
};


export default validate;