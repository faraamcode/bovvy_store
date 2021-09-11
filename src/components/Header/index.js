import React from 'react'
import styled from 'styled-components'
import Colors from '../../common/color'
import { StyleLink } from '../../common/GlobalStyle'
import { Link } from 'react-router-dom'
import LogoImage from '../../asset/images/logo.png'
import { GoThreeBars } from 'react-icons/go'

const NavLinksElement = () => {
  return (
    <LinksContainer>
      <LinkItem>
        <Links to='/'>About</Links>
      </LinkItem>
      <LinkItem>
        <Links to='/'>Contact us</Links>
      </LinkItem>
      <LinkItem>
        <Links to='/'>Our Partners</Links>
      </LinkItem>
      <MainButtonStyle>Register</MainButtonStyle>
    </LinksContainer>
  )
}
const LogoElement = () => {
  return (
    <StyleLink to='/'>
      <img src={LogoImage} alt='logo' />
    </StyleLink>
  )
}
const Header = () => {
  return (
    <Wrapper>
      <LogoElement />
      <NavLinksElement />
      <ToggleIcon />
    </Wrapper>
  )
}

export default Header
const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  background: ${Colors.primary};
  border-bottom: 2px solid ${Colors.primary2};
  display: flex;
  justify-content: space-between;
  padding: 10px 80px;
  @media (max-width: 400px) {
    padding: 10px 30px;
  }
  @media (min-width: 401px) and (max-width: 700px) {
    padding: 10px 50px;
  }

  @media (min-width: 701px) and (max-width: 1000px) {
    padding: 10px 60px;
  }
`

const LinksContainer = styled.ul`
  display: flex;
  align-items: center;
  min-width: 300px;
  max-width: 100%;
  list-style: none;
  @media screen and (max-width: 650px) {
    display: none;
  }
`

const Links = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  color: black;
  display: flex;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  span {
    align-self: center;
    margin-left: 5px;
  }
`
export const LinkItem = styled.li`
  color: red;
`

const ToggleIcon = styled(GoThreeBars)`
  font-size: 50px;
  @media screen and (min-width: 650px) {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
`
export const MainButtonStyle = styled.button`
  background-color: #e36414;
  color: #fff;
  padding: 10px 30px;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  @media screen and (max-width: 650px) {
    display: none;
  }
`
