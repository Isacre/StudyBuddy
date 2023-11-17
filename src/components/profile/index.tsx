"use client";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import ContextMenu from "@/components/contextMenu";
import { ContextMenuOption, UserAccount } from "@/types";
import { ProfileWrapper, Register, UserName, UserPicture, Wrapper } from "./styles";
import Link from "next/link";

interface Props {
  user: UserAccount;
  contextMenuOptions?: ContextMenuOption[];
  showUsername?: boolean;
  pictureSize?: number;
}
export default function Profile(props: Props) {
  const { contextMenuOptions = [], user, showUsername = true, pictureSize = 50 } = props;
  const [ContextModalOpen, setContextModalOpen] = useState(false);

  return (
    <Wrapper onMouseLeave={() => setContextModalOpen(false)}>
      {user === null ? (
        <Register>
          <Link href={"/login"}>
            <b>Log In</b>
          </Link>
          <p>|</p>
          <Link href="/signup">
            <b>Sign Up</b>
          </Link>
        </Register>
      ) : (
        <ProfileWrapper>
          <UserPicture size={pictureSize}>
            <img src={user.picture} alt={`${user.username}`} />
          </UserPicture>
          <UserName>
            {showUsername && <p>{user.username}</p>}
            <b>{`@${user.username}`}</b>
          </UserName>
          {contextMenuOptions.length > 0 && <BsChevronDown size={25} cursor={"pointer"} onMouseEnter={() => setContextModalOpen(true)} />}
        </ProfileWrapper>
      )}
      <ContextMenu isOpen={ContextModalOpen} setOpen={setContextModalOpen} options={contextMenuOptions} />
    </Wrapper>
  );
}
