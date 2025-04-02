import React from 'react';
import styled from 'styled-components';

const Terms = () => {
  return (
    <Container>
      <Title>Terms of Service</Title>
      <Content>
        <Section>
          <SectionTitle>1. Terms of Use</SectionTitle>
          <SectionText>
            By accessing this website, you agree to be bound by these terms of service...
          </SectionText>
        </Section>
        <Section>
          <SectionTitle>2. User Guidelines</SectionTitle>
          <SectionText>
            Users must follow our community guidelines and usage policies...
          </SectionText>
        </Section>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
  padding: 80px 24px;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  margin-bottom: 60px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 32px;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 16px;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;
  background: #111111;
  padding: 30px;
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 24px;
    margin-bottom: 24px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin-bottom: 16px;
  }
`;

const SectionTitle = styled.h2`
  color: #4461F2;
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

const SectionText = styled.p`
  color: #a0a0a0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export default Terms;