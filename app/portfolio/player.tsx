"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Player({ url }: { url: string }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-[280px] h-[588px] sm:w-[390px] sm:h-[820px] mx-auto my-10 border-4 border-zinc-800 rounded-2xl p-2">
      {isClient && (
        <ReactPlayer
          url={url}
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
