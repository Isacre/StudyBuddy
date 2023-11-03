import React from "react";
import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
`;
const ProfileWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;
const UserPicture = styled.div`
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
const UserName = styled.p`
  p {
    font-weight: bold;
    color: #a1a6b9;
  }

  b {
    color: #87b0c7;
    font-weight: 400;
  }
`;

const Register = styled.div`
  gap: 10px;
  display: flex;

  b {
    cursor: pointer;
    color: inherit;
    transition: all 50ms ease-in-out;
  }

  b:hover {
    color: white;
  }
`;

interface Props {}
export default function Profile() {
  return (
    <Wrapper>
      {1 + 1 !== 2 ? (
        <Register>
          <b>Log In</b>
          <p>|</p>
          <b>Sign Up</b>
        </Register>
      ) : (
        <ProfileWrapper>
          <UserPicture>
            <img
              src="https://s.yimg.com/ny/api/res/1.2/mGT.B13FkIK7xA6u0pd8iQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTYzMDtoPTg5OQ--/https://media.zenfs.com/en-AU/homerun/y7.beau/8550c6d541c4fabcf806abe4dbde2533"
              alt=""
            />
          </UserPicture>
          <UserName>
            <p>dennis</p>
            <b>@dennis</b>
          </UserName>
          <BsChevronDown size={25} cursor={"pointer"} />
        </ProfileWrapper>
      )}
    </Wrapper>
  );
}
