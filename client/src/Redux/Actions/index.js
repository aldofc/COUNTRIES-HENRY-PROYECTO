import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID'
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


export function Loading(){
    return {type:LOADER};
}

