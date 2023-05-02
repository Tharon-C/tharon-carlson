import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { color } from 'styled-system'
import Header from '../components/Header'
import theme from '../theme'

const GlobalStyle = createGlobalStyle`
  body {
    * {
      box-sizing: border-box;
    }
    margin: 0;
    line-height: 1;
    img {
      width: 100%;
    }
    h1, h2, h3, h4, h5, h6, h7, h8, p {
      font-size: 1em;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }
    a {
      text-decoration: none;
      display: inline-block;
    }
  }
  body, button, input, textarea {
    font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  }
  .Content {
    line-height: 1.7;
    p {
      font-size: 18px;
      margin-bottom: 32px;
      max-width: 600px;
    }
    h1 {
      font-size: 32px;
      margin-bottom: 24px;
    }

    h2 {
      font-size: 24px;
      margin-bottom: 24px;
    }

    h3 {
      font-size: 18px;
      margin-bottom: 24px;
    }
  }
`
const Wrapper = styled.div`
  min-height: 100vh;
  ${color}
`;



const TemplateWrapper = ({ children, isLanding }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper bg={isLanding && 'sky.day'}>
        <GlobalStyle/>
        <Header isLanding={isLanding}/>
        <div>{children}</div>
      </Wrapper>
    </ThemeProvider>
  )
}

export default TemplateWrapper
