import { GET_COUNTRIES, SORT_BY_ASC_OR_DESC } from "../Actions/index"
import { GET_COUNTRIES_BY_ID } from "../Actions/index";
import { LOADER } from "../Actions/index";
import { GET_COUNTRIES_BY_NAME } from "../Actions/index";
import { POST_ACTIVITY } from "../Actions/index";
import { GET_ALL_ACTIVITIES } from "../Actions/index";

import { SORT_BY_NAME } from "../Actions/index";

import { SORT_CONTINENT } from "../Actions/index";




const initialState = {
    countries: [],
    countriesById: {},
    allActivities: [],
    backUpCountries: [],
    loader: true,


}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                backUpCountries: action.payload
            };
        case GET_COUNTRIES_BY_ID:
            return {
                ...state,
                countriesById: action.payload,
            };
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                countries: action.payload,
            };
        case POST_ACTIVITY:
            return {
                ...state,
            };
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload
            };
        case SORT_BY_NAME:
            let ordenado = action.payload === 'asc' ?
                state.countries.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1;
                    }
                    return 0
                }) : state.countries.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1
                    }
                    if (b.name.toLowerCase() < a.name.toLowerCase()) {
                        return 1;
                    }
                    return 0
                })
            return {
                ...state,
                countries: ordenado
            };
        case SORT_BY_ASC_OR_DESC:
            let sortAsc = action.payload === "hasc" ?
                state.countries.sort(function (a, b) {
                    if (a.population > b.population) {
                        return 1
                    }
                    if (b.population > a.population) {
                        return -1
                    }
                    return 0
                }) : state.countries.sort(function (a, b) {
                    if (a.population > b.population) {
                        return -1
                    }
                    if (b.population > a.population) {
                        return -1
                    } return 0
                })
            return {
                ...state,
                countries: sortAsc
            };
        case SORT_CONTINENT:

            const filtredCountriesByContinent = state.backUpCountries;
            const continentFilteredBC =
                action.payload === "All"
                    ? filtredCountriesByContinent
                    : filtredCountriesByContinent.filter(
                        (el) => el.continent === action.payload
                    );
            return {
                ...state,
                countries: continentFilteredBC,
            };
        case LOADER:
            const loader = state.loader
            if (loader == true) {
                return {
                    ...state,
                    loader: false,
                }
            } else {
                return {
                    ...state,
                    loader: true,
                }
            };

        default:
            return { ...state }
    }
}


export default rootReducer;