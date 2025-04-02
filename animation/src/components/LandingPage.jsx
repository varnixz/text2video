import React, { useRef, useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const faqRef = useRef(null);

  const handleFaqClick = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setExpandedFaq(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <>
      <Navbar>
        <NavContainer>
          <Logo>Varnixz</Logo>
          <NavLinks>
            <NavLink as={Link} to="/features">Features</NavLink>
            <NavLink as={Link} to="/pricing">Pricing</NavLink>
            <NavButton onClick={scrollToFaq}>FAQ</NavButton>
            <LoginButton>Login</LoginButton>
          </NavLinks>
        </NavContainer>
      </Navbar>

      <PageWrapper>
        <Container>
          <MainSection>
            <Title>
              Generate AI Videos with<br />
              just text
            </Title>
            <Subtitle>AI makes it happen</Subtitle>
            <GenerateButton as={Link} to="/workspace">
              Generate a video
            </GenerateButton>
          </MainSection>
         
          
          
          <VideoSection>
            <VideoCardWrapper>
              <CardTitle>AI video generator</CardTitle>
              <StyledSlider {...carouselSettings}>
                <SlideItem>
                  <SlideContent>
                    <img src= "https://cdn.pixabay.com/photo/2022/04/25/06/22/feather-7155179_1280.jpg" alt="AI Video 1" />
                    <SlideOverlay>
                      <SlideText>Creative AI Videos</SlideText>
                    </SlideOverlay>
                  </SlideContent>
                </SlideItem>
                <SlideItem>
                  <SlideContent>
                    <img src="https://cdn.pixabay.com/photo/2023/04/15/21/58/ai-generated-7928669_1280.jpg" alt="AI Video 2" />
                    <SlideOverlay>
                      <SlideText>Professional Results</SlideText>
                    </SlideOverlay>
                  </SlideContent>
                </SlideItem>
                <SlideItem>
                  <SlideContent>
                    <img src="https://cdn.pixabay.com/photo/2023/04/23/13/20/ai-generated-7945684_1280.jpg" alt="AI Video 3" />
                    <SlideOverlay>
                      <SlideText>Quick Generation</SlideText>
                    </SlideOverlay>
                  </SlideContent>
                </SlideItem>
                <SlideItem>
                  <SlideContent>
                    <img src="https://cdn.pixabay.com/photo/2024/05/06/21/40/ai-generated-8744445_1280.jpg" alt="AI Video 4" />
                    <SlideOverlay>
                      <SlideText>Custom Styles</SlideText>
                    </SlideOverlay>
                  </SlideContent>
                </SlideItem>
              </StyledSlider>
            </VideoCardWrapper>
          </VideoSection>

          <FeaturesGrid>
            <FeatureCard>
              <FeatureImage src="https://cdn.pixabay.com/photo/2012/07/06/20/25/ston-51667_1280.jpg" alt="AI Features" />
              <FeatureText>Perfect for every need</FeatureText>
            </FeatureCard>
            <FeatureCard>
              <FeatureImage src="https://cdn.pixabay.com/photo/2015/11/07/21/36/drip-1032748_1280.jpg"  alt="Creative AI" />
              <FeatureText>AI-powered creativity</FeatureText>
            </FeatureCard>
            <FeatureCard>
              <FeatureImage src="https://cdn.pixabay.com/photo/2022/05/13/20/52/water-drop-7194543_1280.jpg" alt="Video Generation" />
              <FeatureText>Generate stunning videos</FeatureText>
            </FeatureCard>
          </FeaturesGrid>

          <CreativitySection>
            <SectionTitle>Unleash Your Creativity with</SectionTitle>
            <SectionSubtitle>AI video generator</SectionSubtitle>
          </CreativitySection>

          <FeaturesShowcase>
            <ShowcaseTitle>Features</ShowcaseTitle>
            <ShowcaseSubtitle>AI video generator</ShowcaseSubtitle>
            <ShowcaseGrid>
              <ShowcaseCard>
                <ShowcaseImage src="https://cdn.pixabay.com/photo/2024/06/10/00/00/ai-generated-8819596_1280.jpg" alt="Feature 1" />
              </ShowcaseCard>
              <ShowcaseCard>
                <ShowcaseImage src="https://cdn.pixabay.com/photo/2023/04/16/19/06/dog-7930973_1280.jpg" alt="Feature 2" />
              </ShowcaseCard>
            </ShowcaseGrid>
          </FeaturesShowcase>

          <PricingSection>
            <PricingTitle>The right plans</PricingTitle>
            <PricingSubtitle>for the right price</PricingSubtitle>
          </PricingSection>

          <FAQSection ref={faqRef}>
            <FAQTitle>Want to know more?</FAQTitle>
            <FAQList>
            <FAQItem onClick={() => handleFaqClick(0)} expanded={expandedFaq === 0}>
            <FAQQuestion>
            How many credits do every video costs exactly?
            <FAQIcon>{expandedFaq === 0 ? '−' : '+'}</FAQIcon>
            </FAQQuestion>
        <FAQAnswer visible={expandedFaq === 0}>
          Video credits vary based on length and quality. Standard videos cost 2 credits, while premium quality videos use 4 credits per generation.
        </FAQAnswer>
      </FAQItem>

      <FAQItem onClick={() => handleFaqClick(1)} expanded={expandedFaq === 1}>
        <FAQQuestion>
          What happens if I run out of credits?
          <FAQIcon>{expandedFaq === 1 ? '−' : '+'}</FAQIcon>
        </FAQQuestion>
        <FAQAnswer visible={expandedFaq === 1}>
          You can purchase additional credits or upgrade your plan at any time. We also offer a grace period for ongoing projects.
        </FAQAnswer>
      </FAQItem>

      <FAQItem onClick={() => handleFaqClick(2)} expanded={expandedFaq === 2}>
        <FAQQuestion>
          What kind of videos can you generate with invideo?
          <FAQIcon>{expandedFaq === 2 ? '−' : '+'}</FAQIcon>
        </FAQQuestion>
        <FAQAnswer visible={expandedFaq === 2}>
          InVideo AI can generate various types of videos including explainers, promotional content, social media shorts, and educational materials.
        </FAQAnswer>
      </FAQItem>
    </FAQList>
  </FAQSection>
        </Container>
      </PageWrapper>

      <Footer>
        <FooterContainer>
          <FooterGrid>
            <FooterColumn>
              <FooterLogo>Varnixz</FooterLogo>
              <FooterText>Create amazing videos with AI technology</FooterText>
            </FooterColumn>
            
            <FooterColumn>
              <FooterTitle>Product</FooterTitle>
              <FooterLink as={Link} to="/products">Products</FooterLink>
              <FooterLink as={Link} to="/features">Features</FooterLink>
              <FooterLink as={Link} to="/pricing">Pricing</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Company</FooterTitle>
              <FooterLink as={Link} to="/company">Company</FooterLink>
              <FooterLink as={Link} to="/about">About</FooterLink>
              <FooterLink as={Link} to="/blog">Blog</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Legal</FooterTitle>
              <FooterLink as={Link} to="/legal">Legal</FooterLink>
              <FooterLink as={Link} to="/privacy">Privacy</FooterLink>
              <FooterLink as={Link} to="/terms">Terms</FooterLink>
            </FooterColumn>
          </FooterGrid>
          
          <FooterBottom>
            <Copyright>© 2025 Varnixz. All rights reserved.</Copyright>
            <SocialLinks>
              <SocialLink href="#">Twitter</SocialLink>
              <SocialLink href="#">LinkedIn</SocialLink>
              <SocialLink href="#">Instagram</SocialLink>
            </SocialLinks>
          </FooterBottom>
        </FooterContainer>
      </Footer>
    </>
  );
};

const Navbar = styled.nav`
  background: #000000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid #222;

  @media (max-width: 768px) {
    padding: 0.5rem 16px;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #4461F2;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    display: none; // Hide on mobile, you might want to add a hamburger menu
  }
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: #4461F2;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  
  &:hover {
    color: #4461F2;
  }
`;

const LoginButton = styled.button`
  background: #4461F2;
  color: white;
  padding: 8px 24px;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #3451E2;
  }
`;

const PageWrapper = styled.div`
  background: #000000;
  min-height: 100vh;
  width: 100%;
  padding-top: 80px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const MainSection = styled.div`
  text-align: center;
  padding: 80px 0;

   @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: #a0a0a0;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const GenerateButton = styled(Link)`
  background: #4461F2;
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background: #3451E2;

  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

const VideoSection = styled.div`
  margin: 60px 0;
`;

const VideoCardWrapper = styled.div`
  background: #111111;
  border-radius: 12px;
  padding: 24px;
  margin: 0 auto;
  max-width: 1000px;

   @media (max-width: 768px) {
    padding: 16px;
    margin: 0 16px;
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 30px;
  font-size: 24px;
  color: #ffffff;
  text-align: center;
`;

const StyledSlider = styled(Slider)`
  margin: 0 -50px;
  padding: 20px 0;

  .slick-slide {
    transform: scale(0.8);
    transition: transform 0.3s ease;
    opacity: 0.5;
  }

  .slick-center {
    transform: scale(1);
    opacity: 1;
  }

  .slick-dots {
    bottom: -40px;
    
    li button:before {
      color: #ffffff;
    }
    
    li.slick-active button:before {
      color: #4461F2;
    }
  }

  .slick-prev, .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;
    
    &:before {
      color: #4461F2;
      font-size: 40px;
    }
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }

  @media (max-width: 768px) {
    margin: 0 -16px;

    .slick-prev {
      left: 0;
    }

    .slick-next {
      right: 0;
    }

    .slick-prev, .slick-next {
      width: 30px;
      height: 30px;
      
      &:before {
        font-size: 30px;
      }
    }
  }
`;

const SlideItem = styled.div`
  padding: 0 15px;
`;

const SlideContent = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
  }
`;

const SlideOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${SlideContent}:hover & {
    transform: translateY(0);
  }
`;

const SlideText = styled.h4`
  color: white;
  margin: 0;
  font-size: 18px;
  text-align: center;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 60px 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const FeatureCard = styled.div`
  text-align: center;
  background: #111111;
  border-radius: 12px;
  padding: 24px;
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const FeatureText = styled.p`
  font-size: 18px;
  color: #ffffff;
`;

const CreativitySection = styled.div`
  text-align: center;
  margin: 80px 0;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SectionSubtitle = styled.h3`
  font-size: 24px;
  color: #4461F2;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const FeaturesShowcase = styled.div`
  margin: 80px 0;
`;

const ShowcaseTitle = styled.h2`
  font-size: 36px;
  color: #ffffff;
  text-align: center;
`;

const ShowcaseSubtitle = styled.h3`
  font-size: 24px;
  color: #4461F2;
  text-align: center;
  margin-bottom: 40px;
`;

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

   @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const ShowcaseCard = styled.div`
  background: #111111;
  border-radius: 12px;
  overflow: hidden;
`;

const ShowcaseImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const PricingSection = styled.div`
  text-align: center;
  margin: 80px 0;
`;

const PricingTitle = styled.h2`
  font-size: 36px;
  color: #ffffff;
`;

const PricingSubtitle = styled.h3`
  font-size: 24px;
  color: #4461F2;
`;

const FAQSection = styled.div`
  margin: 80px 0;
`;

const FAQTitle = styled.h2`
  font-size: 36px;
  color: #ffffff;
  margin-bottom: 40px;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Footer = styled.footer`
  background: #111111;
  padding: 80px 0 40px;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FooterLogo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #4461F2;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const FooterText = styled.p`
  color: #a0a0a0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FooterTitle = styled.h4`
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid #222;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 24px;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const FAQItem = styled.div`
  padding: 24px;
  background: #111111;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1a1a1a;
  }
  
  ${props => props.expanded && `
    background: #1a1a1a;
  `}

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const FAQQuestion = styled.div`
  font-size: 18px;
  color: #ffffff;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FAQAnswer = styled.div`
  color: #a0a0a0;
  margin-top: ${props => props.visible ? '16px' : '0'};
  height: ${props => props.visible ? 'auto' : '0'};
  overflow: hidden;
  opacity: ${props => props.visible ? '1' : '0'};
  transition: all 0.3s ease;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: ${props => props.visible ? '12px' : '0'};
  }
`;

const FooterLink = styled(Link)`
  color: #a0a0a0;
  text-decoration: none;
  
  &:hover {
    color: #4461F2;
  }
`;

const Copyright = styled.p`
  color: #a0a0a0;
`;

const SocialLink = styled.a`
  color: #a0a0a0;
  text-decoration: none;
  
  &:hover {
    color: #4461F2;
  }
`;

const FAQIcon = styled.span`
  color: #4461F2;
  font-size: 24px;
  font-weight: bold;
`;
export default LandingPage;