import Image from "next/image";
import Player from "../player";

export default function SiteCardapio() {
  return (
    <>
      <Image
        src="/sitecardapio.png"
        width={240}
        height={240}
        alt="Site Cardápio logo"
        className="mx-auto mb-10 rounded-xl"
      />

      <h1 className="text-4xl mb-10 font-bold">PWA Site Cardápio</h1>
      <p className="max-w-xl">
        Site cardápio para restaurantes, lanchonetes, pizzarias e etc.
      </p>

      <div className="my-6">
        <a href="https://sitecardapio.netlify.app/">Website &#8594;</a>
      </div>

      <Player url="https://www.youtube.com/watch?v=sjyoI-wdJwA" />

      <ul className="list-disc pl-5 mb-5 max-w-xl text-left">
        <li>
          Inicialmente feito em 2015 com yeoman web app generator, gulp, workbox
          para progressive web app, servidor nginx com let&apos;s encrypt.
        </li>
        <li>Após 2016 atualizado para gatsbyjs e servidor netlify.</li>
      </ul>

      <p className="max-w-xl">Stack: Reactjs, gatsbyjs, styled components.</p>
    </>
  );
}
