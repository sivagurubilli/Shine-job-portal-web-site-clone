

import * as types from "./actionTypes"

const initState ={
isAuth : false,
isLoadding:false,
isError:false

}


export const reducer = (state= initState,action)=>{
    const {type,payload} = action;


    switch(type){
        case types.REGISTER_REQUEST:
            return{...state,isLoading:true};
            case types.REGISTER_SUCCESS:
                return {...state,isLoadding:false,isAuth:true};
                case types.REGISTER_FAILURE:
                    return{...state,isLoadding:false,isError:true};
                    default:
                        return state;
    }


}