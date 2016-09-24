import {
    GET_ALL_PRODUCTIONS,
    GET_PAGE_OF_PRODUCTIONS,
    CREATE_PRODUCTION,
    CLEAR_PRODUCTION,
    DELETE_PRODUCTIONS,
    UPDATE_PRODUCTION,
    REFRESH_PRODUCTION,
    GET_PRODUCTION,
    SEARCH_PRODUCTIONS,
    RESET_SEARCH_PRODUCTIONS
} from '../constants/actionTypes/production';
import settings from '../constants/settings';
import createRequest from '../utils/request';
const Request = createRequest(settings.productionRequestUrl);

export function createProduction(production){
    return {
        type: CREATE_PRODUCTION,
        request: Request.post(production),
        requestData: production
    }
}
export function updateProduction(criteria){
    return {
        type: UPDATE_PRODUCTION,
        request: Request.put(criteria)
    }
}
export function deleteProductions(criteria){
    return {
        type: DELETE_PRODUCTIONS,
        request: Request.remove(criteria)
    }
}
export function allProductions(){
    return {
        type: GET_ALL_PRODUCTIONS
    }
}
export function getProduction(id){
    return {
        type: GET_ALL_PRODUCTIONS,
        id: id
    }
}
export function searchProductions(searchString){
    return {
        type: SEARCH_PRODUCTIONS,
        request: Request.search(searchString)
    }
}
export function resetSearch(criteria){
    return {
        type: RESET_SEARCH_PRODUCTIONS,
        request: Request.search(criteria)
    }
}
export function refreshProduction(production){
    return {
        type: REFRESH_PRODUCTION,
        production: {...production}
    }
}
export function fetchPage(pageNum, pageSize, searchString){
    return {
        type: GET_PAGE_OF_PRODUCTIONS,
        request: Request.getPage(pageNum, pageSize, searchString)
    }
}
export function clear(){
    return {
        type: CLEAR_PRODUCTION
    }
}