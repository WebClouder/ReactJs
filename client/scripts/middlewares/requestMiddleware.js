import {showErrorMessage, showSuccessMessage} from '../actions/message';
import {MESSAGE_ERROR, SERVER_ERROR, VALIDATION_ERROR} from '../constants/actionTypes/error';

export default function requestMiddleware(store){
    return (next) => (action) => {
        let request = action.request;
        if(request){
            request.end((error, res) => {
                $('#loading').modal('hide');
                if(error){
                    next(showErrorMessage(error.message));
                    next({type: SERVER_ERROR, requestData: action.requestData})
                }else{ 
                    let responseData = res.body || {isSuccess: false, errorMessage: '接收到空返回值!'};
                    if(responseData.isSuccess === false){
                        next(showErrorMessage(responseData.errorMessage));
                        next({type: VALIDATION_ERROR, errors: responseData.validationMessages, requestData: action.requestData});
                        if(action.requestData){
                            next({type: MESSAGE_ERROR, requestData: action.requestData});
                        }
                    }else{
                        next(showSuccessMessage(responseData.successMessage));
                        next({type: action.type, data: responseData.data});
                    }
                }
            })
        }else{
            next(action);
        }
    }
}