import {
    GET_ALL_PRODUCTIONS,
    GET_PAGE_OF_PRODUCTIONS,
    UPDATE_PRODUCTION,
    DELETE_PRODUCTIONS,
    SEARCH_PRODUCTIONS
} from '../constants/actionTypes/production';

export default function productionsReducer (state={data: [],totalSize: 10}, action){
    switch(action.type){
        case UPDATE_PRODUCTION:
        case DELETE_PRODUCTIONS:
        case SEARCH_PRODUCTIONS:
        case GET_PAGE_OF_PRODUCTIONS:
            let responseData = action.data;
            return {
                data: responseData.data,
                totalSize: responseData.totalSize
            };
        default:
            return state;
    }
}