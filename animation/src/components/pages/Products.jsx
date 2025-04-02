import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Products = () => {
  return (
    <Container>
      <Title>Our Products</Title>
      <CardGrid>
        <ProductCard>
          <CardContent>
            <h2>Features</h2>
            <p>Explore our powerful AI video generation tools</p>
            <StyledLink to="/features">Learn More →</StyledLink>
          </CardContent>
        </ProductCard>

        <ProductCard>
          <CardContent>
            <h2>Pricing</h2>
            <p>Find the perfect plan for your needs</p>
            <StyledLink to="/pricing">View Plans →</StyledLink>
          </CardContent>
        </ProductCard>

        <ProductCard>
          <CardContent>
            <h2>Updates</h2>
            <p>Stay current with our latest improvements</p>
            <StyledLink to="/updates">See What's New →</StyledLink>
          </CardContent>
        </ProductCard>
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

const ProductCard = styled.div`
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

export default Products;