import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import SmallBtn from './smallbutton'

const HeaderContainer = styled.div`
  background-color: grey;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const LogoAndGreetingContainer = styled.div`
  display: flex;
`

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
  background-color: pink;
`

const Greeting = styled.p`
  align-self: center;
  margin: 0;
`

const Navigation = styled.nav`
  justify-self: flex-end;
  align-self: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const DropdownBtn = styled.div`
  margin-left: auto;
  margin-top: 20px;
  margin-right: 20px;
  padding: 5px;
`

const DropdownMenu = styled.div`
  display: block;
`

const MenuList = styled.ul`
  list-style-type: none;
`

const MenuItem = styled.li`
  text-decoration:none;
  margin-left: 48px;
`

const LogoutBtn = styled(SmallBtn)`
  background-color: red;
  color: white;
  padding: 5px;
`

class Header extends React.Component {

  constructor() {
    super();

    this.state = {
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this)

  }

  showMenu(event) {
    event.preventDefault();

    this.setState({showMenu: true}, () => (
      document.addEventListener('click', this.closeMenu)
    ));
  }

  closeMenu(event) {
    if(!this.dropdownMenu.contains(event.target)) {
      this.setState({showMenu: false}, () => (
        document.removeEventListener('click', this.closeMenu)
      ));
    }
  }


  render() {
    return (
      <HeaderContainer>
        <LogoAndGreetingContainer>
          <Logo />
          <Greeting>Hello, Tester!</Greeting>
          <DropdownBtn onClick={this.showMenu}>&#9660;</DropdownBtn>
        </LogoAndGreetingContainer>
        <Navigation>
          {this.state.showMenu ? 
            ( <DropdownMenu ref={(element) => {this.dropdownMenu = element;}}>
                <MenuList>
                  <MenuItem><Link>Messages</Link></MenuItem>
                  <MenuItem><Link>Trainers</Link></MenuItem>
                  <MenuItem><Link to='/trainer/profile'>Profile</Link></MenuItem>
                  <MenuItem><Link>Billing</Link></MenuItem>
                  <MenuItem><LogoutBtn>Logout</LogoutBtn></MenuItem>
                </MenuList>
            </DropdownMenu> )
            :
            (null)
          }
        </Navigation>
      </HeaderContainer>
    )
  }
}



export default Header
