import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-around;
  background: #4b134f;
  border-radius: 15px;
  padding: 20px;
  color: #fff;
  font-size: 1.1em;
  width: 350px;

  a + a {
    padding: 5px;
    border: 2px solid #fff;
    border-radius: 15px;
  }
`;
