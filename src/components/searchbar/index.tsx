"use client";
import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchInput, Wrapper } from "./styles";
import { useRouter } from "next/navigation";
import { handleEnterKey } from "@/utils";

interface Props {
  iconSide?: "left" | "right";
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
export default function SearchBar(props: Props) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { iconSide = "left", setValue, value } = props;

  function search() {
    router.replace(`/feed/?search=${value}`);
  }
  return (
    <Wrapper>
      {iconSide === "right" ? (
        <>
          <AiOutlineSearch onClick={search} size={25} cursor={"pointer"} />
          <SearchInput
            onKeyDown={(e) => handleEnterKey(e, search)}
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search for posts"
          />
        </>
      ) : (
        <>
          <SearchInput
            onKeyDown={(e) => handleEnterKey(e, search)}
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search for posts"
          />
          <AiOutlineSearch onClick={search} size={25} cursor={"pointer"} />
        </>
      )}
    </Wrapper>
  );
}
