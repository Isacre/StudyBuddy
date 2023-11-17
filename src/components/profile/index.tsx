import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import ContextMenu from "@/components/contextMenu";
import { ContextMenuOption, UserAccount } from "@/types";
import { ProfileWrapper, Register, UserName, UserPicture, Wrapper } from "./styles";
import Link from "next/link";

interface Props {
  user: UserAccount;
  contextOptions: ContextMenuOption[];
}
export default function Profile(props: Props) {
  const { contextOptions, user } = props;
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
          <UserPicture>
            <img src={user.picture} alt="" />
          </UserPicture>
          <UserName>
            <p>dennis</p>
            <b>@dennis</b>
          </UserName>
          {contextOptions.length > 0 && <BsChevronDown size={25} cursor={"pointer"} onMouseEnter={() => setContextModalOpen(true)} />}
        </ProfileWrapper>
      )}
      <ContextMenu isOpen={ContextModalOpen} setOpen={setContextModalOpen} options={contextOptions} />
    </Wrapper>
  );
}
