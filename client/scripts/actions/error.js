import {CLEAR_ERRORS} from '../constants/actionTypes/error';
export function clearErrors(errors) {
    return {
        type: CLEAR_ERRORS
    }
}