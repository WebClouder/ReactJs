import {CLEAR_ERRORS, MESSAGE_ERROR, VALIDATION_ERROR} from '../constants/actionTypes/error';

export default function errorReducer (state={}, action){
    switch(action.type){
        case CLEAR_ERRORS:
            return {};
        case VALIDATION_ERROR:
            return action.errors;
        default:
            return state;
    }
}