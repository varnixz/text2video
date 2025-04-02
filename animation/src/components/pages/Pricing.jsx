import React from 'react';
import styled from 'styled-components';

const Pricing = () => {
  return (
    <Container>
      <Title>Pricing Plans</Title>
      <PricingGrid>
        <PriceCard>
          <CardHeader>Basic</CardHeader>
          <Price>$19<span>/month</span></Price>
          <Features>
            <Feature>10 AI video generations</Feature>
            <Feature>720p quality</Feature>
            <Feature>Basic templates</Feature>
          </Features>
          <Button>Get Started</Button>
        </PriceCard>

        <PriceCard featured>
          <CardHeader>Pro</CardHeader>
          <Price>$49<span>/month</span></Price>
          <Features>
            <Feature>50 AI video generations</Feature>
            <Feature>1080p quality</Feature>
            <Feature>Premium templates</Feature>
          </Features>
          <Button>Get Started</Button>
        </PriceCard>

        <PriceCard>
          <CardHeader>Enterprise</CardHeader>
          <Price>$99<span>/month</span></Price>
          <Features>
            <Feature>Unlimited generations</Feature>
            <Feature>4K quality</Feature>
            <Feature>Custom templates</Feature>
          </Features>
          <Button>Contact Sales</Button>
        </PriceCard>
      </PricingGrid>
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

const PricingGrid = styled.div`
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

const PriceCard = styled.div`
  background: ${props => props.featured ? '#1a1a1a' : '#111111'};
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  transition: transform 0.3s ease;
  border: ${props => props.featured ? '2px solid #4461F2' : 'none'};
  
  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    padding: 30px;
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 480px) {
    padding: 24px;
  }
`;

const CardHeader = styled.h2`
  color: #4461F2;
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const Price = styled.div`
  font-size: 48px;
  color: #ffffff;
  margin-bottom: 30px;
  
  span {
    font-size: 20px;
    color: #a0a0a0;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 24px;
    
    span {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const Feature = styled.li`
  color: #a0a0a0;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 8px 0;
  }
`;

const Button = styled.button`
  background: #4461F2;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: #3451E2;
  }

  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 14px;
  }
`;
export default Pricing;