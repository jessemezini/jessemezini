import { experience, education, projects, skills } from "./data";

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
            {skills.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </AsideContainer>

          <AsideTitle text="Línguas" />

          <AsideContainer>
            <p>Português - Nativo</p>
            <p>Inglês - Fluente</p>
          </AsideContainer>

          <AsideTitle text="Cursos" />

          <AsideContainer>
            <p>The Complete React Native + Hooks Course - Udemy.com</p>
            <p>Modern React - Udemy.com</p>
            <p>
              Outros cursos: es6.io, codecademy.com, egghead.io, coursera.org..
            </p>
          </AsideContainer>

          <AsideTitle text="Certificações" />

          <AsideContainer>
            <p>
              Learning How to Learn: Powerful mental tools to help you master
              tough subjects - Deep Teaching Solutions - Coursera
            </p>
          </AsideContainer>
        </aside>

        <section className="mx-5 md:mx-10 pt-5 md:pt-10 pb-5">
          <header className="[&>p]:mb-5">
            <p>
              Sou um entusiasta da tecnologia. Minha experiência abrange o
              desenvolvimento, construção, otimização e a usabilidade para
              oferecer a melhor experiência aos usuários de sites e aplicativos,
              onde busco constantemente melhorar.
            </p>
            <p>
              Tenho um grande interesse em aprender e me manter atualizado com
              as últimas tendências e novidades do mundo da tecnologia. Acredito
              que o aprendizado contínuo é essencial para se destacar e inovar
              na área.
            </p>
            <p>
              Além da minha paixão pelo desenvolvimento, também sou um ávido
              leitor, sempre em busca de novos conhecimentos e perspectivas que
              possam enriquecer minha visão e habilidades.
            </p>
          </header>

          <section>
            <SectionTitle text="Experiência" />

            <article className="mb-16">
              <p className="my-5">2013 - 2024</p>

              <div>
                <h3 className="mb-2 font-bold text-lg">Software Developer</h3>
                <p className="italic mb-5">Autônomo/Freelancer · Full-time</p>

                <p className="mb-5">
                  Especializado no desenvolvimento de sites e aplicativos
                  personalizados para diversos setores e necessidades,
                  incluindo:
                </p>

                <ul className="list-disc pl-5 mb-5">
                  <li>
                    Websites: Empresas, comércios, corretores de imóveis,
                    cardápios online, portfólios.
                  </li>
                  <li>Aplicativos: Meditação, horários de ônibus.</li>
                  <li>Blogs: Viagens.</li>
                  <li>
                    E-commerces: Joias, semijoias, panelas e utensílios em
                    geral.
                  </li>
                  <li>
                    Portais de Notícias e Vídeos: Sites de prefeituras, jornais
                    locais.
                  </li>
                </ul>

                <p className="mb-5">Tecnologias e Ferramentas Utilizadas:</p>

                <ul className="list-disc pl-5 mb-5">
                  <li>
                    Linguagens e Frameworks: HTML, CSS, JavaScript, TypeScript,
                    React, Gatsby, Next.js, React Native.
                  </li>
                  <li>
                    Design e Estilização: MUI, Styled Components, Tailwind CSS,
                    RN Paper.
                  </li>
                  <li>
                    Infraestrutura e Hospedagem: Firebase, DigitalOcean,
                    Netlify, Vercel.
                  </li>
                  <li>Controle de Versão: GitHub.</li>
                  <li>
                    Outros: Progressive Web Apps (PWA), WordPress, WooCommerce,
                    Vagrant, LEMP stack.
                  </li>
                </ul>

                <p className="mb-5">Principais Atividades:</p>

                <ul className="list-disc pl-5 mb-5">
                  <li>
                    Reunir-se com clientes para coletar requisitos, definir
                    escopos e cronogramas de projetos.
                  </li>
                  <li>
                    Projetar, desenvolver e implementar soluções web e mobile
                    personalizadas conforme as necessidades dos clientes.
                  </li>
                  <li>
                    Garantir a entrega de produtos de alta qualidade,
                    respeitando prazos e padrões de desempenho.
                  </li>
                  <li>
                    Manter-se atualizado com as últimas tendências e tecnologias
                    do mercado para oferecer soluções inovadoras.
                  </li>
                </ul>
              </div>
            </article>
          </section>

          <section>
            <SectionTitle text="Educação" />

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
            <SectionTitle text="Projetos" />

            <article className="mb-16">
              <p className="my-5">2023 - 2024</p>

              <div>
                <h3 className="mb-2 font-bold text-lg">App Medite em Casa</h3>

                <p className="mb-5">
                  Desenvolvi um aplicativo de meditação e sono em parceria com
                  Fabio Lima, idealizador do canal Meditar para Despertar no
                  YouTube, que conta com mais de 830 mil inscritos. O aplicativo
                  está disponível para dispositivos Android e iOS e oferece um
                  modelo de assinatura mensal e anual, além de conteúdo
                  gratuito.
                </p>

                <p className="mb-5">Aplicativo iOS e Android:</p>

                <ul className="list-disc pl-5 mb-5">
                  <li>
                    Tecnologias Utilizadas: Desenvolvido com React Native.
                  </li>
                  <li>Funcionalidades:</li>
                  <ul className="list-disc pl-5 mb-5">
                    <li>
                      Meditações, músicas e vídeos organizados por categorias.
                    </li>
                    <li>Meditação do dia com agendamento.</li>
                    <li>
                      Exercícios de respiração feitos com React Native
                      Reanimated.
                    </li>
                    <li>
                      Autenticação social (Facebook, Google, Apple) e por e-mail
                      e senha.
                    </li>
                    <li>Gestão de assinaturas de pagamento com RevenueCat.</li>
                  </ul>
                </ul>

                <ul className="list-disc pl-5 mb-5">
                  <li>Painel de Gerenciamento:</li>
                  <ul className="list-disc pl-5 mb-5">
                    <li>
                      Desenvolvido com TypeScript, Next.js, Material UI,
                      Firebase e React Hook Form.
                    </li>
                    <li>Facilita a administração de conteúdos e usuários.</li>
                  </ul>
                </ul>

                <p className="mb-5">Versão Web:</p>

                <ul className="list-disc pl-5 mb-5">
                  <li>Tecnologias Utilizadas: Desenvolvido com Next.js.</li>
                  <li>Integrações:</li>
                  <ul className="list-disc pl-5 mb-5">
                    <li>
                      Pagamentos processados através da plataforma Stripe.
                    </li>
                    <li>
                      Integração com RevenueCat via webhooks para comunicação
                      sobre novas assinaturas e liberação de acesso premium no
                      aplicativo.
                    </li>
                  </ul>
                </ul>

                <p className="mb-5">Destaques do Projeto:</p>

                <ul className="list-disc pl-5 mb-5">
                  <li>
                    Experiência completa no desenvolvimento e publicação de
                    aplicativos na App Store Connect e Google Play.
                  </li>
                  <li>
                    Integração eficiente entre versões mobile e web, garantindo
                    uma experiência coesa para os usuários.
                  </li>
                  <li>
                    Modelo de negócio híbrido, oferecendo conteúdo gratuito e
                    premium por meio de assinaturas.
                  </li>
                </ul>

                <p className="mb-5">Resultado:</p>
                <p className="mb-5">
                  O aplicativo tem sido bem recebido pelos usuários,
                  proporcionando uma plataforma acessível e intuitiva para
                  meditação e práticas de sono, contribuindo para o bem-estar e
                  qualidade de vida dos seus utilizadores.
                </p>

                <p className="mb-5">
                  <strong>Skills:</strong> React Native · React.js · TypeScript
                  · Firebase · Next.js · Stripe · React Hook Form · React Native
                  Paper · Tailwind CSS
                </p>
              </div>
            </article>

            <article className="mb-16">
              <p className="my-5">2015</p>

              <div>
                <h3 className="mb-2 font-bold text-lg">
                  App Ônibus Iracemápolis
                </h3>

                <p className="mb-5">
                  Aplicativo para usuários do transporte público de
                  Iracemápolis/SP.
                </p>

                <ul className="list-disc pl-5 mb-5">
                  <li>
                    Desenvolvido inicialmente com Ionic e Angular v1, atualmente
                    com React Native
                  </li>
                  <li>
                    Com mais de 2,4 mil downloads e classificação média de 4,7
                    no Google Play
                  </li>
                </ul>

                <p className="mb-5">
                  <strong>Skills:</strong> React Native
                </p>
              </div>
            </article>

            <article className="mb-16">
              <p className="my-5">2023</p>

              <div>
                <h3 className="mb-2 font-bold text-lg">App Cali Places</h3>

                <p className="mb-5">
                  Aplicativo para encontrar locais para praticar calistenia
                </p>

                <ul className="list-disc pl-5 mb-5">
                  <li>Funcionalidades</li>
                  <ul className="list-disc pl-5 mb-5">
                    <li>
                      Localização do dispositivo para exibir locais próximos
                    </li>
                    <li>
                      Adicionar novo local buscando a cidade e reposicionando o
                      marcador no mapa
                    </li>
                    <li>Login social com Google e Apple</li>
                  </ul>
                </ul>

                <p className="mb-5">
                  <strong>Skills:</strong> React Native · React Native Maps ·
                  Expo Router · Firebase · React Hook Form · NativeWind ·
                  Firebase
                </p>
              </div>
            </article>

            <article className="mb-16">
              <p className="my-5">Jun 2022 - Set 2022</p>

              <div>
                <h3 className="mb-2 font-bold text-lg">
                  Site personalizado para o corretor de imóveis Dangelo
                  Olivatto, com um painel administrativo para gerenciar os
                  imóveis. O projeto oferece uma experiência de navegação
                  intuitiva e ferramentas de gestão eficientes.
                </h3>

                <p className="mb-5">
                  Funcionalidades do Painel Administrativo:
                </p>

                <ul className="list-disc pl-5 mb-5">
                  <li>
                    Gestão de Imóveis: Permite a inserção, edição e exclusão de
                    imóveis.
                  </li>
                  <li>
                    Organização de Fotos: Funcionalidade de drag and drop para
                    reorganização da galeria de fotos dos imóveis.
                  </li>
                  <li>
                    Filtros Avançados: Filtro de imóveis por tipo, cidade,
                    bairro e busca por código.
                  </li>
                </ul>

                <p className="mb-5">Desenvolvimento Frontend:</p>

                <ul className="list-disc pl-5 mb-5">
                  <li>Tecnologias Utilizadas: Desenvolvido com Next.js.</li>
                  <li>
                    Interface do Usuário: Design responsivo e intuitivo para uma
                    melhor experiência de navegação.
                  </li>
                  <li>
                    Filtros Avançados: Filtro de imóveis por tipo, cidade,
                    bairro e busca por código.
                  </li>
                </ul>

                <p className="mb-5">Resultado:</p>
                <p className="mb-5">
                  O site tem ajudado Dangelo Olivatto a gerenciar seus imóveis
                  de maneira mais eficiente e a oferecer uma experiência de
                  busca aprimorada para seus clientes.
                </p>

                <p className="mb-5">
                  <strong>Skills:</strong> React.js · Next.js · React-DnD ·
                  React Hook Form · Cloud Firestore · Firebase Storage
                </p>
              </div>
            </article>
          </section>
        </section>
      </main>
    </div>
  );
}
