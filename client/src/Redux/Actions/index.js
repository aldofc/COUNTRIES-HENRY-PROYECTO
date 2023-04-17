import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID'
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME'
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES'
export const POST_ACTIVITY = 'POST_ACTIVITY'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const CLEAN_COUNTRY_ID = 'CLEAN_COUNTRY_ID'
export const SORT_BY_ASC_OR_DESC = 'SORT_BY_ASC_OR_DESC'
export const CLEAN = 'CLEAN'
export const LOADER = 'LOADER'
export const SORT_CONTINENT = 'SORT_CONTINENT'
export const FILTER_ACTIVITIES = 'FILTER_ACTIVITIES'

export function getCountries() {
    return async function (dispatch) {
        const response = await axios.get('/countries')
        return dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        })
    }
}

export function getCountriesById(id) {
    return async function (dispatch) {
        const response = await axios.get(`/countries/${id}`)
        return dispatch({
            type: GET_COUNTRIES_BY_ID,
            payload: response.data
        })
    }
}

export function getCountriesByName(payload) {
    return async function (dispatch) {
        try {
            const response = await axios.get('/countries?name=' + payload)
            return dispatch({
                type: GET_COUNTRIES_BY_NAME,
                payload: response.data
            })
        } catch (error) {
            alert('not found country')
        }
    }
}

export function getAllActivities() {
    return async function (dispatch) {
        
            var json = await axios.get(`/activities`)
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: json.data
            })
        } 
    };


export function postActivity(payload) {
    return async function (dispatch) {
        
            var json = await axios.post('/activities', payload)
            return dispatch({
                type: POST_ACTIVITY,
                payload: json.data
            })
        } 
    };


export function orderByName(payload) {
    return ({
        type: SORT_BY_NAME,
        payload
    })
}

export function orderByAscOrDesc(payload) {
    return ({
        type: SORT_BY_ASC_OR_DESC,
        payload
    })
}


export function filterContinent(payload) {
    return ({
        type: SORT_CONTINENT,
        payload
    })
}

export function Loading() {
    return { type: LOADER };
}


export function activitiesFilter(payload) {
    return({
        type: FILTER_ACTIVITIES,
        payload: payload
    })
}

