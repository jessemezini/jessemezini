import Nav from "../components/nav";
import { MdOutlineEmail, MdAlternateEmail, MdWhatsapp } from "react-icons/md";

const border =
  "rounded-2xl p-px bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-400 dark:from-zinc-700 dark:via-zinc-600 dark:to-zinc-500 hover:dark:from-zinc-600 hover:dark:via-zinc-500 hover:dark:to-zinc-400";
const content =
  "rounded-2xl h-full p-8 bg-neutral-100 dark:bg-black flex flex-col justify-center items-center";
const title =
  "text-xl font-bold my-10 text-zinc-800 dark:text-zinc-200 flex [&>small]:mr-2";

export default function Contact() {
  return (
    <>
      <Nav />

      <div className="max-w-6xl mx-auto p-5">
        <h1 className="text-4xl mb-14 font-bold">Contato</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className={border}>
            <div className={content}>
              <MdOutlineEmail size="45" />
              <h2 className={title}>
                jessemezini
                <MdAlternateEmail size="32" />
                gmail.com
              </h2>
            </div>
          </div>

          <div className={border}>
            <div className={content}>
              <MdWhatsapp size="45" />
              <h2 className={title}>
                <small>19</small> 98260.4543
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
