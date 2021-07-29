import isLogged from './isLogged'
import {createStore} from 'redux';

const allReducers = combineReducers({
    isLogged,
    
})

export default allReducers;