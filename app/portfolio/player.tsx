"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Player() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-[390px] h-[844px] mx-auto my-10 border-4 border-zinc-800  rounded-2xl p-2">
      {isClient && (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=wayPfGvp2vw"
          width="100%"
          height="100%"
          playing={true}
          loop={true}
          muted
        />
      )}
    </div>
  );
}
