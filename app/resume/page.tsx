const AsideContentContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="px-5 my-4">{children}</div>
);

const AsideContentTitle = ({ text }: { text: string }) => (
  <div className="bg-sky-800 px-5 py-3">
    <h2 className="text-xl">{text}</h2>
  </div>
);

const Separator = () => <div className="h-4" />;

export default function Resume() {
  return (
    <main className="flex flex-col gap-5 max-w-5xl mx-auto">
      <aside className="bg-sky-900">
        <AsideContentContainer>
          <h1 className="text-4xl">Jesse Mezini</h1>
          <h2 className="text-xl">Mobile Developer</h2>
        </AsideContentContainer>

        <AsideContentTitle text="Informação pessoal" />

        <AsideContentContainer>
          <p>Endereço</p>
          <p>Rua Salvador de Oliveira, 111 - Iracemápolis - São Paulo</p>

          <Separator />

          <p>Telefone</p>
          <p>+55 19 98260-4543</p>

          <Separator />

          <p>E-mail</p>
          <p>jessemezini@gmail.com</p>

          <Separator />

          <p>Github</p>
          <a href="https://github.com/jessemezini">github.com/jessemezini</a>
        </AsideContentContainer>

        <AsideContentTitle text="Habilidades técnicas" />

        <AsideContentContainer>
          <p>HTML - CSS</p>
          <p>Javascript - ReactJS - NextJS</p>
          <p>React Native</p>
          <p>Firebase</p>
          <p>Git</p>
          <p>Photoshop - Figma</p>
        </AsideContentContainer>

        <AsideContentTitle text="Linguagem" />

        <AsideContentContainer>
          <p>Português - Nativo</p>
          <p>Inglês - Fluente</p>
        </AsideContentContainer>

        <AsideContentTitle text="Cursos" />

        <AsideContentContainer>
          <p>The Complete React Native + Hooks Course - Udemy.com</p>
          <p>Modern React with Redux - Udemy.com</p>
          <p>Advanced React and Redux - Udemy.com</p>
          <p>React Testing with Jest and Enzyme - Udemy.com</p>
          <p>
            Outros cursos: es6.io, codecademy.com, egghead.io, coursera.org..
          </p>
        </AsideContentContainer>
      </aside>
      <div>asdf</div>
    </main>
  );
}
