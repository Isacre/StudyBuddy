"use client";
import { ContextMenuOption } from "@/types";
import React from "react";
import { Option, Wrapper } from "./styles";

interface Props {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  options: ContextMenuOption[];
}
export default function ContextMenu(props: Props) {
  const { isOpen, options, setOpen } = props;

  return (
    <Wrapper $isopen={String(isOpen)}>
      {options?.map((option) => (
        <Option
          key={option.text}
          onClick={() => {
            option.onClick();
            setOpen(false);
          }}
        >
          <option.icon color={option?.color} />
          <p>{option.text}</p>
        </Option>
      ))}
    </Wrapper>
  );
}
