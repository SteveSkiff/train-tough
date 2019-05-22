import React from "react"
import styled from "styled-components"


const UEContainer = styled.section`
    width: 100%;
    margin: 40px 0px;
    padding: 0px;
`

const UETitle = styled.h1`
    font-size: 16px;
    margin:5px 0px;
    margin-left: 15px;
    padding: 0;
`

const EventContainer = styled.div`
    display: flex;
    overflow: scroll;
    margin: 0;
    padding: 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    max-width: 100vw;
`

const Event = styled.div`
    margin: 15px 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const EventDate = styled.p`
    font-size: 12px;
    margin: 0px;
    padding: 0px;
    padding: 0px 15px;
    border-left: 1px solid black;
    border-right: 1px solid black;
`
const EventTime = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin: 0px 0px;
    padding: 0px 15px;
    border-left: 1px solid black;
    border-right: 1px solid black;
`

const EventClient = styled.p`
    font-size: 14px;
    margin: 0px;
    padding: 0px;
    padding: 0px 15px;
    border-left: 1px solid black;
    border-right: 1px solid black;
`



const UpcomingEvents = () => (
    <UEContainer>
        <UETitle>Upcoming Events</UETitle>
        <EventContainer>
            <Event>
                <EventDate>Monday, 4/1</EventDate>
                <EventTime>9:00AM</EventTime>
                <EventClient>Sara K.</EventClient>
            </Event>
            <Event>
                <EventDate>Monday 4/1</EventDate>
                <EventTime>12:30PM</EventTime>
                <EventClient>John S.</EventClient>
            </Event>
            <Event>
                <EventDate>Sunday, 4/6</EventDate>
                <EventTime>5:OOAM</EventTime>
                <EventClient>Andrew T.</EventClient>
            </Event>
            <Event>
                <EventDate>Tuesday, 4/8</EventDate>
                <EventTime>8:OOPM</EventTime>
                <EventClient>Dany T.</EventClient>
            </Event>
        </EventContainer>
    </UEContainer>
)

export default UpcomingEvents