import { Container, Grid, FlexContainer, ResponsiveText, ResponsiveButton, ResponsiveImage } from '../styles/Responsive';

const YourComponent = () => {
  return (
    <Container>
      <Grid cols={3} gap="24px">
        {/* Your grid items */}
      </Grid>

      <FlexContainer mobileDir="column">
        <ResponsiveText size="18px" tabletSize="16px" mobileSize="14px">
          Your text content
        </ResponsiveText>
        <ResponsiveButton>
          Click Me
        </ResponsiveButton>
      </FlexContainer>

      <ResponsiveImage src="/path-to-image.jpg" maxWidth="600px" tabletMaxWidth="400px" mobileMaxWidth="300px" />
    </Container>
  );
};