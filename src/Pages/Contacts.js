import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaFacebookSquare } from 'react-icons/fa';
import { CardContainer } from './Accommodation';
import Footer from '../components/Footer';

const Page = styled.div`
  text-align: center;
`;

const Card = styled.div`
  //border: 1px solid #ddd;
  //border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  margin-bottom: 90px;
  width: 800px;
  //box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ContactSection = styled.div`
  display: flex;
  padding: 20px 0px;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MapSection = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 30px;
`;

const ContactHeader = styled.p`
  font-family: "Titillium Web", sans-serif;
  color: #181818;
  font-size: 30px;
  font-weight: bold;
  margin: 0px;
  text-align: center;
`;
const ContactHeader2 = styled.h2`
  color: #555555;
  font-size: 20px;
  font-weight: 400;
  margin: 20px;
`;


const Icon = styled.span`
  margin-right: 10px;
  font-size: 20px;
  display: flex;
`;

const ContactLink = styled.a`
  font-family: "Titillium Web", sans-serif;
  color: #666;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  padding-bottom: 10px;
  text-transform: uppercase;
  justify-content: center;

  &:hover {
    color: #bb820f;
  }
`;
const ContactLinkActive = styled.a`
  font-family: "Titillium Web", sans-serif;
  color: #bb820f;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  padding-bottom: 10px;
  justify-content: center;


  &:hover {
    color: #5a4824;
  }
`;

function Contacts() {
  return (
    <Page>
      <Title>Kontakty</Title>
      <CardContainer>
      <Card>
          <ContactHeader>MÁTE ZÁJEM?</ContactHeader>
          <ContactHeader2>Napište nám nebo zavolejte na telefonní čísla níže nebo navštivte naše stránky Facebook</ContactHeader2>
          <ContactSection>
          <ContactLinkActive href="tel:+420 605 181 004">
            <Icon><FaPhoneAlt /></Icon>
            +420 605 181 004
          </ContactLinkActive>
          <ContactLink href="tel:+420 731 816 901">
            <Icon><FaPhoneAlt /></Icon>
            +420 731 816 901
          </ContactLink>
          <ContactLink href="mailto:martinabre@seznam.cz">
            <Icon><FaEnvelope /></Icon>
           Napište nám
          </ContactLink>
          <ContactLink href="mailto:martinabre@seznam.cz">
            <Icon><FaFacebookSquare /></Icon>
           Facebook
          </ContactLink>
        </ContactSection>
        <MapSection>
          <iframe
            title='Kde nás najdete.'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d631.7044159553773!2d15.427977813422393!3d50.704768090811584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ec6495d5d0f85%3A0x59e2035ca1c67af5!2sPenzion%20Breuer!5e0!3m2!1scs!2scz!4v1699728819714!5m2!1scs!2scz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapSection>
      </Card>
      </CardContainer>


      <Footer/>
    </Page>
  );
}

export default Contacts;
