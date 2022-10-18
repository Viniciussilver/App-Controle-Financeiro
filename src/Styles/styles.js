import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

`

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #f2f2f2;
`

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 30px;
  margin: 0 auto;

  @media screen and (max-width: 1015px) {
    width: 100%;
  }
`
