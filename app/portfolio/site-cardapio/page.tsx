import Image from "next/image";
import Player from "../player";

const text = "[&>p]:text-zinc-600 [&>p]:dark:text-zinc-300";

export default function SiteCardapio() {
  return (
    <div className={`text-center ${text}`}>
      <Image
        src="/caliplaces-dark.png"
        width={240}
        height={240}
        alt="Cali Places logo"
        className="mx-auto mb-10 rounded-xl"
      />

      <h1 className="text-4xl mb-10 font-bold">App Ônibus Iracemápolis</h1>
      <p className={text}>
        Aplicativo para encontrar e adicionar novos locais para praticar
        calistenia
      </p>

      <div className="my-6">
        <a href="https://caliplaces.com/">Website &#8594;</a>
      </div>

      <p className="my-6 text-sm italic">iOS & Android (Em desenvolvimento)</p>

      <Player url="https://www.youtube.com/watch?v=wayPfGvp2vw" />
    </div>
  );
}
