import Image from "next/image";
import Player from "../player";

export default function CaliPlaces() {
  return (
    <>
      <Image
        src="/caliplaces-dark.png"
        width={240}
        height={240}
        alt="Cali Places logo"
        className="mx-auto mb-10 rounded-xl"
      />

      <h1 className="text-4xl mb-10 font-bold">App Cali Places</h1>
      <p className="max-w-xl">
        Aplicativo para encontrar e adicionar novos locais para praticar
        calistenia
      </p>

      <div className="my-6">
        <a href="https://caliplaces.com/">Website &#8594;</a>
      </div>

      <p className="my-6 text-sm italic">iOS & Android (Em desenvolvimento)</p>

      <Player url="https://www.youtube.com/watch?v=tovQHqRBL-Y" />

      <ul className="list-disc pl-5 mb-5 max-w-xl text-left">
        <li>Localização do dispositivo para exibir locais próximos</li>
        <li>
          Adicionar novo local buscando a cidade e reposicionando o marcador no
          mapa
        </li>
        <li>Login social com Google e Apple</li>
      </ul>

      <p className="max-w-xl">
        Stack: React Native, Expo, Typescript, NativeWind, Firebase, Firebase
        Emulator, React Hook Form, RN Maps, Expo Router.
      </p>
    </>
  );
}
