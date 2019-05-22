import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from '../../components/layout'
import LargeLogo from '../../components/largelogo'
import SmallBtn from '../../components/smallbutton'

const TPIntroContainer = styled.section`
    display: flex;
    margin: 40px 15px;
    padding: 0;
`

const TPEditContainer = styled.div`
    margin: 20px 15px;
    padding: 0;
    display: flex;
`

const TPDetailsContainer = styled.div`
    margin: 0;
    padding: 0;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const TPBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px 0px 0px;
    padding: 0;
`

const TPInfoContainer = styled.section`
    margin: 40px 15px;
    padding: 0;
`

const TPSubSecContainer = styled.div`
    margin: 40px 0px;
    padding: 0;
`

const TPSubSecContainerRow = styled(TPSubSecContainer)`
    display: flex;
    justify-content: space-between;
`

const TPSmallSec = styled.div`
    margin: 0;
    padding: 0;
`

const TrainerImg = styled(LargeLogo)`
    height: 150px;
    width: 150px;
    margin: 0;
    padding: 0;
`

const TrainerName = styled.h1`
    font-size: 28px;
    margin: 0;
    padding: 0;
`

const TPSubSectionTitle = styled.p`
    font-size: 20px;
    margin: 0;
    padding: 0;
    text-decoration: underline;
`

const TPDetailText = styled.p`
    font-size: 16px;
    margin: 0;
    padding: 0;
`

const TPList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`

const TPListItem = styled.li`
    margin: 0; 
    padding: 0;
`



const Profile = () => (
    <Layout> 
        <TPEditContainer>
            <SmallBtn color="yellow" to='/trainer/profile_edit/'>Edit Profile</SmallBtn>
        </TPEditContainer>
        <TPIntroContainer>
            <TrainerImg />
            <TPDetailsContainer>
                <TrainerName>Steve Skiff</TrainerName>
                <TPDetailText>NASM CPT, CPR / AED</TPDetailText>
                <TPDetailText>Chicago, IL: Edgewater</TPDetailText>
                <TPBtnContainer>
                    <SmallBtn to='/trainer/dashboard/'>Message</SmallBtn>
                    <SmallBtn to='/trainer/dashboard/'>Packages</SmallBtn>
                </TPBtnContainer>
            </TPDetailsContainer>
        </TPIntroContainer>

        <TPInfoContainer>
            <TPSubSecContainer>
                <TPSubSectionTitle>About</TPSubSectionTitle>
                <TPDetailText>Steve began his training career in the heart of L.A., first with a position as a trainer in Hollywood at Crunch Fitness. His focus in fitness revolves around holistic training styles and bodybuilding technique that will help any level of athlete.</TPDetailText>
            </TPSubSecContainer>
            <TPSubSecContainerRow>
                <TPSmallSec>
                    <TPSubSectionTitle>Certifications</TPSubSectionTitle>
                    <TPList>
                        <TPListItem>NASM CPT</TPListItem>
                        <TPListItem>CPR / AED</TPListItem>
                        <TPListItem>CSCS</TPListItem>
                        <TPListItem>Bulgarian Bags</TPListItem>
                    </TPList>
                </TPSmallSec>
                <TPSmallSec>
                    <TPSubSectionTitle>Training Styles</TPSubSectionTitle>
                    <TPList>
                        <TPListItem>HIIT</TPListItem>
                        <TPListItem>Holistic Technique</TPListItem>
                        <TPListItem>Bodybuilding</TPListItem>
                    </TPList>
                </TPSmallSec>
            </TPSubSecContainerRow>
            <TPSubSecContainerRow>
                <TPSubSectionTitle>Availability</TPSubSectionTitle>
                <TPSmallSec>
                    <TPList>
                        <TPListItem>Monday</TPListItem>
                        <TPListItem>Tuesday</TPListItem>
                        <TPListItem>Wednesday</TPListItem>
                        <TPListItem>Thursday</TPListItem>
                        <TPListItem>Friday</TPListItem>
                    </TPList>
                </TPSmallSec>
                <TPSmallSec>
                    <TPList>
                        <TPListItem>8AM - 10PM</TPListItem>
                        <TPListItem>Unavailable</TPListItem>
                        <TPListItem>3PM - 8PM</TPListItem>
                        <TPListItem>8AM - 10PM</TPListItem>
                        <TPListItem>Unavailable</TPListItem>
                    </TPList>
                </TPSmallSec>
            </TPSubSecContainerRow>
        </TPInfoContainer>

    </Layout>
)

export default Profile