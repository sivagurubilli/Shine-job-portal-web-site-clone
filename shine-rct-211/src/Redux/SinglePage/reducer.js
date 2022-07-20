import * as types from "./actionTypes"

const initState = {
    loading: false,
    job: [],
    error:false
}

export const jobDetailsReducer = (state=initState,{type,payload}) => {
    switch (type) {
        default:
            return state;
    }
}