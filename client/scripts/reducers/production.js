import {
    CREATE_PRODUCTION,
    CLEAR_PRODUCTION,
    REFRESH_PRODUCTION
} from '../constants/actionTypes/production';
import {MESSAGE_ERROR} from '../constants/actionTypes/error';
let production = {date: (new Date()).toISOString()}

export default function productionReducer (state={...production}, action){
    switch(action.type){
        case CREATE_PRODUCTION, CLEAR_PRODUCTION:
            return {...production};
        case REFRESH_PRODUCTION:
            return action.production;
        case MESSAGE_ERROR:
            return action.requestData;
        default:
            return state;
    }
}