"use client";
import Navbar from "@/components/navbar";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export default function FeedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Navbar />
      <div>{children}</div>
    </Wrapper>
  );
}
