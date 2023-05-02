import React from 'react'
import github from '../images/github-icon.svg'
import Logo from './graphics/Logo'
import Flex from './Flex'
import Text from './Text'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { space, layout } from 'styled-system'
import css from '@styled-system/css'

const Identity = styled(Link)`
  display: flex;
  align-items: center;
  line-height: 1.2;
  color: black;
  &:visted {
    color: black;
  }
`
const Nav = styled.nav`
  width: 100%;
  ${space}
`;
const NavLink = styled(Link)`
  ${layout}
  display: inline-block;
  padding: 16px;
  height: 50px;
  color: black;
  &:hover {
    background: rgba(0,0,0,.05);
  }
`;
const NavLinkList = styled(Flex)`
  width: 100%;
  ${layout}
`;

const GitHubLink = styled.a(css({
  textDecoration: 'none',
  width: '24px',
  margin: [2 , 2, 3],
}))

const Header = ({isLanding = false}) => (
  <Nav px={[1, 1, 3]} py={[0, 2]}>
    <Flex justifyContent="space-between">
    <Identity to='/'>
      <Logo mr={2} size={['50px', '50px', (isLanding ? '100px' : '75px')]} />
      <div>
        <Text as="h1" fontSize={[ 3, 3, (isLanding ? 6 : 5)] }>
          Tharon Carlson
        </Text>
        <Text as="p" fontSize={[1, 1, (isLanding ? 3 : 2) ]}>
          Front End Developer / UI Designer
        </Text>
      </div>
    </Identity>
    <Flex alignItems='center'>
      <NavLinkList display={['none', 'block']}>
        <NavLink to='/blog'>
          Articles
        </NavLink>
        <NavLink to='/about'>
          About
        </NavLink>
      </NavLinkList>
      <div>
        <GitHubLink
          href="https://github.com/tharon-c/tharon-personal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Github" />
        </GitHubLink>
      </div>
    </Flex>
    </Flex>
    <NavLinkList width="200px" mx="auto" mt="2" justifyContent="space-evenly" display={['flex', 'none']}>
      <NavLink to='/blog'>
        Articles
      </NavLink>
      <NavLink to='/about'>
        About
      </NavLink>
    </NavLinkList>
  </Nav>
)

export default Header
