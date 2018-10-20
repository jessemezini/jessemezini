import aoe2techtree from './images/aoe2techtree.jpg';
import imgIlCardapio from './images/ilcardapio.jpg';
import imgIlCardapioPhone from './images/ilcardapio-phone.png';
import imgGazeta from './images/gazeta.jpg';
import imgGazetaPhone from './images/gazeta-phone.png';
import imgIracemapolis from './images/iracemapolis.jpg';
import imgIracemapolisPhone from './images/iracemapolis-mobile.png';
import imgOnibusIracemapolis from './images/onibus-iracemapolis.jpg';
import imgOnibusIracemapolisPhone from './images/onibus-iracemapolis-mobile.png';

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
      'Food menu website, very lightweight with offline support and add to home screen message. Theme with variants design, customized for each client. Some clients: pizzadacasairacemapolis.com.br, pastelariadogordao.com.br, pizzariaimperio.com.br.',
    projectStackInfo:
      "Progressive web app, workbox, yeoman web app, gulp, initial server configuration with nginx and SSL with let's encrypt, now using firebase hosting.",
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
      'Gazeta de Iracemápolis is the leading newspaper media company from Iracemápolis/São Paulo',
    projectStackInfo:
      'Wordpress, bootstrap, sass, vagrant, wordpress-bedrock, composer, wp-cli, lemp, ssh, sftp.',
  },
  {
    name: 'Ônibus Iracemápolis',
    isHighlightProject: false,
    mainImg: imgOnibusIracemapolis,
    mainImgAlt: 'demo of app in play store',
    mobileImg: imgOnibusIracemapolisPhone,
    mobileImgAlt: 'demo on phone',
    projectUrl:
      'https://play.google.com/store/apps/details?id=com.ionicframework.irabusao181784',
    projectInfo:
      'An app for users of public transportation in Iracemápolis / São Paulo. This application focuses on facilitating the use of the public transport service allowing you to easily check the timetables of buses without the need for Internet connection.',
    projectStackInfo:
      'Initially built with Ionic and Angular v1, now uses React Native.',
  },
  {
    name: 'Iracemápolis City Hall',
    isHighlightProject: false,
    mainImg: imgIracemapolis,
    mainImgAlt: 'Iracemápolis City Hall site',
    mobileImg: imgIracemapolisPhone,
    mobileImgAlt: 'Iracemápolis City Hall site mobile version',
    projectUrl: 'http://iracemapolis.sp.gov.br',
    projectInfo:
      'Iracemápolis is a municipality in the state of São Paulo in Brazil.',
    projectStackInfo: 'Wordpress, bootstrap css.',
  },
];

export default data;
