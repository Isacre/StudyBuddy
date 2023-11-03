import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { SearchInput, Wrapper } from "./styles";

interface Props {
  iconSide?: "left" | "right";
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
export default function SearchBar(props: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { iconSide = "left", setValue, value } = props;

  function resetSearch() {
    setValue("");
    inputRef.current?.focus();
  }
  return (
    <Wrapper>
      {iconSide === "right" ? (
        <>
          {value.length === 0 && <AiOutlineSearch onClick={resetSearch} size={25} cursor={"pointer"} />}
          {value.length !== 0 && <MdOutlineCancel onClick={resetSearch} size={25} cursor={"pointer"} />}
          <SearchInput ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search for posts" />
        </>
      ) : (
        <>
          <SearchInput ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search for posts" />
          {value.length === 0 && <AiOutlineSearch onClick={resetSearch} size={25} cursor={"pointer"} />}
          {value.length !== 0 && <MdOutlineCancel onClick={resetSearch} size={25} cursor={"pointer"} />}
        </>
      )}
    </Wrapper>
  );
}
