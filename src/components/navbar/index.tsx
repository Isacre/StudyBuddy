"use client";

import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../../public/logo.svg";
import SearchBar from "../searchbar";
import Profile from "../profile";

const Wrapper = styled.div`
  background-color: #404156;
  width: 100%;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  h2 {
    color: white;
  }
`;

export default function Navbar() {
  const [Value, setValue] = useState("");
  return (
    <Wrapper>
      <Content>
        <Logo>
          <Image src={logo} alt="study-buddy" height={40} />
          <h2>StudyBuddy</h2>
        </Logo>
        <SearchBar value={Value} setValue={setValue} iconSide="left" />
        <Profile />
      </Content>
    </Wrapper>
  );
}
