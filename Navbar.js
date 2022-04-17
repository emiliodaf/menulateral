import React from 'react'
import { IconLogo, IconLogoMobile, Menu, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapper } from './Navbar.styled'
import { AiFillGithub } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';


export const Navbar = () => {
          const [click, setClick] = useState (false);
          const ChangeClick = () => {
            setClick(!click);
            console.log(click);
          }
  return (
    <>
        <NavbarContainer>
            <NavbarWrapper>
              <IconLogo>
                 <AiFillGithub  fontSize={40}/>
                  React_Navbar
              </IconLogo>

           <IconLogoMobile onClick={ () => ChangeClick()}>
                {
                  click ? <FaTimes /> : <FaBars />
                }
           </IconLogoMobile>

              <Menu click = {click}>
                <MenuItem onClick={ () => ChangeClick()}>
                   <MenuItemLink>HOME</MenuItemLink>
                </MenuItem>
                <MenuItem onClick={ () => ChangeClick()}>
                   <MenuItemLink>SOBRE</MenuItemLink>
                </MenuItem>
                <MenuItem onClick={ () => ChangeClick()}>
                   <MenuItemLink>SERVIÇOS</MenuItemLink>
                </MenuItem>
                <MenuItem onClick={ () => ChangeClick()}>
                   <MenuItemLink>CONTATO</MenuItemLink>
                </MenuItem>
              </Menu>
          </NavbarWrapper>
        </NavbarContainer>  
    
    </>
  )
}
