import styled from 'styled-components'

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;

  @media screen and (max-width: 1015px) {
    width: 370px;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 10px 0;
`
