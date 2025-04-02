import React from 'react';
import styled from 'styled-components';

const Security = () => {
  return (
    <Container>
      <Title>Security</Title>
      <Content>
        <SecurityCard>
          <CardIcon>🔒</CardIcon>
          <CardTitle>Data Protection</CardTitle>
          <CardText>Your data is encrypted and securely stored...</CardText>
        </SecurityCard>
        <SecurityCard>
          <CardIcon>🛡️</CardIcon>
          <CardTitle>Privacy Measures</CardTitle>
          <CardText>We implement industry-standard security protocols...</CardText>
        </SecurityCard>
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
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 5px;
  }
`;

const SecurityCard = styled.div`
  background: #111111;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    padding: 30px;
    border-radius: 10px;
    
    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 480px) {
    padding: 24px;
  }
`;

const CardIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 16px;
  }
`;

const CardTitle = styled.h2`
  color: #4461F2;
  font-size: 24px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const CardText = styled.p`
  color: #a0a0a0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export default Security;