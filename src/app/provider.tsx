"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux";

export default function Providers({ children }: { children: ReactNode | ReactNode[] }) {
  return <Provider store={store}>{children}</Provider>;
}
