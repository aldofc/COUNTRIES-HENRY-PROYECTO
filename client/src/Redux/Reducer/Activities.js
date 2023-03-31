// import {   GET_ALL_ACTIVITIES,  POST_ACTIVITY } from "../Actions/Activities";

// const initialState = {
//     activities : {all: []},
//     newActivity: { created: false, info: '', error: ''},

// }

// function activities(state = initialState ,action){
//     switch(action.type){
//         case GET_ALL_ACTIVITIES:
//             return{
//                 ...state,
//                 activities: {
//                     all: action.payload
//                 }
//             };
//             case POST_ACTIVITY:
//                 return payload.error ? { 
//                     ...state,
//                     newActivity:{
//                         created: false , info : action.payload
//                     }
//                 }:{
//                     ...state,
//                     newActivity: {
//                         created: true , info : action.payload
//                     }
//                 }
                
//     }
// }

// export default activities