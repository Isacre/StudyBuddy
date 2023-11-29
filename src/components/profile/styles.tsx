import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
export const UserPicture = styled.div<{ size: number }>`
  border-radius: 100px;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  background-color: #6596aa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;

  img {
    border-radius: 100px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const UserName = styled.div`
  p {
    font-weight: bold;
    color: #a1a6b9;
  }

  b {
    color: #57bbdd;
    font-weight: 400;
  }
`;

export const Register = styled.div`
  gap: 10px;
  display: flex;
  width: max-content;

  b {
    cursor: pointer;
    color: inherit;
    transition: all 50ms ease-in-out;
  }

  b:hover {
    color: white;
  }
`;
