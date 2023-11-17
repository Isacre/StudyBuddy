"use client";
import useRooms from "@/hooks/apiCalls/useRooms";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import RoomComponent from "@/components/room";

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  gap: 30px;
`;

const RoomCount = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  justify-content: space-between;

  b {
    color: white;
  }

  p {
    color: #4f4d67;
  }
`;

const CreateRoomButton = styled.div`
  background-color: #72c5df;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  gap: 15px;
  cursor: pointer;
  b {
    font-weight: light;
  }
`;

const AvailableRooms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export default function Feed() {
  const { Rooms, RoomsLoading, fetchRooms } = useRooms();
  return (
    <Wrapper>
      <RoomCount>
        <div>
          <b>STUDY ROOMS</b>
          <p>{Rooms.count} Rooms available</p>
        </div>
        <CreateRoomButton>
          <FaPlus color={"white"} />
          <b>Create Room</b>
        </CreateRoomButton>
      </RoomCount>
      <AvailableRooms>
        {Rooms.results.map((room) => (
          <RoomComponent room={room} key={room.id} />
        ))}
      </AvailableRooms>
    </Wrapper>
  );
}
