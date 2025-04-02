import styled from 'styled-components';

// Responsive Container
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

// Responsive Grid
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 3}, 1fr);
  gap: ${props => props.gap || '24px'};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

// Responsive Flex Container
export const FlexContainer = styled.div`
  display: flex;
  gap: ${props => props.gap || '24px'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'space-between'};

  @media (max-width: 768px) {
    flex-direction: ${props => props.mobileDir || 'column'};
    gap: 16px;
  }
`;

// Responsive Text
export const ResponsiveText = styled.p`
  font-size: ${props => props.size || '16px'};
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: ${props => props.tabletSize || '14px'};
  }

  @media (max-width: 480px) {
    font-size: ${props => props.mobileSize || '12px'};
  }
`;

// Responsive Button
export const ResponsiveButton = styled.button`
  padding: 16px 32px;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 12px;
  }
`;

// Responsive Image
export const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  max-width: ${props => props.maxWidth || '100%'};

  @media (max-width: 768px) {
    max-width: ${props => props.tabletMaxWidth || props.maxWidth || '100%'};
  }

  @media (max-width: 480px) {
    max-width: ${props => props.mobileMaxWidth || props.tabletMaxWidth || props.maxWidth || '100%'};
  }
`;