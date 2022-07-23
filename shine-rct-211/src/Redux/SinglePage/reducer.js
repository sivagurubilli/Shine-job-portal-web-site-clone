import * as types from "./actionTypes"

const initState = {
    loading: false,
    jobDetails: [],
    jobData:[],
    error:false
}

export const jobDetailsReducer = (state=initState,{type,payload}) => {
    switch (type) {
        case types.JOB_DETAILS_GET_REQ:
            return {
                ...state,
                loading: true,
                error:false
            }
        case types.JOB_DETAILS_GET_SUCC:
            return {
                ...state,
                loading: false,
                jobDetails:payload
            }
        case types.JOB_DETAILS_GET_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            };
            case types.HOME_JOB_DETAILS_GET_REQ:
                return {
                    ...state,
                    loading: true,
                    error:false
                }
            case types.HOME_JOB_DETAILS_GET_SUCC:
                return {
                    ...state,
                    loading: false,
                    jobData:payload
                }
            case types.HOME_JOB_DETAILS_GET_FAIL:
                return {
                    ...state,
                    loading: false,
                    error:true
                }
        default:
            return state;
    }
}