"use client";
import React from "react";
import FeedLayout from "../layouts/layout";
import { Form, FormBody, Message, SignUpRedirect, SubmitButton, Title, Wrapper } from "./styles";
import Link from "next/link";

export default function SignUp() {
  return (
    <FeedLayout>
      <Wrapper>
        <Form>
          <Title>Sign Up</Title>
          <Message>Join the best studying community</Message>
          <FormBody>
            <label htmlFor="">Email</label>
            <input type="text" />
            <label htmlFor="">Username</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <SubmitButton>Submit</SubmitButton>
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
