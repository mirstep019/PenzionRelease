import React from "react";
import styled from "styled-components";
import { FaUserGroup } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa"; 
import { Overlay, OverlayTitle, Section, StyledParagraph, UnderH1 } from "./Home";
import Footer from "../components/Footer";
import { Parallax } from "react-parallax";
import Ubytovani from "../img/ubytovani.JPG";
import DvouLuzko from "../img/2luzko.jpeg";
import CtyrLuzko from "../img/4luzko.jpeg";
import VelkyPokoj from "../img/velkypokoj.jpeg";
import Apartman from "../img/apartman.jpeg";


const Page = styled.div`
  text-align: center;
`;

function Accommodation() {
  const apartments = [
    {
      title: "Apartmán",
      description:
        "Samostatný apartmán s dvěmi ložnicemi, kuchyní a koupelnou.",
      capacity: "max. 8 osob",
      image: Apartman,
      alt: "Apartmán",
    },
    {
      title: "Velký pokoj",
      description:
        "Velký pokoj s dvěmi ložnicemi a koupelnou - první ložnice: 2 osoby, druhá ložnice: 2-4 osoby.",
      capacity: "max. 6 osob",
      image: VelkyPokoj,
      alt: "Velký pokoj",
    },
    {
      title: "Dvojlůžkový pokoj",
      description: "Dvojlůžkový pokoj s koupelnou.",
      capacity: "2 osoby",
      image: DvouLuzko,
      alt: "Dvojlůžkový pokoj",
    },
    {
      title: "Čtyřlůžkový pokoj",
      description: "Čtyřlůžkový pokoj s koupelnou, kapacita 2-4 osoby.",
      capacity: "max. 4 osoby",
      image: CtyrLuzko,
      alt: "Čtyřlůžkový pokoj",
    },
  ];

  return (
    <Page>
      <Parallax
        bgImage={Ubytovani}
        bgImageAlt="Penzion Breuer"
        strength={300}
        style={{ margin: "0px" }}
      >
        <div style={{ height: "95vh" }}>
          <Overlay>
            <OverlayTitle>Nabídka ubytování</OverlayTitle>
          </Overlay>
        </div>
      </Parallax>

      <Section>
        <StyledH1Main2>Ubytování v Penzionu Breuer</StyledH1Main2>
        <UnderH1>Domácí Pohodlí a Osobní Přístup</UnderH1>
        <StyledParagraph>
          V Penzionu Breuer se můžete těšit na ubytování, které spojuje domácí
          pohodlí s osobní péčí naší rodiny. Naše pokoje a apartmány jsou
          navrženy s důrazem na pohodlí a praktičnost, ať už cestujete sami, s
          partnerem nebo s celou rodinou. Každý pokoj je unikátně zařízen s
          cílem poskytnout vám útulné prostředí pro odpočinek po dni plném
          dobrodružství.
        </StyledParagraph>
        <StyledParagraph>
          Jsme zde, abychom se postarali o všechny vaše potřeby během pobytu. Ať
          už preferujete samostatné objevování okolí, nebo hledáte tipy na
          výlety a aktivity, rádi vám poskytneme osobní doporučení a rady.
          Přijďte si užít nezapomenutelný pobyt v srdci Krkonoš, kde se cítí
          každý host jako součást naší rodiny.
        </StyledParagraph>
      </Section>

      {apartments.map((apartment, index) => (
        <ApartmentSection key={index} reverse={index % 2 !== 0}>
          <ImageWrapper>
            <ImageI src={apartment.image} alt={apartment.alt} />
          </ImageWrapper>
          <Content>
            <UnderH1>{apartment.title}</UnderH1>
            <Description>{apartment.description}</Description>
            <Capacity>
              <PersonIcon size={24} /> {apartment.capacity}
            </Capacity>
          </Content>
        </ApartmentSection>
      ))}

      <FeaturesList>
        <FeatureItem>
          K pokojům patří kuchyň <CheckIcon />
        </FeatureItem>
        <FeatureItem>
          Společenská místnost s dětským koutkem a balkónem <CheckIcon />
        </FeatureItem>
        <FeatureItem>
          V létě je k dispozici dětský koutek venku <CheckIcon />
        </FeatureItem>
        <FeatureItem>
          Wi-Fi v celém penzionu <CheckIcon />
        </FeatureItem>
        <FeatureItem>
          Možnost domluvit se na snídani <CheckIcon />
        </FeatureItem>
        <FeatureItem>
          Možnost parkování v garážích <CheckIcon />
        </FeatureItem>
        <FeatureItem>
          Domácí mazlíčci jsou vítáni za poplatek <CheckIcon />
        </FeatureItem>
      </FeaturesList>

      <Description>
        {" "}
        Maximální kapacita našeho ubytovacího zařízení: 24-25 lidí
      </Description>

      <Footer />
    </Page>
  );
}

const StyledH1Main2 = styled.p`
  font-size: 65px;
  font-weight: 500;
  margin-top: 40px;
  color: #383556;
  text-align: center;

  @media (max-width: 470px) {
    font-size: 40px;
  }
`;


const ApartmentSection = styled.section`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  margin: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  padding: 20px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 10px;
  }

  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    width: 100%;
  }
`;

const Content = styled.div`
  width: 50%;
  padding: 140px;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 600px;
    padding: 10px;
  }
`;


const ImageI = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 0px;

  @media (max-width: 1024px) {
    margin-top: 150px;
    max-width: 600px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0;
    margin: 100px 0 0 0 ;
  }
`;


const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 100px auto;
  width: 650px;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
  }
  @media (max-width: 480px) {
    padding: 0px; //zkouska
  }
`;

const FeatureItem = styled.li`
  color: #383556;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  font-size: 24px;
  font-weight: 500;
  align-items: stretch;
  width: auto;
  max-width: 600px;

  @media (max-width: 1024px) {
    font-size: 20px;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 20px;
    margin-left: 20px;
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;


const CheckIcon = styled(FaCheck)`
  color: green;
  font-size: 20px;
  margin-right: 10px;
  display: flex;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  margin-top: 70px;
  color: #666;
  font-size: 20px;
`;

const Capacity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const PersonIcon = styled(FaUserGroup)`
  margin: 0 5px;
  color: #333;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  width: auto;
  margin: 0 auto;
`;

export default Accommodation;
