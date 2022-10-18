import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: -25px;

  @media screen and (max-width: 1015px) {
    flex-direction: column;
    align-items: center;
  }
`
