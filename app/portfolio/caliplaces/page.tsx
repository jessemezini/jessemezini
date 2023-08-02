"use client";
import Image from "next/image";
import ReactPlayer from "react-player";

const text = "[&>p]:text-zinc-600 [&>p]:dark:text-zinc-300";

export default function CaliPlaces() {
  return (
    <div className={`text-center ${text}`}>
      <Image
        src="/caliplaces-dark.png"
        width={240}
        height={240}
        alt="Cali Places logo"
        className="mx-auto mb-10 rounded-xl"
      />

      <h1 className="text-4xl mb-10 font-bold">App Cali Places</h1>
      <p className={text}>
        Aplicativo para encontrar e adicionar novos locais para praticar
        calistenia
      </p>

      <div className="my-6">
        <a href="https://caliplaces.com/">Website &#8594;</a>
      </div>

      <p className="my-6 text-sm italic">iOS & Android (Em desenvolvimento)</p>

      <div className="w-[390px] h-[844px] mx-auto my-10 border-2  rounded-2xl p-2">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=wayPfGvp2vw"
          width="100%"
          height="100%"
          playing={true}
          loop={true}
          muted
        />
      </div>
    </div>
  );
}
