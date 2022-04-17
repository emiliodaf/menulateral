import styled from 'styled-components';

export const NavbarContainer = styled.div`

width: 100%;
height: 80px;
position: sticky;
top: 0;
z-index: 99; 
background-color: #222222;
  
`;

export const NavbarWrapper = styled.div `

margin: auto;
width: 100%;
max-width: 1300px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
border: 1px solid grey;

`;

export const IconLogo = styled.div `

display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: flex-start;
font-family: Georgia, serif;
font-size: 1.2rem;
color: #fff;
padding-left: 1rem;

`;

export const Menu = styled.ul `

height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 960px) {


width: 100%;
height: 90vh;
position: absolute;
display: flex;
top: 80px;
left: ${({click}) => click ? 0 : '-100%'};
flex-direction: column;
transition: 0.5s all ease-in;
background-color: gray;
color: #101010;
font-size: 2rem;

}



`;

export const MenuItem = styled.li `

height: 100%;
display: flex;
padding: 0.5rem 1.5rem;
justify-content: center;
align-items: center;
font-size: 1.2rem;
font-family: Oswald;
font-weight: 400;

&:hover {

    background-color: blueviolet;
    border-bottom: 0.4rem solid white;
    transition: 0.5s ease-in-out; 
}

@media screen and (max-width: 960px) {

width: 100%;
height: 70px;

}


`;

export const MenuItemLink = styled.a `

text-decoration: none;
color: white;
cursor: pointer;

`;

export const IconLogoMobile = styled.div `

display: none;

@media screen and (max-width: 968px) {

    display: flex;
    color: #101010;
    font-size: 2rem;
    padding-right: 1rem;
    
}

`;




















