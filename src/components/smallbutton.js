import styled from 'styled-components'
import React from "react"
import LargeBtn from '../components/largebtn'

const SmallBtn = styled(LargeBtn)`
    height: 30px;
    max-width: 100px;
    background-color: ${props => props.color ? props.color : 'lightgreen'};
    margin-left: auto;
    font-size: 16px;
    padding-top: 4px;
    color: black;
    margin-bottom: 10px;
`

export default SmallBtn