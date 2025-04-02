import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <ContentCard>
        <Title>About Varnixz</Title>
        <TeamSection>
          <TeamTitle>Our Team</TeamTitle>
          <TeamMembers>
            <TeamMember>Karan Khanka</TeamMember>
            <Dot>•</Dot>
            <TeamMember>Shubham Bhatt</TeamMember>
            <Dot>•</Dot>
            <TeamMember>Mayank Rauthan</TeamMember>
          </TeamMembers>
        </TeamSection>
        
        <TextSection>
          <Paragraph>
            Welcome to Varnixz! We're a passionate team of three friends—Karan Khanka, Shubham Bhatt, and Mayank Rauthan—all driven by a common goal: to revolutionize the way content is created and experienced. As students and entrepreneurs, we understand the value of time and creativity, and that's exactly why we created Varnixz.
          </Paragraph>

          <Paragraph>
            Our latest innovation is a cutting-edge platform that allows you to turn simple text prompts into dynamic, engaging videos complete with voiceovers. Whether you're looking to create professional videos, educational content, or just fun animations, our website takes the guesswork out of video creation and brings your ideas to life in minutes.
          </Paragraph>

          <Paragraph>
            At Varnixz, we believe in simplifying content creation while enhancing the quality of the output. With our user-friendly platform, anyone—regardless of their technical background—can create high-quality videos effortlessly.
          </Paragraph>

          <Paragraph>
            Our mission is to empower creators, educators, and businesses to unlock their full potential by providing a seamless video creation experience. So, whether you're a student, a professional, or someone with a great idea, we're here to help you express it visually.
          </Paragraph>

          <Tagline>
            Join us at Varnixz, where your ideas meet innovation!
          </Tagline>
        </TextSection>
      </ContentCard>
    </Container>
  );
};


const Container = styled.div`
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
  padding: 80px 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const ContentCard = styled.div`
  background: #111111;
  border-radius: 20px;
  padding: 40px;
  max-width: 800px;
  box-shadow: 0 4px 20px rgba(68, 97, 242, 0.1);

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 16px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  margin-bottom: 40px;
  background: linear-gradient(to right, #4461F2, #A3B1FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const TeamSection = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const TeamTitle = styled.h2`
  font-size: 24px;
  color: #4461F2;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

const TeamMembers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const TeamMember = styled.span`
  color: #A3B1FF;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Dot = styled.span`
  color: #4461F2;
  margin: 0 8px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 24px;
  line-height: 1.8;
  font-size: 16px;
  color: #E0E6FF;
  
  &:last-child {
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 16px;
    line-height: 1.6;
    
    &:last-child {
      margin-bottom: 24px;
    }
  }
`;

const Tagline = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #4461F2;
  margin-top: 32px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 24px;
  }
`;

const TextSection = styled.div`
  color: #E0E6FF;
`;

export default About;