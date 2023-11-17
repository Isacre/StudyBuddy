"use client";
import { Room } from "@/types";
import React from "react";
import styled from "styled-components";
import Profile from "../profile";
import TimeAgoComponent from "../timeAgoComponent";
import { RiGroupLine } from "react-icons/ri";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #404156;
  padding: 15px;
  border-radius: 10px;
`;

const TopRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  font-size: 18px;
  color: white;
  padding: 20px 0px;
  border-bottom: 1px solid #4e4f64;
  font-weight: 500;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

const MemberCount = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  svg {
    color: #4dbbdd;
  }
`;

const Topic = styled.div`
  color: #abacc1;
  background-color: #52536f;
  padding: 5px 15px;
  border-radius: 25px;
`;

export default function RoomComponent(props: { room: Room; index?: number }) {
  const { created_at, host, name, topic } = props.room;
  return (
    <Wrapper>
      <TopRow>
        <Profile user={host} showUsername={false} pictureSize={40} />
        <TimeAgoComponent datetimeString={created_at} />
      </TopRow>
      <Content>{name}</Content>
      <Members>
        <MemberCount>
          <RiGroupLine />5 Joined
        </MemberCount>
        <Topic>{topic.name}</Topic>
      </Members>
    </Wrapper>
  );
}
