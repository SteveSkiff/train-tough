import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
    /* position: absolute; */
    /* bottom: 0; */
    /* width: 100%; */
    padding: 10px 0px;
    display: flex;
    justify-content: center;
    background-color: grey;
`

const FooterText = styled.p`
    margin: 0px;
    padding: 0px;
`


const Footer = () => (
    <FooterContainer>
        <FooterText>
        © {new Date().getFullYear()}
          {` `}
          <a href="#">Train Tough</a>
        </FooterText>
    </FooterContainer>
)


export default Footer