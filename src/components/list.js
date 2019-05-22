import React from "react"
import styled from "styled-components"
import SmallBtn from "./smallbutton"

const ListContainer = styled.section`
    margin: 40px 15px;
    padding: 0px;
`

const ListTitleContainer = styled.div`
    display: flex;
    border-bottom: 1px solid black;
    padding-bottom: 3px;
`

const ListTitle = styled.h3`
    font-size: 24px;
    margin: 0;
    padding: 0;
    padding-bottom: 0px;
`

const ListItemContainer = styled.div`
    display: flex; 
    flex-direction: column;
    margin: 10px 10px;
    padding: 0px;
`

const ListItem = styled.a`
    font-size: 16px;
    margin: 3px 25px;
    color: black;
`


const List = (props) => (
    <ListContainer>
        <ListTitleContainer>
            <ListTitle>{props.title}</ListTitle>
            <SmallBtn>View All</SmallBtn>
        </ListTitleContainer>
        <ListItemContainer>
            <ListItem href="#">Sara Kronenberg</ListItem>
            <ListItem href="#">John Snow</ListItem>
            <ListItem href="#">Andrew Thanos</ListItem>
            <ListItem href="#">Dany Targaryen</ListItem>
        </ListItemContainer>
    </ListContainer>
)

export default List