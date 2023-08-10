import { experience, education, projects } from "./data";

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
      <main className="flex flex-col md:flex-row max-w-5xl mx-auto dark:bg-black bg-white">
        <aside className="bg-sky-800 text-white py-5 basis-full">
          <AsideContainer>
            <h1 className="text-4xl">Jesse Mezini</h1>
            <h2 className="text-xl">Mobile Developer</h2>
          </AsideContainer>

          <AsideTitle text="Personal information" />

          <AsideContainer>
            <p>Address</p>
            <p>Rua Salvador de Oliveira, 111 - Iracemápolis/SP</p>

            <Separator />

            <p>Phone</p>
            <p>+55 19 98260-4543</p>

            <Separator />

            <p>E-mail</p>
            <p>jessemezini@gmail.com</p>

            <Separator />

            <p>Github</p>
            <a href="https://github.com/jessemezini">github.com/jessemezini</a>
          </AsideContainer>

          <AsideTitle text="Technical abilities" />

          <AsideContainer>
            <p>HTML - CSS</p>
            <p>Javascript - React - Next.js</p>
            <p>React Native</p>
            <p>Firebase</p>
            <p>Git</p>
            <p>Photoshop - Figma</p>
          </AsideContainer>

          <AsideTitle text="Languages" />

          <AsideContainer>
            <p>Português - Native</p>
            <p>Inglês - Fluent</p>
          </AsideContainer>

          <AsideTitle text="Courses" />

          <AsideContainer>
            <p>The Complete React Native + Hooks Course - Udemy.com</p>
            <p>Modern React with Redux - Udemy.com</p>
            <p>Advanced React and Redux - Udemy.com</p>
            <p>React Testing with Jest and Enzyme - Udemy.com</p>
            <p>
              Other courses: es6.io, codecademy.com, egghead.io, coursera.org..
            </p>
          </AsideContainer>
        </aside>

        <section className="mx-5 md:mx-10 pt-5 md:pt-10 pb-5">
          <header>
            <p>
              Web and mobile developer with over 10 years of experience.
              I&apos;ve worked as a freelancer and solo entrepreneur for dozens
              of customers. I&apos;m always looking to improve and keep up with
              new technologies.
            </p>
          </header>

          <section>
            <SectionTitle text="Experience" />

            {experience.map((item, i) => (
              <article key={i} className="mb-16">
                <p className="my-5">
                  {item.startDate} <br /> {item.endDate}
                </p>

                <div>
                  <h3 className="mb-2 font-bold text-lg">{item.title}</h3>
                  <p className="italic mb-5">{item.desc}</p>
                  <p className="mb-5">{item.about}</p>

                  <ul className="list-disc pl-5 mb-5">
                    {item.list.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>

                  <p>Stack: {item.stack}</p>
                </div>
              </article>
            ))}
          </section>

          <section>
            <SectionTitle text="Education" />

            {education.map((item, i) => (
              <article key={i} className="mb-16">
                <p className="my-5">
                  {item.startDate} <br /> {item.endDate}
                </p>

                <div>
                  <h3 className="mb-2 font-bold text-lg">{item.title}</h3>

                  <ul className="list-disc pl-5 mb-5">
                    {item.list.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </section>

          <section>
            <SectionTitle text="Projects" />

            {projects.map((item, i) => (
              <article key={i} className="mb-16">
                <p className="my-5">
                  {item.startDate} <br /> {item.endDate}
                </p>

                <div>
                  <h3 className="mb-2 font-bold text-lg">{item.title}</h3>
                  <p className="italic mb-5">{item.desc}</p>

                  <ul className="list-disc pl-5 mb-5">
                    {item.list.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>

                  <p>Stack: {item.stack}</p>
                </div>
              </article>
            ))}
          </section>
        </section>
      </main>
    </div>
  );
}
