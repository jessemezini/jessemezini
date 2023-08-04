import Image from "next/image";
import Player from "../player";

export default function OnibusIracemapolis() {
  return (
    <>
      <Image
        src="/onibusiracemapolis.png"
        width={240}
        height={240}
        alt="Ônibus Iracemápolis logo"
        className="mx-auto mb-10 rounded-xl"
      />

      <h1 className="text-4xl mb-10 font-bold">App Ônibus Iracemápolis</h1>
      <p className="max-w-xl">
        Aplicativo para usuários do transporte público de Iracemápolis/SP
      </p>

      <Player url="https://www.youtube.com/watch?v=wayPfGvp2vw" />

      <ul className="list-disc pl-5 mb-5 max-w-xl text-left">
        <li>
          Desenvolvido inicialmente com Ionic e Angular v1, atualmente com React
          Native
        </li>
        <li>
          Com mais de 2,4 mil downloads e classificação média de 4,7 no Google
          Play
        </li>
      </ul>

      <p className="max-w-xl">Stack: React Native.</p>
    </>
  );
}
