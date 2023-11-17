import { AuthToken, UserAccount } from "@/types";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
const accesstoken = localStorage.getItem("accesstoken");
const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `JWT ${accesstoken}`,
  },
};

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accesstoken");
    if (token) {
      config.headers!["Authorization"] = "JWT " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export async function registerAccount(email: string, username: string, password: string): Promise<UserAccount> {
  const account = await axios.post(`${url}/auth/users/`, { email, username, password });
  return account.data;
}

export async function login(email: string, password: string): Promise<AuthToken> {
  const tokens = await axios.post(`${url}/auth/jwt/create/`, { email, password });
  return tokens.data;
}

export async function getUserData(): Promise<UserAccount> {
  const user = await axios.get(`${url}/auth/users/me/`, config);
  return user.data;
}
