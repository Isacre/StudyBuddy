"use client";
import React, { useState } from "react";
import FeedLayout from "../layouts/layout";
import Link from "next/link";
import { Form, FormBody, Message, SignUpRedirect, SubmitButton, Title, Wrapper } from "./styles";
import { getUserData, login } from "@/services/index";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { handleErrors } from "@/utils";
import { useDispatch } from "react-redux";
import { saveUserData } from "@/redux/reducers/user";
import { useAppSelector } from "@/redux/hooks";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userData = useAppSelector((state) => state.user.data);

  function submit() {
    login(Email, Password)
      .then((res) => {
        localStorage.setItem("accesstoken", res.access);
        localStorage.setItem("refreshtoken", res.refresh);
      })
      .catch((err) => {
        handleErrors(err);
      })
      .then(() => {
        getUserData().then((res) => {
          dispatch(saveUserData(res));
        });
        console.log("1", userData);
      });
  }

  return (
    <FeedLayout>
      <Wrapper>
        <Form>
          <Title>Login</Title>
          <Message>Find your study partner</Message>
          <FormBody>
            <label htmlFor="">Email</label>
            <input value={Email} onChange={(e) => setEmail(e.target.value)} type="text" />
            <label htmlFor="">Password</label>
            <input value={Password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <SubmitButton onClick={submit}>Submit</SubmitButton>
            <SignUpRedirect>
              <small>Haven't signed up yet?</small>
              <Link href="/signup">
                <b>Sign Up</b>
              </Link>
            </SignUpRedirect>
          </FormBody>
        </Form>
      </Wrapper>
    </FeedLayout>
  );
}
