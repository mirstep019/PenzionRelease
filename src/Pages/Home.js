import React from "react";
import styled, { keyframes } from "styled-components";
import Kamenec from "../img/kamenec-leto.jpg";
import Park from "../img/pilistata.JPG";
import Krajina from "../img/krajina.JPG";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer";
import Video from "../img/Penzion-Main.mp4";
import Fade from 'react-reveal/Fade';

function Home() {

  return (
    <Page>
      <ParallaxContainer>
        <VideoWrapper>
          <video autoPlay loop muted playsInline>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Overlay>
            <OverlayTitle>Vítejte v rodinném penzionu Breuer</OverlayTitle>
          </Overlay>
        </VideoWrapper>

        <ContactBar>
          <ContactLinks>
            <ContactItem href="tel:+420605181004">
              <FaPhone />
              <HighText>+420 605 181 004</HighText>
            </ContactItem>
            <ContactItem href="tel:+420731816901">
              <FaPhone />
              <HighText>+420 731 816 901</HighText>
            </ContactItem>
            <ContactItem href="mailto:martinabre@seznam.cz">
              <FaEnvelope />
              <HighText>Napište nám</HighText>
            </ContactItem>
          </ContactLinks>
        </ContactBar>
      </ParallaxContainer>
      <Space></Space>
      <Section>
        <Fade bottom>
          <StyledH1Main>Penzion Breuer</StyledH1Main>

        </Fade>
        <Fade bottom>
          <UnderH1>Rodinný penzion z Krkonoš</UnderH1>
        </Fade>
        <Fade bottom>
          <StyledParagraph>
            Penzion Breuer se nachází v srdci Krkonoš, v malebném městečku
            Jablonec nad Jizerou, které je ideálním místem pro milovníky přírody a
            turistiky. Náš rodinný penzion nabízí přátelskou atmosféru a pohodlí,
            které ocení každý náš host. Okolí penzionu je jako stvořené pro pěší i
            cyklistické výlety, a v zimě se můžete těšit na skvělé lyžařské
            podmínky v blízkých střediscích.
          </StyledParagraph>
        </Fade>
        <Fade bottom>
          <StyledParagraph>
            V blízkosti penzionu najdete také řadu historických památek a
            kulturních zajímavostí, které vám přiblíží místní historii a tradice.
            Velmi rádi Vám kdykoliv s čímkoliv během pobytu pomůžeme a poradíme,
            kam třeba vyrazit na výlet a jak si váš pobyt u nás co nejvíce užít.
          </StyledParagraph>
        </Fade>

      </Section>

      <Section2>
        <ContentPic>
          <Fade left>
            <StyledImage src={Kamenec} alt="Park" />
          </Fade>
        </ContentPic>
        <ContentText>
          <Fade bottom>
            <UnderH1>Lyžování v Krkonoších</UnderH1>
            <StyledParagraph>
              V zimě si u nás výborně zalyžujete v místním lyžařském arealu
              Kamenec. Z penzionu na sjezdovku vidíte z oken. Jsme ideálním bodem
              pro strávení Vaší dovolené, pokud chcete vyzkoušet více lyžařských
              středisek. V dojezdné době 10 minut je od nás Rokytnice nad Jizerou,
              Paseky nad Jizerou, Vysoké nad Jizerou či Harrachov! Můžete jít také
              na běžky či se jen tak projít a poznat krásy Krkonoš.
            </StyledParagraph>
          </Fade>

        </ContentText>
      </Section2>

      <Section2>
        <ContentText>
          <Fade bottom>
            <UnderH1>Letní zábava v srdci Krkonoš</UnderH1>
            <StyledParagraph>
              Pod penzionem se rozprostírá rozlehlý park, kde na vás čeká široká
              nabídka aktivit. Dětské hřiště, bohatě vybavené, je rájem pro děti
              všech věkových kategorií, které se zde mohou bezstarostně vyřádit.
            </StyledParagraph>
            <StyledParagraph>
              Kousek od hřiště naleznete také koupaliště, které je v letních
              měsících dokonalým útočištěm pro osvěžení. Čistá voda, příjemné
              prostředí a dostatek místa pro relaxaci z něj činí ideální místo pro
              odpočinek i zábavu. Zde můžete strávit klidné odpoledne s knihou v
              ruce, nebo se ponořit do osvěžující vody.
            </StyledParagraph>
          </Fade>
        </ContentText>
        <ContentPic>
          <Fade right>
            <StyledImage src={Park} alt="Park" />
          </Fade>
        </ContentPic>
      </Section2>

      <Section2>
        <ContentPic>
          <Fade left>
            <StyledImage src={Krajina} alt="Krkonoše v létě" />
          </Fade>
        </ContentPic>
        <ContentText>
          <Fade bottom>
            <UnderH1>Léto v Krkonoších</UnderH1>
            <StyledParagraph>
              Léto v Krkonoších přináší nejen zelené louky a modré nebe, ale i
              nesčetné příležitosti pro milovníky přírody a aktivního odpočinku.
              Penzion Breuer je vaším bránou do světa horských výletů,
              cyklistických tras a nezapomenutelných rodinných dobrodružství.
              Objevujte skryté kouzlo Krkonoš nebo Jizerských hor, bujných lesů a
              krystalicky čistých horských potoků.
            </StyledParagraph>
            <StyledParagraph>
              V blízkém okolí penzionu na vás čekají historické památky, lokální
              kulturní akce a tradiční krkonošská gastronomie. Ať už se vydáte na
              pěší vandr nebo si užíváte klidných chvil v parku pod penzionem,
              léto v Krkonoších je plné malebných výhledů, přátelské atmosféry a
              nezapomenutelných zážitků.
            </StyledParagraph>
          </Fade>

        </ContentText>
      </Section2>

      <Footer />
    </Page>
  );
}

const VideoWrapper = styled.div`
  position: relative;
  height: 95vh; // This sets the height of the video area
  overflow: hidden;
  width: 100%; // Ensure it takes the full width

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%); // Center the video
    object-fit: cover; // Ensure it covers the whole area without stretching
  }
`;


const Space = styled.div`
  margin-bottom: 95vh;

  @media (max-width: 550px) {
    margin-bottom: 110vh;
  }
`;

export const ParallaxContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
`;

const ContactBar = styled.div`
  height: 5vh;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  font-size: 20px;
  background-color: #1b1b1f;

  @media (max-width: 768px) {
    flex-direction: row;
    width: auto;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    height: auto;
    justify-content: center;
    margin: 0 auto;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 550px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: auto;
    width: 100%;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    height: auto;
  }
`;
const HighText = styled.p`
  font-family: "Titillium Web", sans-serif;
  margin-left: 15px;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  margin: 0 20px;
  color: #d2bd92;
  transition: ease-in-out 0.3s;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: #8d774c;
  }

  @media (max-width: 550px) {
    flex-direction: row;
    height: auto;
    justify-content: center;
    margin: 0 auto;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Page = styled.div`
  text-align: center;
`;


export const Section = styled.div`
  margin: 0 auto;
  padding: 50px 20px;
  max-width: 700px;

  @media (max-width: 1024px) {
    max-width: 600px;
  }

  @media (max-width: 768px) {
    max-width: 500px;
    padding: 30px 15px;
  }
  @media (max-width: 470px) {
    width: 100%;
    padding: 0px 20px;
    margin: 0px;
  }
`;

export const Section2 = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;

  @media (max-width: 1024px) {
    max-width: 600px;
    flex-direction: column; // Stack the children vertically
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    max-width: 500px;
    flex-direction: column;
  }

  @media (max-width: 470px) {
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
`;

const ContentPic = styled.div`
  width: 50%;
  padding: 20px;
  order: 0; // Default order

  @media (max-width: 1024px) {
    width: 100%;
    padding: 10px;
    order: 1; // Image comes after text on smaller screens
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
  @media (max-width: 470px) {
    width: 100%;
    padding: 0px;
    margin: 20px 0px;
  }
`;

const ContentText = styled.div`
  width: 50%;
  padding: 140px;
  order: 0; // Default order

  @media (max-width: 1440px) {
    padding: 40px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 10px;
    order: 0; // Text comes before image on smaller screens
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
    margin-top: 15px;
  }

  @media (max-width: 470px) {
    width: 100%;
    padding: 0px 20px;
    margin: 45px 0 0 0;
  }
`;


const StyledImage = styled.img`
  max-width: 100%;
  max-height: 700px;
  border-radius: 0px;
  background-size: contain;

  @media (max-width: 1440px) {
    height: 400px;
  }

  @media (max-width: 1024px) {
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    max-width: 440px;
  }

  @media (max-width: 470px) {
    width: 100%;
    padding: 0px;
    height: 100%;
    margin: 0px;
  }
`;

// export const Overlay = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   background-color: rgba(0, 0, 0, 0.48);
//   opacity: 1;
//   z-index: 1;
// `;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.69);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const OverlayTitle = styled.p`
  font-family: "Titillium Web", sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #ffffff;
  font-weight: bolder;
  text-shadow: 0px 0px 20px black;
  font-size: 4rem;
  animation: ${fadeIn} 2s ease-in-out;
  z-index: 9999;

  @media (max-width: 1024px) {
    font-size: 40px;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const StyledH1Main = styled.p`
  font-size: 65px;
  font-weight: 500;
  margin: 0;
  color: #383556;
  text-align: center;

  @media (max-width: 470px) {
    font-size: 40px;
  }
`;

export const UnderH1 = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 22px;
  margin: 30px;
  font-weight: 700;
  color: #383556;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  text-align: center;
`;

export const StyledParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;

  @media (max-width: 1440px) {
    font-size: 16px;
  }
  @media (max-width: 470px) {
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
`;

export default Home;
