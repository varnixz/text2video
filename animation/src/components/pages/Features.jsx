import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Powerful AI Video Features</HeroTitle>
          <HeroSubtitle>Create stunning videos with our cutting-edge AI technology</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <FeatureGrid>
        <FeatureCard
          as={motion.div}
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FeatureIcon>🎨</FeatureIcon>
          <FeatureContent>
            <FeatureTitle>AI-Powered Generation</FeatureTitle>
            <FeatureDescription>
              Transform text into professional videos using advanced AI algorithms
            </FeatureDescription>
          </FeatureContent>
          <FeatureImage src="/path-to-your-image1.jpg" alt="AI Generation" />
        </FeatureCard>

        <FeatureCard
          as={motion.div}
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FeatureIcon>✨</FeatureIcon>
          <FeatureContent>
            <FeatureTitle>Custom Templates</FeatureTitle>
            <FeatureDescription>
              Choose from hundreds of professionally designed templates
            </FeatureDescription>
          </FeatureContent>
          <FeatureImage src="/path-to-your-image2.jpg" alt="Templates" />
        </FeatureCard>

        <FeatureCard
          as={motion.div}
          whileHover={{ y: -10 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FeatureIcon>🎬</FeatureIcon>
          <FeatureContent>
            <FeatureTitle>Smart Editing</FeatureTitle>
            <FeatureDescription>
              Edit videos with AI-assisted tools and effects
            </FeatureDescription>
          </FeatureContent>
          <FeatureImage src="/path-to-your-image3.jpg" alt="Smart Editing" />
        </FeatureCard>
      </FeatureGrid>

      <ShowcaseSection>
        <ShowcaseTitle>Advanced Capabilities</ShowcaseTitle>
        <ShowcaseGrid>
          <ShowcaseItem>
            <ShowcaseImage src="/path-to-showcase1.jpg" alt="4K Quality" />
            <ShowcaseContent>
              <ShowcaseItemTitle>4K Quality</ShowcaseItemTitle>
              <ShowcaseDescription>
                Generate ultra-high definition videos with crystal clear quality
              </ShowcaseDescription>
            </ShowcaseContent>
          </ShowcaseItem>
          <ShowcaseItem>
            <ShowcaseImage src="/path-to-showcase2.jpg" alt="Style Transfer" />
            <ShowcaseContent>
              <ShowcaseItemTitle>Style Transfer</ShowcaseItemTitle>
              <ShowcaseDescription>
                Apply artistic styles to your videos with one click
              </ShowcaseDescription>
            </ShowcaseContent>
          </ShowcaseItem>
        </ShowcaseGrid>
      </ShowcaseSection>

      <StatsSection>
        <StatCard>
          <StatNumber>1M+</StatNumber>
          <StatLabel>Videos Generated</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>50K+</StatNumber>
          <StatLabel>Active Users</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>100+</StatNumber>
          <StatLabel>AI Models</StatLabel>
        </StatCard>
      </StatsSection>

      <CTASection>
        <CTATitle>Ready to create amazing videos?</CTATitle>
        <CTAButton as={Link} to="/">Get Started Now</CTAButton>
      </CTASection>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
`;

const HeroSection = styled.div`
  height: 400px;
  background: linear-gradient(45deg, #000000, #1a1a1a);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;

  @media (max-width: 768px) {
    height: 300px;
    padding: 0 16px;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #4461F2, #A3B1FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;


const HeroSubtitle = styled.p`
  font-size: 20px;
  color: #a0a0a0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FeatureGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    padding: 40px 16px;
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureCard = styled.div`
  background: #111111;
  border-radius: 15px;
  padding: 30px;
  position: relative;
  overflow: hidden;
`;

const FeatureIcon = styled.div`
  font-size: 32px;
  margin-bottom: 20px;
`;

const FeatureContent = styled.div`
  position: relative;
  z-index: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  color: #4461F2;
  margin-bottom: 15px;
`;

const FeatureDescription = styled.p`
  color: #a0a0a0;
  line-height: 1.6;
`;

const FeatureImage = styled.img`
  position: absolute;
  right: -20px;
  bottom: -20px;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
  opacity: 0.3;
  transition: opacity 0.3s ease;

  ${FeatureCard}:hover & {
    opacity: 0.6;
  }
`;

const ShowcaseSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
`;

const ShowcaseTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #ffffff;
`;

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ShowcaseItem = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  height: 300px;
`;

const ShowcaseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ShowcaseContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
`;

const ShowcaseItemTitle = styled.h3`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const ShowcaseDescription = styled.p`
  color: #a0a0a0;
`;

const StatsSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 40px 16px;
    gap: 20px;
  }
`;

const StatCard = styled.div`
  background: #111111;
  border-radius: 15px;
  padding: 30px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const StatNumber = styled.div`
  font-size: 36px;
  color: #4461F2;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
const StatLabel = styled.div`
  color: #a0a0a0;
`;

const CTASection = styled.div`
  text-align: center;
  padding: 80px 24px;
  background: linear-gradient(45deg, #111111, #1a1a1a);

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const CTATitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const CTAButton = styled(Link)`
  background: #4461F2;
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background 0.3s ease;

  &:hover {
    background: #3451E2;
  }

  @media (max-width: 768px) {
    padding: 12px 30px;
    font-size: 16px;
  }
`;

export default Features;