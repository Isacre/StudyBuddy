"use client";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/en";
import relativeTime from "dayjs/plugin/relativeTime";
import styled from "styled-components";

const ElapsedTime = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #abacc1;
`;

dayjs.extend(relativeTime);

interface TimeAgoProps {
  datetimeString: string;
}

const TimeAgoComponent: React.FC<TimeAgoProps> = ({ datetimeString }) => {
  const [timeAgo, setTimeAgo] = useState<string>("");

  useEffect(() => {
    const datetime = dayjs(datetimeString);

    dayjs.locale("en");

    const now = dayjs();
    const diffInMinutes = now.diff(datetime, "minute");
    const diffInHours = now.diff(datetime, "hour");

    if (diffInHours >= 24) {
      setTimeAgo(datetime.fromNow());
    } else if (diffInMinutes < 60) {
      setTimeAgo(`${diffInMinutes} minute${diffInMinutes !== 1 ? "s" : ""} ago`);
    } else {
      setTimeAgo(`${diffInHours} hour${diffInHours !== 1 ? "s" : ""}, ${diffInMinutes - diffInHours * 60} minute${diffInMinutes !== 1 ? "s" : ""} ago`);
    }
  }, [datetimeString]);

  return <ElapsedTime>{timeAgo}</ElapsedTime>;
};

export default TimeAgoComponent;
