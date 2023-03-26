import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from '../Reducer/index';


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

