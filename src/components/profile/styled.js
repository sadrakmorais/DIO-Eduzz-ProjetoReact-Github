import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 15px;
  background: #c94b4b; /* fallback for old browsers */
  background: linear-gradient(to right, #4b134f, #c94b4b);
  padding: 30px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;
  color: #fff;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div + div {
    margin: 8px;
  }
  div {
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-family: "Poppins", sans-serif;
  h3 {
    margin-right: 8px;
    font-weight: bold;
  }
  a {
    font-size: 18px;
    color: #fff;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
  border: 3px solid #fff;
`;
