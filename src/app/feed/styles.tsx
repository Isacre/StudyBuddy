import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  margin: auto;
  justify-content: center;
`;

export const RoomCount = styled.div`
  margin-top: 120px;
  display: flex;
  align-items: center;
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

export const CreateRoomButton = styled.div`
  background-color: #57bbdd;
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

export const AvailableRooms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const TopicsWrapper = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 300px;
`;
export const RoomsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;
