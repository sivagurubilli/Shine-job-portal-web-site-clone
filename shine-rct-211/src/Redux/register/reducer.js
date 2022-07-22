

import * as types from "./actionTypes"

const initState ={
isAuth : false,
isLoading:false,
isError:false,
token:""

}


export const reducer = (state= initState,action)=>{
    const {type,payload} = action;

console.log(payload)
    switch(type){
        case types.REGISTER_REQUEST:
            return{...state,isLoading:true};
            case types.REGISTER_SUCCESS:
                return {...state,isLoading:false,isAuth:true,token:payload};
                case types.REGISTER_FAILURE:
                    return{...state,isLoading:false,isError:true};
               case types.LOGIN_REQUEST:
                return  {...state,isLoading:true}

case types.LOGIN_SUCCESS:
    return {...state,isLoading:false,isAuth:true}
case types.LOGIN_FAILURE:
return {...state,isError:true}           
         default:
                        return state;
    }


}