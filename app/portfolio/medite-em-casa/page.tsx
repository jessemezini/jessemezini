import Image from "next/image";
import Player from "../player";

const text =
  "[&>p]:text-zinc-600 [&>p]:dark:text-zinc-300 [&>li]:text-zinc-600 [&>li]:dark:text-zinc-300";

export default function MediteEmCasa() {
  return (
    <div className={`text-center ${text} flex flex-col items-center`}>
      <Image
        src="/mediteemcasa.png"
        width={240}
        height={240}
        alt="Medite em Casa logo"
        className="mx-auto mb-10 rounded-xl"
      />

      <h1 className="text-4xl mb-10 font-bold">App Medite em Casa</h1>
      <p className="max-w-xl">
        Aplicativo de meditação e sono feito em parceria com o idealizador do
        canal Meditar para Despertar, Fabio Lima, canal do Youtube com mais de
        680 mil inscritos. No momento o aplicativo não está no ar, está sendo
        adicionado conteúdo para lançamento. Para visualização entrar em
        contato, está no Closed Testing da Play Store e TestFlight para iOS.
      </p>

      <Player url="https://www.youtube.com/watch?v=qRskoKyrzBE" />

      <ul className={`list-disc pl-5 mb-5 max-w-xl text-left ${text}`}>
        <li>Desenvolvido com React Native Expo</li>
        <li>
          Painel de gerenciamento desenvolvido com Typescript, Next.js, Material
          UI e Firebase
        </li>
        <li>Meditações e músicas organizadas por categorias</li>
        <li>Meditação do dia com agendamento</li>
        <li>Exercícios de respiração feitos com Reanimated</li>
        <li>
          Autenticação Social (Facebook, Google e Apple) e por email e password
        </li>
        <li>Assinatura de pagamentos com Revenue Cat</li>
      </ul>

      <p className="max-w-xl">
        Stack: React Native, Expo, Typescript, RN Paper, Firebase, Zustand,
        React Hook Form, Next.js, Revenue Cat, Firebase Analytics e Crashlytics.
      </p>
    </div>
  );
}
