const AsideContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="px-5 my-4">{children}</div>
);

const AsideTitle = ({ text }: { text: string }) => (
  <div className="bg-sky-900 px-5 py-3">
    <h2 className="text-xl">{text}</h2>
  </div>
);

const Separator = () => <div className="h-4" />;

const SectionTitle = ({ text }: { text: string }) => (
  <h2 className="border-t-2 border-b-2 border-gray-600 text-lg py-2 mt-10 mb-5">
    {text}
  </h2>
);

export default function Resume() {
  return (
    <div className="dark:bg-gray-900 bg-gray-300">
      <main className="flex flex-col gap-5 max-w-5xl mx-auto dark:bg-black bg-white">
        <aside className="bg-sky-800 text-white py-5">
          <AsideContainer>
            <h1 className="text-4xl">Jesse Mezini</h1>
            <h2 className="text-xl">Mobile Developer</h2>
          </AsideContainer>

          <AsideTitle text="Informação pessoal" />

          <AsideContainer>
            <p>Endereço</p>
            <p>Rua Salvador de Oliveira, 111 - Iracemápolis/SP</p>

            <Separator />

            <p>Telefone</p>
            <p>+55 19 98260-4543</p>

            <Separator />

            <p>E-mail</p>
            <p>jessemezini@gmail.com</p>

            <Separator />

            <p>Github</p>
            <a href="https://github.com/jessemezini">github.com/jessemezini</a>
          </AsideContainer>

          <AsideTitle text="Habilidades técnicas" />

          <AsideContainer>
            <p>HTML - CSS</p>
            <p>Javascript - React - Next.js</p>
            <p>React Native</p>
            <p>Firebase</p>
            <p>Git</p>
            <p>Photoshop - Figma</p>
          </AsideContainer>

          <AsideTitle text="Línguas" />

          <AsideContainer>
            <p>Português - Nativo</p>
            <p>Inglês - Fluente</p>
          </AsideContainer>

          <AsideTitle text="Cursos" />

          <AsideContainer>
            <p>The Complete React Native + Hooks Course - Udemy.com</p>
            <p>Modern React with Redux - Udemy.com</p>
            <p>Advanced React and Redux - Udemy.com</p>
            <p>React Testing with Jest and Enzyme - Udemy.com</p>
            <p>
              Outros cursos: es6.io, codecademy.com, egghead.io, coursera.org..
            </p>
          </AsideContainer>
        </aside>

        <section className="px-5 py-5">
          <header>
            <p>
              Desenvolvedor web e mobile com mais de 10 anos de experiência.
              Trabalhei como freelancer e empreendedor solo para dezenas de
              clientes. Estou sempre buscando melhorar e acompanhar novas
              tecnologias.
            </p>
          </header>

          <section>
            <SectionTitle text="Experiência" />

            <article>
              <p className="my-5">
                2013-01 <br /> 2023
              </p>

              <div>
                <h3 className="mb-2 font-bold text-lg">Desenvolvedor Web</h3>
                <p className="italic mb-5">Freelancer / Empreendedor Solo</p>

                <ul className="list-disc pl-5 mb-5">
                  <li>
                    Reunir com clientes para coletar requisitos, projetar sites
                    e definir cronogramas
                  </li>
                  <li>
                    Projetar e desenvolver sites com html5 e design responsivo
                  </li>
                  <li>
                    Otimização de sites, usando ferramentas como lighthouse,
                    chrome audits e webpagetest.org
                  </li>
                </ul>

                <p>
                  Stack: HTML, CSS, Javascript, Typescript, React, Gatsby,
                  Next.js, MUI, Styled Components, Tailwind, Firebase, Digital
                  Ocean, Netlify, Vercel, Github, PWA, Wordpress, Lemp..
                </p>
              </div>
            </article>
          </section>
        </section>
      </main>
    </div>
  );
}
