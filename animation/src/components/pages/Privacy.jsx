import React from 'react';
import styled from 'styled-components';

const Privacy = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Content>
        <Section>
          <h2>Data Collection</h2>
          <p>Information about how we collect and use data</p>
        </Section>
        <Section>
          <h2>Your Rights</h2>
          <p>Understanding your privacy rights and choices</p>
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
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 24px;
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
  
  h2 {
    color: #4461F2;
    margin-bottom: 16px;
    font-size: 24px;
  }
  
  p {
    color: #a0a0a0;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    margin-bottom: 32px;
    
    h2 {
      font-size: 20px;
      margin-bottom: 12px;
    }
    
    p {
      font-size: 14px;
      line-height: 1.5;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 24px;
    
    h2 {
      font-size: 18px;
    }
  }
`;

export default Privacy;