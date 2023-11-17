import { useAppSelector } from "@/redux/hooks";
import { saveRooms } from "@/redux/reducers/rooms";
import { getRooms } from "@/services";
import { handleErrors } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useRooms() {
  const dispatch = useDispatch();
  const [RoomsLoading, setRoomsLoading] = useState(false);
  const Rooms = useAppSelector((state) => state.rooms.data);
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  function fetchRooms() {
    setRoomsLoading(true);
    getRooms(search ? search : "")
      .then((res) => {
        dispatch(saveRooms(res));
        setRoomsLoading(false);
      })
      .catch((err) => {
        handleErrors(err);
        setRoomsLoading(false);
      });
  }

  useEffect(() => {
    fetchRooms();
  }, [search]);

  return { Rooms, RoomsLoading, fetchRooms };
}
