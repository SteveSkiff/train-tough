import React from "react"
import styled from "styled-components"
import SmallBtn from '../components/smallbutton'

const PPContainer = styled.div`
    margin: 0px;
    padding: 0px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: lightgrey;
`

const PPTitle = styled.h6`
    font-size: 22px;
    margin: 0;
    padding: 0;
    padding-bottom: 3px;
    text-decoration: underline;
`

const PPInfo = styled.div`
    margin-bottom: 3px;
`

const PPText = styled.p`
    margin: 0px;
    padding: 0px;
`

const PPBtn = styled(SmallBtn)`
    padding: 4px;
    margin: 0;
`

const PackagePreview = () => (
    <PPContainer>
        <PPTitle>Package</PPTitle>
        <PPInfo>
            <PPText>10 Sessions</PPText>
            <PPText>$300</PPText>
        </PPInfo>
        <PPBtn>Details</PPBtn>
    </PPContainer>
    
)

export default PackagePreview