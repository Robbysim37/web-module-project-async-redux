import axios from "axios"


export const API_CALL = "API_CALL"
export const API_DATA = "API_DATA"

export const getAPIData = () => (dispatch) => {
    console.log("Hits the Action Creator")
    dispatch({type:API_CALL})
    axios.get("https://www.dnd5eapi.co/api/classes")
    .then(res => {
        console.log(res.data.results)
        dispatch({type: API_DATA,payload: res.data.results})
    })
}