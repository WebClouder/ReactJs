import {
    SHOW_ERROR_MESSAGE, 
    SHOW_INFO_MESSAGE, 
    SHOW_WARNING_MESSAGE, 
    SHOW_SUCCESS_MESSAGE, 
    CLEAR_MESSAGE
} from '../constants/actionTypes/message';
export default function alertReducer (state={type:'',text:''}, action){
    switch(action.type){
        case SHOW_ERROR_MESSAGE:
        case SHOW_INFO_MESSAGE:
        case SHOW_WARNING_MESSAGE:
        case SHOW_SUCCESS_MESSAGE:
            return {
                type: action.type,
                text: action.text
            };
        case CLEAR_MESSAGE:
            return {
                type: '',
                text: ''
            }
        default:
            return state;
    }
}