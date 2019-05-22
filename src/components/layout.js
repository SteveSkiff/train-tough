/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled, {createGlobalStyle} from 'styled-components'

import Header from "./header"
import Footer from './footer'
import "./layout.css"

createGlobalStyle`
  body {
    position: relative;
  }
`

const Main = styled.main`
  margin: 0px;
  padding: 0;
`


const Layout = ({ children }, Props) => (
      <>
        <Header login={Props.login} />
        <Main>{children}</Main>
        <Footer />
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  login: PropTypes.string
}

export default Layout
