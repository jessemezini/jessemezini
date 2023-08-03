import Image from "next/image";
import Player from "../player";

export default function DangeloCorretor() {
  return (
    <>
      <Image
        src="/dangelocorretor.png"
        width={240}
        height={240}
        alt="Cali Places logo"
        className="mx-auto mb-10 rounded-xl"
      />

      <h1 className="text-4xl mb-10 font-bold">
        Site e Painel Admin - Dangelo Corretor
      </h1>
      <p className="max-w-xl">Site do corretor de imóveis Dangelo Olivatto</p>

      <div className="my-6">
        <a href="https://dangelocorretor.com.br/">Website &#8594;</a>
      </div>

      <Player url="https://www.youtube.com/watch?v=kUPHa2zzQ44" />

      <ul className="list-disc pl-5 mb-5 max-w-xl text-left">
        <li>Painel de gerenciamento desenvolvido com React e Firebase</li>
        <li>
          Opção drag and drop para reorganizar a galeria de fotos do imóvel
        </li>
        <li>Front end desenvolvido utilizando Next.js</li>
        <li>Filtro de imóveis por tipo, cidade, bairro e busca por código</li>
      </ul>

      <p className="max-w-xl">
        Stack: Create React app, Next.js, Material UI, React Hook Form, React
        DnD, Firebase Typescript.
      </p>
    </>
  );
}
