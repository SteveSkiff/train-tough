import React from "react"
import styled from "styled-components"
import SmallBtn from '../components/smallbutton'

const TPContainer = styled.div`
    margin: 0px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: lightgrey;
`

const TPTitle = styled.h5`
    font-size: 22px;
    margin: 0;
    padding: 0;
    padding-bottom: 12px;
    text-decoration: underline;
`

const TrainerInfoContainer = styled.div`
    margin: 0;
    padding: 0;
    margin-right: 5px;
    display: flex;
`

const TrainerImg = styled.img`
    height: 60px;
    width: 60px;
    background-color: pink;
    margin: 0;
`

const TrainerTextContainer = styled.div`
    margin: 0;
    padding: 0;
`

const TrainerName = styled.p`
    margin: 0;
    margin-left: 10px;
    font-weight: bold;
    margin-bottom: 5px;
`

const TrainerBtn = styled(SmallBtn)`
    margin-left: 10px;
    padding: 5px;
`



const TrainerPreview = () => (
    <TPContainer>
        <TPTitle>Trainer</TPTitle>
        <TrainerInfoContainer>
            <TrainerImg />
            <TrainerTextContainer>
                <TrainerName>Steve S.</TrainerName>
                <TrainerBtn>Message</TrainerBtn>
            </TrainerTextContainer>
        </TrainerInfoContainer>
    </TPContainer>
)

export default TrainerPreview