import React from 'react'
import { StyledLi, StyledLink, StyledNav, StyledOl } from './NavBarStyles';

interface NavBarProps{
    links: { name: string; path: string }[]
}
  
// eslint-disable-next-line no-console
const logout= () => (console.log('Deslogueado'))

// const links = [
//   {
//     path:'/',
//     name:'Home',
//   },
//   {
//     path:'/projects',
//     name:'Projects',
//   },
//   {
//     path:'/tasks',
//     name:'Tasks',
//   },
// ]

const NavBar: React.FC<NavBarProps> =({ links }) => {
  return (
    <StyledNav>
      <StyledOl>
        {links.map((link, index) => (
          <StyledLi key={index}>
            <StyledLink to={link.path}>{link.name}</StyledLink>
          </StyledLi>
        ))}
        <StyledLi onClick={logout}>Log Out</StyledLi>
      </StyledOl>
    </StyledNav>
  )
}

export default NavBar;