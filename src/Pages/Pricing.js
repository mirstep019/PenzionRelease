import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Title } from "./Contacts";

const Page = styled.div`
  text-align: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dddddd00;
  padding: 20px;
  width: 100%;
  margin-bottom: 60px;
  max-width: 100%;
`;

const Title2 = styled.h2`
  font-family: "Titillium Web", sans-serif;
  color: #333;
`;

const Price = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 20px;
  color: #28a745;
`;

const Description = styled.p`
  color: #666;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 1px solid #ddd;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  font-family: "Titillium Web", sans-serif;
  color: #333;
  margin: 0px;
  padding: 20px;
  border-radius: 10px 10px 0px 0px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const RowTitle = styled.span`
  color: #666;
  text-align: left;
  
  @media (max-width: 470px) {
    font-size: smaller;
  }
`;

const RowPrice = styled.span`
  color: #28a745;
  text-align: right;

  @media (max-width: 470px) {
    font-size: smaller;
  }
`;

export const CardContainer2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  width: auto;
  margin: 0 auto;
  justify-content: space-between;
`;

function Pricing() {
  return (
    <Page>
      <Title>Ceník</Title>
      <CardContainer2>
        <Card>
          <Title2>Apartmán</Title2>
          <Price>od 700 Kč / osoba / noc</Price>
          <Description>
            Prostorný apartmán s dvěmi ložnicemi, ideální pro rodiny.
          </Description>
        </Card>

        {/* <Card>
          <Title2>Standardní ubytování</Title2>
          <Price>od 600 Kč / osoba / noc</Price>
          <Description>
            Ubytování v našem penzionu s plným komfortem.
          </Description>
        </Card>
       */}

      <Section>
        <SectionTitle>Další služby</SectionTitle>
        <Row>
          <RowTitle>Snídaně</RowTitle>
          <RowPrice>180 Kč / osoba</RowPrice>
        </Row>
        <Row>
          <RowTitle>Ubytování v období: Říjen - Duben</RowTitle>
          <RowPrice>od 650 Kč / osoba / noc</RowPrice>
        </Row>
        <Row>
          <RowTitle>Ubytování v období: Květen - Září</RowTitle>
          <RowPrice>od 550 Kč / osoba / noc</RowPrice>
        </Row>
        <Row>
          <RowTitle>Turistický poplatek městu</RowTitle>
          <RowPrice>20 Kč</RowPrice>
        </Row>
        <Row>
          <RowTitle>Mazlíčci</RowTitle>
          <RowPrice>100 Kč / noc</RowPrice>
        </Row>
        <Row>
          <RowTitle>Děti do 2 let</RowTitle>
          <RowPrice>ZDARMA</RowPrice>
        </Row>
        <Row>
          <RowTitle>Dětská postýlka</RowTitle>
          <RowPrice>ZDARMA</RowPrice>
        </Row>
        <Row>
          <RowTitle>Sleva pro děti 2 - 11 let</RowTitle>
          <RowPrice>Informace na vyžádání</RowPrice>
        </Row>
        <Row>
          <RowTitle>Příplatek za jednu osobu na pokoji</RowTitle>
          <RowPrice>Informace na vyžádání</RowPrice>
        </Row>
        <Row>
          <RowTitle>Příplatek za jednu noc</RowTitle>
          <RowPrice>Informace na vyžádání</RowPrice>
        </Row>
      </Section>
      </CardContainer2>


      <Footer/>
    </Page>
  );
}

export default Pricing;
