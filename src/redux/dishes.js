import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
    isLoading:true,
    errMess:null,
    dishes:[]
    }, action) => {
    switch (action.type){
        case ActionTypes.ADD_DISHES:
                return {...state,isLoading:false,errMess:null,dishes:action.payload};

        case ActionTypes.DISHES_LOADING:
         //  sprint operator of ES6
          return {...state,isLoading:true,errMess:null,dishes:[]};
        
         case ActionTypes.DISHES_FALIED:
                return {...state,isLoading:false,errMess:action.payload,dishes:[]};
        default:
            return state;
    }
}