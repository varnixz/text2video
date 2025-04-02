import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Breakpoints */
  :root {
    --mobile: 480px;
    --tablet: 768px;
    --laptop: 1024px;
    --desktop: 1200px;
  }

  /* Base styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #000000;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }

  /* Media Queries */
  /* Mobile */
  @media (max-width: 480px) {
    html {
      font-size: 14px;
    }

    .container {
      padding: 0 16px;
    }

    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 24px;
    }
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    html {
      font-size: 15px;
    }

    .container {
      padding: 0 24px;
    }

    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 28px;
    }
  }

  /* Laptop */
  @media (min-width: 769px) and (max-width: 1024px) {
    html {
      font-size: 16px;
    }

    .container {
      padding: 0 32px;
    }
  }
`;

export default GlobalStyles;