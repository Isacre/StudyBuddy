"use client";
import Navbar from "@/components/navbar";
import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import { store } from "../../redux";
import { useAppSelector } from "@/redux/hooks";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RenderedRoute = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  width: 80%;
`;

export default function FeedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Provider store={store}>
        <Navbar />
        <RenderedRoute>{children}</RenderedRoute>
      </Provider>
    </Wrapper>
  );
}
