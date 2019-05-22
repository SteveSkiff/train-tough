import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"


const LargeBtn = styled(Link)`
    width: 150px;
    height: 75px;
    background-color: ${props => props.color};
    place-self: center;
    color: white;
    text-align: center;
    padding-top: 25px;
    box-shadow: 0px 0px 2px 0px black;
    text-decoration: none;
    grid-column-start: 2;
    grid-row-start: 3;
`

export default LargeBtn