import React from "react"
import styled from "styled-components"
import SmallBtn from "../components/smallbutton"

const MPContainer = styled.section`
    margin: 40px 15px;
    padding: 0px;
`

const MPAlertContainer = styled.div`
    display: flex;
    padding-bottom: 3px;
    border-bottom: 1px solid black;
    width: 100%;
`

const MPAlertNumber = styled.p`
    font-size: 55px;
    color: red;
`
const MPTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const MPAlertNew = styled.p`
    font-size: 18px;
    margin: 0;
    margin-left: 5px;
    padding: 0;
`

const MPAlertMessages = styled.p`
    font-size: 18px;
    margin: 0;
    margin-left: 5px;
    padding: 0;
`

const MPMessageContainer = styled.div`
    margin: 10px 35px;
    padding: 0;
`

const MPMessage = styled.p`
    margin: 5px 0px;
    text-decoration: underline;
    padding: 0;
`

const MessagePreview = () => (
    <MPContainer>
        <MPAlertContainer>
            <MPAlertNumber>3</MPAlertNumber>
            <MPTitleContainer>
                <MPAlertNew>New</MPAlertNew>
                <MPAlertMessages>Message(s)</MPAlertMessages>
            </MPTitleContainer>
            <SmallBtn>View All</SmallBtn>
        </MPAlertContainer>
        <MPMessageContainer>
            <MPMessage>Sara K.</MPMessage>
            <MPMessage>Dany T.</MPMessage>
            <MPMessage>Andrew T.</MPMessage>
        </MPMessageContainer>
    </MPContainer>
)

export default MessagePreview