import { AuthToken, PaginationResponse, Room, Topic, UserAccount } from "@/types";
import { addParamIfNotEmpty } from "@/utils";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
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

export async function verifyAccessToken(token: string): Promise<{}> {
  const accesstoken = await axios.post(`${url}/auth/jwt/verify/`, { token }, config);
  return accesstoken.data;
}

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

export async function getRooms(search: string): Promise<PaginationResponse<Room>> {
  const params = {};
  addParamIfNotEmpty(params, "search", search);
  const room = await axios.get(`${url}/rooms/`, { params, headers: config.headers });
  return room.data;
}

export async function getTopics(): Promise<PaginationResponse<Topic>> {
  const topics = await axios.get(`${url}/topics/`, config);
  return topics.data;
}
