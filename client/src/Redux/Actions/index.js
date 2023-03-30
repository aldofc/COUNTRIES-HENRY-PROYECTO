import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID'
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME'
export const LOADER = 'LOADER'


export function getCountries() {
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/countries')
        return dispatch({
            type : GET_COUNTRIES,
            payload: response.data
        })
    }
}

export function getCountriesById(id) {
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/countries/${id}`)
        return dispatch({
            type : GET_COUNTRIES_BY_ID,
            payload : response.data
        })
    }
}

export function getCountriesByName(payload){
    return async function(dispatch){
        try { 
        const response = await axios.get('http://localhost:3001/countries?name='+payload)
        return dispatch({
            type: GET_COUNTRIES_BY_NAME,
            payload: response.data
        })
    } catch (error) {
        alert('not found country')
    }
}
}





export function Loading(){
    return {type:LOADER};
}

