import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from '../../components/layout'
import UpcomingEvents from '../../components/upcomingevents'
import MessagePreview from '../../components/messagepreview'
import List from '../../components/list'


const TrainerDashboard = () => (
    <Layout login={"trainer"}>
        <UpcomingEvents />
        <MessagePreview />
        <List title={"Clients"} />
    </Layout>
)

export default TrainerDashboard