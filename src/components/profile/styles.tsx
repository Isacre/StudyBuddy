import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;
export const UserPicture = styled.div`
  border-radius: 100px;
  width: 50px;
  height: 50px;
  background-color: #87b0c7;
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
export const UserName = styled.p`
  p {
    font-weight: bold;
    color: #a1a6b9;
  }

  b {
    color: #87b0c7;
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
