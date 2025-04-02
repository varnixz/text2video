import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Legal = () => {
  return (
    <Container>
      <Title>Legal Information</Title>
      <CardGrid>
        <LegalCard>
          <CardContent>
            <h2>Privacy Policy</h2>
            <p>Our commitment to protecting your privacy</p>
            <StyledLink to="/privacy">Read Policy →</StyledLink>
          </CardContent>
        </LegalCard>

        <LegalCard>
          <CardContent>
            <h2>Terms of Service</h2>
            <p>Understanding our terms and conditions</p>
            <StyledLink to="/terms">View Terms →</StyledLink>
          </CardContent>
        </LegalCard>

        <LegalCard>
          <CardContent>
            <h2>Security</h2>
            <p>How we keep your data safe</p>
            <StyledLink to="/security">Learn More →</StyledLink>
          </CardContent>
        </LegalCard>
      </CardGrid>
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
  background: linear-gradient(to right, #4461F2, #A3B1FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 32px;
  }
`;

const CardGrid = styled.div`
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

const LegalCard = styled.div`
  background: #111111;
  border-radius: 15px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const CardContent = styled.div`
  padding: 30px;
  
  h2 {
    color: #4461F2;
    margin-bottom: 15px;
    font-size: 24px;
  }
  
  p {
    color: #a0a0a0;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 20px;
    
    h2 {
      font-size: 20px;
      margin-bottom: 12px;
    }
    
    p {
      font-size: 14px;
      margin-bottom: 16px;
      line-height: 1.5;
    }
  }

  @media (max-width: 480px) {
    padding: 16px;
    
    h2 {
      font-size: 18px;
    }
  }
`;

const StyledLink = styled(Link)`
  color: #4461F2;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export default Legal;