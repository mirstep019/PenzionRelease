import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logosvg from "../img/penzionlogo2.png";
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar({ menuOpen, toggleMenu, windowWidth }) {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const isMobile = windowWidth <= 1024;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Navigation Hide={!visible} Transparent={prevScrollPos > 10}>
      <NavigationContainer>
        <NavLink to="/">
          <Logo src={logosvg} />
        </NavLink>
        {!isMobile ? (
          <Menu>
            <MenuItem to="/">Domů</MenuItem>
            <MenuItem to="/accommodation">Ubytování</MenuItem>
            <MenuItem to="/pricing">Ceník</MenuItem>
            <MenuItem to="/contacts">Kontakty</MenuItem>
          </Menu>
        ) : (
          <>
            <MenuIcon onClick={toggleMenu}>
              {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </MenuIcon>
            <SideMenu open={menuOpen}>
              <Menu vertical="true">
                <MenuItem to="/" onClick={toggleMenu}>Domů</MenuItem>
                <MenuItem to="/accommodation" onClick={toggleMenu}>Ubytování</MenuItem>
                <MenuItem to="/pricing" onClick={toggleMenu}>Ceník</MenuItem>
                <MenuItem to="/contacts" onClick={toggleMenu}>Kontakty</MenuItem>
              </Menu>
            </SideMenu>
          </>
        )}
      </NavigationContainer>
    </Navigation>
  );
}

const SideMenu = styled.div`
  font-family: "Titillium Web", sans-serif;
  position: relative;
  top: 0;
  right: 0;
  width: 100%; 
  height: 100%; 
  background-color: rgb(247, 232, 203); 
  transform: ${props => (props.open ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform .3s ease-in-out;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
  }
`;

const Navigation = styled.nav`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  margin: 0 auto;
  position: ${props => (props.Hide ? 'relative' : 'sticky')};
  background-color: ${props => (props.Transparent ? 'rgb(247, 232, 203)' : '#f7e8cb')};
  top: ${props => (props.Hide ? '-100px' : '0')};
  transition: top 1.5s, background-color 0.7s;

  @media (max-width: 1024px) {
    position: sticky; // Zajištění, že navigace je vždy viditelná
    background-color: #f7e8cb; // Nastavení průhlednosti pro menší obrazovky
  }
`;


const NavigationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%; // Roztažení na celou šířku
    padding: 0 20px; // Přidání okrajů
  }
`;

const Logo = styled.img`
  margin: 0;
  height: 10rem;
  cursor: pointer;
`;


const MenuIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 30px;
  margin-top: 5px;
  position: fixed;
  right: 10px;
  z-index: 101;

  @media (max-width: 1024px) {
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;

const Menu = styled.ul`
  font-family: "Titillium Web", sans-serif;
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
`;

const MenuItem = styled(NavLink)`
  font-family: "Titillium Web", sans-serif;
  letter-spacing: 0.11rem;
  font-weight: 700;
  color: #484141;
  text-decoration: none;
  font-size: 18px;
  display: block;
  padding: 20px;
  text-transform: uppercase;
  z-index: 11;
`;

export default Navbar;
