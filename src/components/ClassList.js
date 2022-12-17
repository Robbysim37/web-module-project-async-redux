import React, {useEffect} from "react"
import styled from "styled-components"
import { getAPIData } from "../actions/actions"
import {connect} from "react-redux"

const ClassListContainer = styled.div`
margin:auto;
margin-top: 5rem;
display:flex;
flex-wrap: wrap;
width:40rem;
`

const ClassListStyles = styled.div`
width: 5rem;
height: 3rem;
text-align: center;
margin: 2.5rem;
${props => props.id === "barbarian" ? `background-color: red;` : null}
${props => props.id === "bard" ? `background-color: blue;` : null}
${props => props.id === "cleric" ? `background-color: yellow;` : null}
${props => props.id === "druid" ? `background-color: green;` : null}
${props => props.id === "fighter" ? `background-color: lightseagreen;` : null}
${props => props.id === "monk" ? `background-color: orange;` : null}
${props => props.id === "paladin" ? `background-color: gold;` : null}
${props => props.id === "ranger" ? `background-color: lightGreen;` : null}
${props => props.id === "rogue" ? `background-color: grey;` : null}
${props => props.id === "sorcerer" ? `background-color: pink;` : null}
${props => props.id === "warlock" ? `background-color: purple;` : null}
${props => props.id === "wizard" ? `background-color: seagreen;` : null}
`

const ClassList = (props) => {

    useEffect(() => {
        console.log("Hits the useEffect")
        props.getAPIData()
    },[])

    return (
        <ClassListContainer>
            {props.classList.map(el => {
                return <ClassListStyles key={el.index} id={el.index}>{el.name}</ClassListStyles>
            })}
        </ClassListContainer>
    )
}

const mapStateToProps = state => ({
    classList: state.classList
})

export default connect(mapStateToProps,{ getAPIData })(ClassList)