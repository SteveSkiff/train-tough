import styled from 'styled-components'
import React from "react"

const Input = styled.input`
    width: ${props => props.inputSize == "lg" ? "100%" : "50%"};
    box-shadow: inset 0px 0px 3px 0px black;
    border: none;
    border-radius: 2px;
    padding: 2px;
    padding-left: 5px;
    margin: 0px 0px;
`

export default Input