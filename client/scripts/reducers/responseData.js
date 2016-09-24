export default function responseDataReducer (state={}, action){
    switch(action.type){
        case EXTRA_RESPONSE:
            return action.error;
        default:
            return state;
    }
}