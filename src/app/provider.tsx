"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/navbar";

export default function Providers({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Navbar />
      {children}
    </Provider>
  );
}
