import aoe2techtree from './images/aoe2techtree.jpg';
import imgIlCardapio from './images/ilcardapio.jpg';
import imgIlCardapioPhone from './images/ilcardapio-phone.png';
import imgGazeta from './images/gazeta.jpg';
import imgGazetaPhone from './images/gazeta-phone.png';

const data = [
  {
    name: 'AoE 2 - Tech Tree',
    isHighlightProject: true,
    mainImg: aoe2techtree,
    mainImgAlt: 'Age of Empires 2 - Tech Tree',
    projectUrl: 'https://aoe2techtree.com',
    projectInfo:
      "Age of Empires II is a real-time strategy video game. The app was developed to help people that don't have the game installed and is watching a live stream, and want to check the civilizations bonuses.",
    projectStackInfo:
      'ReactJS, flow, styled-components, code-splitting, css flexbox, sprite image, border-image, progressive web app, continuous integration with Bitbucket and Netlify.',
  },
  {
    name: 'Progressive Web Apps',
    isHighlightProject: false,
    mainImg: imgIlCardapio,
    mainImgAlt: 'Il Cardápio demos',
    mobileImg: imgIlCardapioPhone,
    mobileImgAlt: 'Il Cardápio demo phone version',
    projectUrl: 'https://pizzadacasairacemapolis.com.br',
    projectInfo:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, possimus assumenda iste unde ipsum, dolorem quas veniam excepturi voluptates, quos provident rerum mollitia repudiandae non quae tempora odit quaerat doloribus!',
    projectStackInfo:
      "Progressive web app with workbox, yeoman web app, , initial server configuration with nginx and SSL with let's encrypt, now using firebase hosting.",
  },
  {
    name: 'Gazeta de Iracemápolis',
    isHighlightProject: false,
    mainImg: imgGazeta,
    mainImgAlt: 'Gazeta de Iracemápolis site',
    mobileImg: imgGazetaPhone,
    mobileImgAlt: 'Gazeta de Iracemápolis site mobile version',
    projectUrl: 'http://gazetadeiracemapolis.com.br',
    projectInfo:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, possimus assumenda iste unde ipsum, dolorem quas veniam excepturi voluptates, quos provident rerum mollitia repudiandae non quae tempora odit quaerat doloribus!',
    projectStackInfo:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, quisquam qui molestiae adipisci culpa doloribus commodi. Velit provident quas cupiditate vero accusamus iure. Debitis, ea nulla molestias eveniet quas optio!',
  },
];

export default data;
