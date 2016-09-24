import {
    SHOW_ERROR_MESSAGE, 
    SHOW_INFO_MESSAGE, 
    SHOW_WARNING_MESSAGE, 
    SHOW_SUCCESS_MESSAGE, 
    CLEAR_MESSAGE
} from '../constants/actionTypes/message';

export function showErrorMessage(text) {
    return {
        type: SHOW_ERROR_MESSAGE,
        text: text
    }
}
export function showInfoMessage(text) {
    return {
        type: SHOW_INFO_MESSAGE,
        text: text
    }
}
export function showWarningMessage(text) {
    return {
        type: SHOW_WARNING_MESSAGE,
        text: text
    }
}
export function showSuccessMessage(text) {
    return {
        type: SHOW_SUCCESS_MESSAGE,
        text: text
    }
}
export function clearMessage(){
    return {
        type: CLEAR_MESSAGE
    }
}