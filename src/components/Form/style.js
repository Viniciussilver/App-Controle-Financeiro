import styled from 'styled-components'

export const ContainerForm = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin: 30px auto;
  padding: 20px;

  @media screen and (max-width: 1015px) {
    flex-direction: column;
    gap: 18px;
    align-items: center;
    width: 370px;
  }

  .box-input {
    display: flex;
    flex-direction: column;
    margin-right: 35px;

    input {
      outline: none;
      padding: 4px 10px;
      width: 200px;
      border-radius: 4px;
      border: 1px solid #747c86;
    }
  }

  .input-radio {
    margin-right: 5px;
  }

  .label {
    margin-right: 17px;
  }

  button {
    margin-left: 25px;
    padding: 10px 16px;
    border: none;
    border-radius: 5px;
    background: teal;
    color: #fff;

    @media screen and (max-width: 1015px) {
      position: relative;
      left: 21px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
  .box-input-radio {
    display: flex;
  }
`
