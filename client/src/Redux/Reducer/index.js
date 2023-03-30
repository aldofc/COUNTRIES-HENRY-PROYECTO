import {GET_COUNTRIES} from "../Actions/index"
import { GET_COUNTRIES_BY_ID } from "../Actions/index";
import { LOADER } from "../Actions/index";
import { GET_COUNTRIES_BY_NAME } from "../Actions/index";

const initialState = {
    countries :[],
    countriesById :{},
    loader:true,
    
    
}

function rootReducer( state = initialState , action){
   switch (action.type){
    case GET_COUNTRIES:
        return{
            ...state,
            countries: action.payload,
        };
        case GET_COUNTRIES_BY_ID:
            return{
                ...state,
                countriesById : action.payload,
            };
            case GET_COUNTRIES_BY_NAME:
                return{
                    ...state,
                    countries: action.payload,
                };
            case LOADER:
                const loader = state.loader
                if( loader == true ) {
                    return {
                        ...state,
                        loader: false,
                    }
                }else{
                    return{
                        ...state,
                        loader: true,
                    }
                };
                
        default: 
            return {...state}
   }
}


export default rootReducer;