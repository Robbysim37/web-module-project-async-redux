import React, {useEffect} from "react"
import styled from "styled-components"
import { getAPIData } from "../actions/actions"
import {connect} from "react-redux"

const ClassListStyles = styled.div`

`

const ClassList = (props) => {

    useEffect(() => {
        console.log("Hits the useEffect")
        props.getAPIData()
    },[])

    return (
        <div>
            {props.classList.map(el => {
                return <div key={el.index}>{el.name}</div>
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    classList: state.classList
})

export default connect(mapStateToProps,{ getAPIData })(ClassList)