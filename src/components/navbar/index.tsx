import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/logo.svg";
import SearchBar from "@/components/searchbar";
import Profile from "@/components/profile";
import { Content, Logo, Wrapper } from "./styles";
import { ContextMenuOption, UserAccount } from "@/types";
import { BiUser } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";
import { useAppSelector } from "@/redux/hooks";
import { logoutUser } from "@/redux/reducers/user";
import { useDispatch } from "react-redux";

interface Props {
  options?: ContextMenuOption[];
}
export default function Navbar(props: Props) {
  const dispatch = useDispatch();
  const User = useAppSelector((state) => state.user.data);
  const [Value, setValue] = useState("");
  const Options: ContextMenuOption[] = [
    { text: "Ver Perfil", onClick: () => console.log("Vendo perfil"), icon: BiUser },
    { text: "Criar Grupo", onClick: () => console.log("Criando grupo"), icon: HiOutlineUserGroup },
    { text: "Sair", onClick: LogOut, icon: AiOutlineLogout, color: "red" },
  ];

  function LogOut() {
    sessionStorage.removeItem("accesstoken");
    sessionStorage.removeItem("refreshtoken");
    dispatch(logoutUser());
  }

  const { options = Options } = props;
  return (
    <Wrapper>
      <Content>
        <Logo>
          <Image src={logo} alt="study-buddy" height={40} />
          <h2>StudyBuddy</h2>
        </Logo>
        <SearchBar value={Value} setValue={setValue} iconSide="left" />
        <Profile contextOptions={options} user={User} />
      </Content>
    </Wrapper>
  );
}
