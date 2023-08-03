import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const border =
  "rounded-2xl p-0.5 bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-400 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-500 hover:dark:from-zinc-600 hover:dark:via-zinc-500 hover:dark:to-zinc-400";
const content = "rounded-2xl h-full p-8 bg-neutral-100 dark:bg-black";
const title = "text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-200";
const text = "text-zinc-600 dark:text-zinc-400 leading-8 text-left";

export default function Portfolio() {
  return (
    <>
      <h1 className="text-4xl mb-14 font-bold self-start">Portfolio</h1>

      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
        <Link href="/portfolio/medite-em-casa" className={border}>
          <div className={content}>
            <div className="flex justify-between">
              <h2 className={title}>App Medite em Casa</h2>
              <BiChevronRight size="24" />
            </div>

            <p className={text}>
              Aplicativo de meditação e sono feito em parceria com o idealizador
              do canal Meditar para Despertar, Fabio Lima.
            </p>
          </div>
        </Link>

        <Link href="/portfolio/onibus-iracemapolis" className={border}>
          <div className={content}>
            <div className="flex justify-between">
              <h2 className={title}>App Ônibus Iracemápolis</h2>
              <BiChevronRight size="24" />
            </div>

            <p className={text}>
              Aplicativo para usuários do transporte público de Iracemápolis/SP
            </p>
          </div>
        </Link>

        <Link href="/portfolio/caliplaces" className={border}>
          <div className={content}>
            <div className="flex justify-between">
              <h2 className={title}>caliplaces.com</h2>
              <BiChevronRight size="24" />
            </div>

            <p className={text}>
              Aplicativo para encontrar locais para praticar calistenia
            </p>
          </div>
        </Link>

        <Link href="/portfolio/dangelo-corretor" className={border}>
          <div className={content}>
            <div className="flex justify-between">
              <h2 className={title}>dangelocorretor.com.br</h2>
              <BiChevronRight size="24" />
            </div>

            <p className={text}>Site do corretor de imóveis Dangelo Olivatto</p>
          </div>
        </Link>

        <Link href="/portfolio/site-cardapio" className={border}>
          <div className={content}>
            <div className="flex justify-between">
              <h2 className={title}>Site Cardápio</h2>
              <BiChevronRight size="24" />
            </div>

            <p className={text}>Cardápio online 100% customizado</p>
          </div>
        </Link>
      </div>
    </>
  );
}
