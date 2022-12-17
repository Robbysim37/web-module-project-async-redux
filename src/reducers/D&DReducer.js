import { API_CALL,API_DATA } from "../actions/actions"

const initialState = {
    classList: [],
    isCalling: false,
    err: "",
    test: "test"
}

//generic shape of a reducer function

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case API_CALL:
            console.log("hits the reducer")
            return {
                ...state,
                isCalling: true
            }
            case API_DATA:
                return {
                ...state,
                isCalling: false,
                classList: action.payload
                }
        default:
            return state
    }
}