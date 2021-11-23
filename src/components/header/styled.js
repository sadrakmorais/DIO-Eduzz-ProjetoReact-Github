import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  background: linear-gradient(to right, #4b134f, #c94b4b);
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);

  border-radius: 15px;
  input {
    border: 2px solid transparent;
    padding: 5px;
    width: 100%;
    height: 44px;
    outline: none;
    color: #fff;
    font-family: "Montserrat", sans-serif;

    &::placeholder {
      color: #ccc;
      font-family: "Montserrat", sans-serif;
    }
  }
  button {
    background: transparent;
    padding: 10px 15px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    transition: 0.2s ease all;
    &:hover {
      border-radius: 15px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;
