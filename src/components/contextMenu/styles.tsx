import styled from "styled-components";

export const Wrapper = styled.div<{ isopen: boolean }>`
  position: absolute;
  top: 70px;
  background-color: #52536f;
  width: 200px;
  border-radius: 2px;
  max-height: ${(props) => (props.isopen ? "500px" : "0px")};
  transition: all 200ms ease-in-out;
  overflow: hidden;
`;
export const Option = styled.div`
  padding: 5px 0px;
  padding: 10px;
  display: flex;
  gap: 5px;
  align-items: center;
  &:hover {
    background-color: #484969;
    cursor: pointer;
  }
`;
