import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #52536f;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border-radius: 2px;
  width: 100%;
  margin: 0px 20px;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: #acb2c4;
  font-size: 1.2rem;
  width: 100%;

  &::placeholder {
    color: #6d6f80;
  }
`;
