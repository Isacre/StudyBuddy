"use client";
import useRooms from "@/hooks/apiCalls/useRooms";
import { FaPlus } from "react-icons/fa";
import RoomComponent from "@/components/room";
import { AvailableRooms, CreateRoomButton, RoomCount, Wrapper, TopicsWrapper, RoomsWrapper } from "./styles";
import useTopics from "@/hooks/apiCalls/useTopics";
import Topic from "./topic";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Feed() {
  const router = useRouter();
  const { Rooms } = useRooms();
  const { Topics } = useTopics();
  const userData = useAppSelector((state) => state.user.data);
  const [CreatePostModal, setCreatePostModal] = useState(false);

  function handleCreatePostButton() {
    const userNotAuthenticated = userData?.id === 0;
    if (userNotAuthenticated) {
      router.replace("/login");
    } else {
      setCreatePostModal(true);
    }
  }

  return (
    <Wrapper>
      <TopicsWrapper>
        <b style={{ color: "#66657d", fontSize: 20 }}>Browse Topics</b>
        {Topics.results.map((topic) => {
          if (topic.room_count > 0) {
            return <Topic topic={topic} key={topic.id} />;
          }
        })}
      </TopicsWrapper>
      <RoomsWrapper>
        <RoomCount>
          <div>
            <b>STUDY ROOMS</b>
            <p>{Rooms.count} Rooms available</p>
          </div>
          <CreateRoomButton>
            <FaPlus color={"white"} />
            <b onClick={handleCreatePostButton}>Create Room</b>
          </CreateRoomButton>
        </RoomCount>
        <AvailableRooms>
          {Rooms.results.map((room) => (
            <RoomComponent room={room} key={room.id} />
          ))}
        </AvailableRooms>
      </RoomsWrapper>
    </Wrapper>
  );
}
