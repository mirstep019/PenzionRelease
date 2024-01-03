import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Footeros>
      <FooterText>
        All rights reserved &copy; {new Date().getFullYear()}
      </FooterText>
      <FooterLink href="https://www.instagram.com/mirasstep/" target="_blank">
        @mirasstep
      </FooterLink>
    </Footeros>
  );
}

const Footeros = styled.div`
  background-color: #1b1b1f;
  padding: 15px 0;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 200px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 20px;
    text-align: center;
  }
  @media (max-width: 470px) {
    font-size: 10px;
  }
`;

const FooterText = styled.p`
  font-family: "Titillium Web", sans-serif;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  color: #d4af37;
  font-weight: 600;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
`;

const FooterLink = styled.a`
  font-family: "Titillium Web", sans-serif;
  color: #d4af37;
  text-decoration: none;
  font-size: 1.1rem;
  margin-left: 10px;
  font-weight: 700;
  letter-spacing: 0.02rem;
`;

export default Footer;