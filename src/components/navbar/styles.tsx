import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  background-color: #404156;
  width: 100%;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  h2 {
    color: white;
  }
`;
