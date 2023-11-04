"use client";
import React from "react";
import FeedLayout from "../layouts/layout";
import styled from "styled-components";
import Link from "next/link";
const Wrapper = styled.div`
  display: flex;
  padding: 25px 0px;
  align-items: baseline;
  justify-content: center;
  width: 100%;
`;

const Form = styled.div`
  margin-top: 100px;
  width: 500px;
  height: 400px;
  background-color: #404156;
  border-radius: 5px;
`;

const Title = styled.div`
  border-radius: 5px 5px 0px 0px;
  background-color: #6a6c98;
  padding: 20px;
  text-align: center;
  color: white;
  font-weight: bolder;
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;

  label {
    margin-bottom: 10px;
  }
  input {
    padding: 10px 10px;
    outline: none;
    border: none;
    background-color: #eaf0ff;
    border-radius: 2px;
    margin-bottom: 10px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #6dbcd5;
  border: none;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: bold;
`;

const Message = styled.b`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  color: #00c3ff;
`;

const SignUpRedirect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  b {
    cursor: pointer;
    color: #00c3ff;
  }
`;
export default function Login() {
  return (
    <FeedLayout>
      <Wrapper>
        <Form>
          <Title>Login</Title>
          <Message>Find your study partner</Message>
          <FormBody>
            <label htmlFor="">Email</label>
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
