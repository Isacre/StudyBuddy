"use client";
import React from "react";
import { Form, FormBody, Message, SignUpRedirect, SubmitButton, Title, Wrapper } from "./styles";
import Link from "next/link";

export default function SignUp() {
  return (
    <Wrapper>
      <Form>
        <Title>Sign Up</Title>
        <Message>Join the best studying community</Message>
        <FormBody>
          <label htmlFor="">Email</label>
          <input type="text" autoComplete="new-password" />
          <label htmlFor="">Username</label>
          <input type="text" autoComplete="new-password" />
          <label htmlFor="">Password</label>
          <input type="password" autoComplete="new-password" />
          <SubmitButton>Submit</SubmitButton>
          <SignUpRedirect>
            <small>Already has an account?</small>
            <Link href="/login">
              <b>Log In</b>
            </Link>
          </SignUpRedirect>
        </FormBody>
      </Form>
    </Wrapper>
  );
}
