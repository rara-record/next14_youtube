"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchVideo = async () => {
  const { data } = await axios.get("/api/video");
  return data;
};

const DashboardPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["video"],
    queryFn: fetchVideo,
  });

  return (
    <div>
      {data?.map((video: VideoType) => (
        <div key={video.id} className="my-2">
          <iframe
            width="560"
            height="315"
            src={video.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
