import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from '../../components/layout'
import UpcomingEvents from '../../components/upcomingevents'
import ProgramTimeline from '../../components/programtimeline'
import MessagePreview from '../../components/messagepreview'
import List from '../../components/list'
import TrainerPreview from '../../components/trainerpreview'
import PackagePreview from '../../components/packagepreview'

const PackageAndTrainerContainer = styled.section`
    margin: 40px 15px;
    padding: 0;
    display: flex;
    justify-content: space-between;
`


const ClientDashboard = () => (
    <Layout>
        <ProgramTimeline />
        <UpcomingEvents />
        <MessagePreview />
        <List title={"Workout History"} />
        <PackageAndTrainerContainer>
            <TrainerPreview />
            <PackagePreview />
        </PackageAndTrainerContainer>
    </Layout>
)

export default ClientDashboard