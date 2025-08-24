import Logo from '@/assets/logo.png';
import Twitter from '@/assets/news/twitter.png';

// investors
import Blizzard from '@/assets/investors/Blizzard.jpg';
import AvatarVentures from '@/assets/investors/AvatarVentures.jpg';
import Gbv from '@/assets/investors/Gbv.jpg';
import Gerstenbrot from '@/assets/investors/Gerstenbrot.jpg';
import Rarestone from '@/assets/investors/Rarestone.jpg';
import Magnus from '@/assets/investors/Magnus.jpg';
import Em3dao from '@/assets/investors/Em3dao.jpg';
import BlackPine from '@/assets/investors/BlackPine.jpg';
import Blocks from '@/assets/investors/Blocks.jpg';
import Chiron from '@/assets/investors/ChironPartners.jpg';
import Winkrypto from '@/assets/investors/Winkrypto.jpg';
import Avalaunch from '@/assets/investors/Avalaunch.jpg';
import Blockin from '@/assets/investors/Blockin.jpg';
import HelixFund from '@/assets/investors/HelixFund.png';
import CMTDigital from '@/assets/investors/CMTDigital.jpg';
import Evernew from '@/assets/investors/Evernew.jpg';
import Lolcapital from '@/assets/investors/Lolcapital.webp';
import Ward from '@/assets/investors/Ward.png';
import C2ventures from '@/assets/investors/C2ventures.webp';
import Ariagroup from '@/assets/investors/Ariagroup.webp';
import Stealthcapital from '@/assets/investors/Stealthcapital.jpg';
import BingX from '@/assets/investors/BingX.jpg';
import Fenbushi from '@/assets/investors/Fenbushi.jpg';
import DoraHacks from '@/assets/investors/DoraHacks.jpg';
import Nvc from '@/assets/investors/Nvc.png';
import Unblock from '@/assets/investors/Unblock.png';
import Nebulae from '@/assets/investors/Nebulae.png';

// sponsors
import Forgame from '@/assets/sponsors/Forgame.png';
import VeChain from '@/assets/sponsors/VeChain.png';

// partners
import Btc from '@/assets/partners/btc.png';
import Hashkey from '@/assets/partners/hashkey.png';
import Sandbox from '@/assets/partners/sandbox.png';

// events
import Events1 from '@/assets/events/Tencent 1.jpg';
import Events2 from '@/assets/events/Tencent 2.jpg';

// teams
import ProfWang from '@/assets/teams/ProfWang.jpeg';
import ProfChen from '@/assets/teams/ProfChen.jpg';
import ProfZhang from '@/assets/teams/ProfZheng.jpeg';

// icons-contact
import { FaRegCompass, FaXTwitter } from 'react-icons/fa6';
import { LuMail } from 'react-icons/lu';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { IoPersonOutline } from 'react-icons/io5';

export const NAVIGATORS = [
  'About Us',
  'Projects',
  'Supporters',
  'News & Events',
  'Teams',
  'Members',
  'Contact',
];

export const ABOUT_LIST = [
  {
    title: 'Education',
    text: 'We are committed to promoting the concept of Web3 to the whole society, while cultivating future-oriented Web3 talents, and aiming to become the West Point Military Academy of Web3',
  },
  {
    title: 'Research',
    text: 'We focus on the underlying technologies and applications of Web3, including cryptography, blockchain, smart contracts, token economics, DeFi, Metaverse, etc.',
  },
  {
    title: 'Practice',
    text: 'We are not an ivory tower. In addition to the research on the most advanced technologies, we also apply them to many projects and use these projects to promote the development of Web3',
  },
];

export const PROJECT_LIST = [
  {
    title: 'Bauhinia AI',
    text: 'A dynamic and fast-growing startup revolutionizing industries with innovative AI applications, poised for scale-up with a bold vision for the future.',
    link: "https://bauhiniaai.com",
    linktext: "Learn more from https://bauhiniaai.com",
  },
  {
    title: 'Bauhinia RWA',
    text: 'A pioneering new company leveraging cutting-edge Web3 technology and specializing in the tokenization of real-world assets (RWA), prepared to drive economic growth and societal impact on a global scale.',
    link: "https://bauhinia-rwa.com",
    linktext: "Learn more from https://bauhinia-rwa.com",
  
  },
  {
    title: 'Bauhinia Pulse',
    text: 'An innovative simulated ecosystem leveraging digital replicas of human participants to deliver actionable insights, empowering organizations and individuals to make data-driven decisions in complex scenarios.',
    link: "https://bauhiniapulse.com",
    linktext:"Learn more from https://bauhiniapulse.com",
  
  },
];

export const INVESTOR_LIST = [
  Blizzard,
  AvatarVentures,
  Gbv,
  Gerstenbrot,
  Rarestone,
  Magnus,
  Em3dao,
  BlackPine,
  Blocks,
  Chiron,
  Winkrypto,
  Avalaunch,
  Blockin,
  HelixFund,
  CMTDigital,
  Evernew,
  Lolcapital,
  Ward,
  C2ventures,
  Ariagroup,
  Stealthcapital,
  BingX,
  Fenbushi,
  DoraHacks,
  Nvc,
  Unblock,
  Nebulae,
];

export const SPONSOR_PARTNER_LIST = [Forgame, VeChain, Hashkey, Sandbox, Btc];

export const NEWS_LIST = [
  {
    img: Logo,
    text: 'The Crypto-Fintech Laboratory of HKUST and BTC.com announced a strategic collaboration to leverage the complementary advantages of its research and academic strengths.',
  },
  {
    img: Twitter,
    text: 'HKUST Crypto-Fintech Lab isHKUST Crypto-Fintech Lab is an organization based in HKUST and aims to provides solutions to current financial problem. With over 30 scholars and students, the lab focuses on cryptoasset trading, DeFi Projects and blockchain education. an organization based in HKUST and aims to provides solutions to current financial problem. With over 30 scholars and students, the lab focuses on cryptoasset trading, DeFi Projects and blockchain education.',
  },
];

export const EVENTS_LIST=[
{
  img: Events1,
},
{
  img: Events2,
},
];


export const TEAM_LIST = [
  {
    name: 'WANG Yang',
    img: ProfWang,
    intro:
      'Vice President for Institutional Advancement.  Founder of HKUST CryptoFintech Lab.  Associate Director of HKUST Big Data Institute.  Director of HKUST Big Data and BioIntelligence Lab.',
  },

  {
    name: 'CHEN Kani',
    img: ProfChen,
    intro:
      'Department of Mathematics(Director). Fellow of Institute of Mathematical Statistics. Director of Crypto-Fintech Lab and MSc Financial Mathematics.',
  },

  {
    name: 'ZHANG Jiheng',
    img: ProfZhang,
    intro:
      'Department of Industrial Engineering and Decision Analytics.  Associate director of HKUST Crypto-Fintech Lab.',
  },
];

export const CONTACT_LIST = [
  {
    icon: FaRegCompass,
    name: 'Location',
    text: 'Department of Mathematics, HKUST',
  },
  {
    icon: IoPersonOutline,
    name: 'Contact',
    text: 'Kani CHEN',
  },
  {
    icon: LuMail,
    name: 'Email',
    text: 'makchen@ust.hk',
  },
  {
    icon: MdOutlinePhoneAndroid,
    name: 'Call',
    text: '+852 2358 7425',
  },
  {
    icon: FaXTwitter,
    name: 'Twitter',
    text: 'https://x.com/CryptoHKUST',
    link: 'https://x.com/CryptoHKUST',
  },
];

// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
