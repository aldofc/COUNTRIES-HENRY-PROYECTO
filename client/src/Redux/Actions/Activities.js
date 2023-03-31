// import axios from 'axios'

// export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES'
// export const POST_ACTIVITY = 'POST_ACTIVITY'

// export function getActivities(){
//     return async function(dispatch){
//         const response = await axios.get('http://localhost:3001/activities')
//         dispatch({
//             type: GET_ALL_ACTIVITIES,
//             payload: response.data
//         })
//     }
// }

// export function postActivity(payload){
//     return async function(dispatch){
//       const response = await axios.post('http://localhost:3001/countries', payload)
//       dispatch({
//         type: POST_ACTIVITY,
//         payload: response.data
//       })
//     }
//   }