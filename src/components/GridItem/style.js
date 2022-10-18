import styled from 'styled-components'

export const ContainerItem = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 25px;

  @media screen and (max-width: 1015px) {
    width: 98%;
  }

  table {
    width: 100%;

    th {
      width: 30%;
      border-bottom: 2px solid #747c86;
    }

    td {
      padding-top: 14px;
      text-align: center;
      word-break: break-all;
    }
    .column-trash {
      width: 10%;
    }
  }
`
