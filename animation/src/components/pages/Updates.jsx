import React from 'react';
import styled from 'styled-components';

const Updates = () => {
  return (
    <Container>
      <Title>Latest Updates</Title>
      <UpdatesList>
        <UpdateCard>
          <UpdateDate>March 2024</UpdateDate>
          <UpdateTitle>New AI Engine</UpdateTitle>
          <UpdateDescription>Enhanced video generation capabilities with improved AI models</UpdateDescription>
        </UpdateCard>
        <UpdateCard>
          <UpdateDate>February 2024</UpdateDate>
          <UpdateTitle>4K Support</UpdateTitle>
          <UpdateDescription>Now supporting 4K video generation for premium users</UpdateDescription>
        </UpdateCard>
        <UpdateCard>
          <UpdateDate>January 2024</UpdateDate>
          <UpdateTitle>Template Library</UpdateTitle>
          <UpdateDescription>Added 100+ new professional templates</UpdateDescription>
        </UpdateCard>
      </UpdatesList>
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

const UpdatesList = styled.div`
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 16px;
  }
`;

const UpdateCard = styled.div`
  background: #111111;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 24px;
    margin-bottom: 16px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin-bottom: 12px;
  }
`;

const UpdateDate = styled.div`
  color: #4461F2;
  font-size: 14px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;

const UpdateTitle = styled.h2`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const UpdateDescription = styled.p`
  color: #a0a0a0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export default Updates;