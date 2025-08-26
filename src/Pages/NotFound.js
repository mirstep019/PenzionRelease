import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  return (
    <Wrapper>
      <Title>🤔 Tady ubytování nenajdete...</Title>
      <Text>Vypadá to, že jste se trochu ztratili v Krkonoších.</Text>
      <StyledLink to="/">🏠 Zpátky na hlavní stránku</StyledLink>
    </Wrapper>
  );
}

export default NotFound;

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #383556;
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #555;
`;

const StyledLink = styled(Link)`
  padding: 12px 24px;
  background: #383556;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: #8d774c;
  }
`;
