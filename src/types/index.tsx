import { IconType } from "react-icons";

export declare type UserAccount = {
  id: number;
  email: string;
  picture: string;
  username: string;
} | null;

export declare type AuthToken = {
  access: string;
  refresh: string;
};

export declare type ContextMenuOption = { text: string; icon: IconType; onClick: Function; color?: string };
