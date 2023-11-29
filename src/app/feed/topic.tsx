import { Topic } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import styled from "styled-components";

const Component = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 25px;
  width: 200px;
  justify-content: space-between;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "#4DBBDD" : "#9d9da9")};
  font-weight: ${(props) => props.isSelected && "bold"};
`;

const RoomNumber = styled.div`
  padding: 5px 10px;
  background-color: #404153;
`;

const Name = styled.div`
  line-break: auto;
  max-width: 100px;
`;

export default function Topic(props: { topic: Topic }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const { id, name, room_count } = props.topic;
  return (
    <Component isSelected={search === name}>
      <Name onClick={() => router.push(`?search=${name}`)}>{name}</Name>
      <RoomNumber>{room_count}</RoomNumber>
    </Component>
  );
}
