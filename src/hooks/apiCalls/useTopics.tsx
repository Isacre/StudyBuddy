import { useAppSelector } from "@/redux/hooks";
import { saveRooms } from "@/redux/reducers/rooms";
import { saveTopics } from "@/redux/reducers/topics";
import { getRooms, getTopics } from "@/services";
import { handleErrors } from "@/utils";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useTopics() {
  const dispatch = useDispatch();
  const [TopicsLoading, setTopicsLoading] = useState(false);
  const Topics = useAppSelector((state) => state.topics.data);

  function fetchTopics() {
    setTopicsLoading(true);
    getTopics()
      .then((res) => {
        dispatch(saveTopics(res));
        setTopicsLoading(false);
      })
      .catch((err) => {
        handleErrors(err);
        setTopicsLoading(false);
      });
  }

  useEffect(() => {
    fetchTopics();
  }, []);

  return { Topics, TopicsLoading, fetchTopics };
}
