"use client";
import FeedLayout from "./layouts/layout";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 25px 0px;
`;

export default function Home() {
  return (
    <FeedLayout>
      <Wrapper>a</Wrapper>
    </FeedLayout>
  );
}
