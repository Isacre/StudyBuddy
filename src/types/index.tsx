import { IconType } from "react-icons";

export declare type UserAccount = {
  id: number;
  email?: string;
  picture: string;
  username: string;
} | null;

export declare type AuthToken = {
  access: string;
  refresh: string;
};

export declare type ContextMenuOption = { text: string; icon: IconType; onClick: Function; color?: string };

export declare type Topic = {
  id: number;
  room_count: number;
  name: string;
};

export declare type Room = {
  id: number;
  host: UserAccount;
  topic: Topic;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export declare type PaginationResponse<T> = {
  count: number;
  next: null | string;
  previous: null | string;
  results: T[];
};
