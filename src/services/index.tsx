import { AuthToken, UserAccount } from "@/types";
import axios from "axios";

const url = process.env.REACT_APP_API_URL;
const accesstoken = localStorage.getItem("accesstoken");
const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `JWT ${accesstoken}`,
  },
};

export async function registerAccount(email: string, username: string, password: string): Promise<UserAccount> {
  const account = await axios.post(`${url}/auth/users/`, { email, username, password }, config);
  return account.data;
}

export async function login(email: string, password: string): Promise<AuthToken> {
  const tokens = await axios.post(`${url}/auth/jwt/create/`, { email, password }, config);
  return tokens.data;
}

export async function getUserData(): Promise<UserAccount> {
  const user = await axios.get(`${url}/auth/users/me/`, config);
  return user.data;
}
