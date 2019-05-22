import styled from 'styled-components'
import React from "react"


const PTContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 40px 15px;
`

const TimelineContainer = styled.div`
    margin: 0px 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    color: white;
    background-color: black;
`

const TimelineTitle = styled.h3`
    font-size: 18px;
    margin: 10px 15px;
    padding: 0px;
`

const TimelineTime = styled.p`
    font-size: 50px;
    margin: 10px 15px;
    margin-bottom: 20px;
    padding: 0px;
`

const GoalsContainer = styled.div`
    margin: 10px 15px;
    padding: 0px;
    display: flex;
`

const GoalsTitle = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0;
`

const GoalsDesc = styled.p`
    font-size: 14px;
    margin: 1px;
    margin-left: 7px;
`



const ProgramTimeline = () => (

    <PTContainer>
        <TimelineContainer>
            <TimelineTitle>Program: Lose Weight</TimelineTitle>
            <TimelineTime>Week 2 of 10</TimelineTime>
        </TimelineContainer>
        <GoalsContainer>
            <GoalsTitle>Goals:</GoalsTitle>
            <GoalsDesc>Lose weight, tone up abs, strengthen legs.</GoalsDesc>
        </GoalsContainer>
    </PTContainer>
)

export default ProgramTimeline