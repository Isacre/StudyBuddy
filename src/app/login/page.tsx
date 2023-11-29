"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Form, FormBody, Message, SignUpRedirect, SubmitButton, Title, Wrapper } from "./styles";
import { getUserData, login } from "@/services/index";
import { handleErrors } from "@/utils";
import { useDispatch } from "react-redux";
import { saveUserData } from "@/redux/reducers/user";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();

  function submit() {
    login(Email, Password)
      .then((res) => {
        localStorage.setItem("accesstoken", res.access);
        localStorage.setItem("refreshtoken", res.refresh);
        getUserData().then((res) => {
          dispatch(saveUserData(res));
        });
        router.replace("/feed");
      })
      .catch((err) => {
        handleErrors(err);
      });
  }

  return (
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
  );
}
