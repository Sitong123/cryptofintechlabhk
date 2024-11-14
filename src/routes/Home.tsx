import '@/styles/homepage.less';
import Background from '@/assets/background.mp4';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Blockin from '@/assets/investors/blockin.png';
import Logo from '@/assets/logo.png';
import Forgame from '@/assets/sponsors/forgame.png';
import Twitter from '@/assets/news/twitter.png';

import Team1 from '@/assets/teams/team1.png';
import Team2 from '@/assets/teams/team2.png';
import Team3 from '@/assets/teams/team3.png';

const Abouts = [
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

const Projects = [
  {
    title: 'Degis',
    text: 'A decentralized insurance platform. Provide better insurance products as well as innovative solutions via blockchain technology.',
  },
  {
    title: 'Furion',
    text: "Provide price reference for NFTs from their historical performances. Concentrate NFTs' liquidity based on their prices.",
  },
  {
    title: 'Prestare',
    text: 'An Under-Collateralized Borrowing Protocol Without any permission on assets Without using off-chain information.',
  },
  {
    title: 'Talentre',
    text: 'Talentre is a Web3 career platform, providing Web3 career training and job search services.',
  },
  {
    title: 'Ovisor',
    text: 'A decentralized investment that breaks investment barriers using advanced analytics and algorithms.',
  },
  {
    title: 'KOIHub',
    text: 'KOIHub is a project sitting right at the gate from web2 to web3. Users can easily enter the world of Web3 by scanning QR codes and getting free NFTs.',
  },
  {
    title: 'KOIHub',
    text: 'KOIHub is a project sitting right at the gate from web2 to web3. Users can easily enter the world of Web3 by scanning QR codes and getting free NFTs.',
  },
  {
    title: 'KOIHub',
    text: 'KOIHub is a project sitting right at the gate from web2 to web3. Users can easily enter the world of Web3 by scanning QR codes and getting free NFTs.',
  },
  {
    title: 'KOIHub',
    text: 'KOIHub is a project sitting right at the gate from web2 to web3. Users can easily enter the world of Web3 by scanning QR codes and getting free NFTs.',
  },
];

const Investors = [Blockin, Blockin, Logo, Blockin, Logo, Blockin, Blockin];

const Sponsors = [
  Forgame,
  Forgame,
  Forgame,
  Forgame,
  Forgame,
  Forgame,
  Forgame,
  Forgame,
];

const news = [
  {
    img: Logo,
    text: 'The Crypto-Fintech Laboratory of HKUST and BTC.com announced a strategic collaboration to leverage the complementary advantages of its research and academic strengths.',
  },
  {
    img: Twitter,
    text: 'HKUST Crypto-Fintech Lab isHKUST Crypto-Fintech Lab is an organization based in HKUST and aims to provides solutions to current financial problem. With over 30 scholars and students, the lab focuses on cryptoasset trading, DeFi Projects and blockchain education. an organization based in HKUST and aims to provides solutions to current financial problem. With over 30 scholars and students, the lab focuses on cryptoasset trading, DeFi Projects and blockchain education.',
  },
];

const Teams = [
  {
    name: 'WANG Yang',
    img: Team1,
    intro:
      'Vice President for Institutional Advancement.  Founder of HKUST CryptoFintech Lab.  Associate Director of HKUST Big Data Institute.  Director of HKUST Big Data and BioIntelligence Lab.',
  },

  {
    name: 'CHEN Kani',
    img: Team2,
    intro:
      'Department of Mathematics(Director). Fellow of Institute of Mathematical Statistics. Director of Crypto-Fintech Lab and MSc Financial Mathematics.',
  },

  {
    name: 'ZHENG Jiheng',
    img: Team3,
    intro:
      'Department of Industrial Engineering and Decision Analytics.  Associate director of HKUST Crypto-Fintech Lab.',
  },
];

const chunkArray = (
  array: Array<{
    title: string;
    text: string;
  }>,
  size: number,
) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

function Home() {
  const groupedProjects = chunkArray(Projects, 6);

  const settings = {
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  };

  return (
    <div className="homo-page">
      {/* hero */}
      <div className="hero">
        <video autoPlay loop muted playsInline>
          <source src={Background} type="video/mp4" />
        </video>
        <section>
          <p className="pioneer">A pioneer of Web3 in Hong Kong</p>

          <h1 className="name">Crypto-Fintech Lab @HKUST</h1>
          <div>
            <p>
              The Crypto-Fintech Lab at HKUST, backed by Foga Technology, unites
              members and advisors to pioneer cutting-edge financial technology
              research and applications. Situated in the tech hub of Hong Kong,
              we blend academia and industry strengths to explore innovative
              solutions for the benefit of Hong Kong, Greater China, and beyond.
            </p>
            <button>Twitter</button>
          </div>
        </section>
      </div>

      {/* about */}
      <div className="abouts">
        <section>
          <h2>About Us</h2>
          <div></div>
          <p>
            In the last decade, financial technology has surged, with blockchain
            leading the transformation across industries. This wave has birthed
            groundbreaking technologies, numerous startups, and innovations in
            banking, IoT, and supply chains. We are in a golden age of fintech,
            blending data science, blockchain, and AI.
          </p>
        </section>

        <section>
          {Abouts.map((item) => {
            return (
              <div className="about-content">
                <h3>{item.title}</h3>
                <div></div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </section>
      </div>

      {/* projects */}
      <div className="projects">
        <h2>Projects</h2>

        <Swiper
          modules={[Pagination]}
          loop={true}
          threshold={0.1}
          pagination={{
            clickable: true,
          }}
          className="project-swiper"
        >
          {groupedProjects.map((group, index) => (
            <SwiperSlide key={index}>
              <section className="project-swiper-slide">
                {group.map((item, idx) => (
                  <div className="project-content" key={idx}>
                    <h3>{item.title}</h3>
                    <div></div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* invsetor & sponsor */}
      <div className="investors-sponsors">
        <div>
          <h2>Investors</h2>
          <div className="investor-swiper">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              slidesPerView={5}
              spaceBetween={30}
              loop={true}
              threshold={0.1}
            >
              {Investors.map((Img, index) => (
                <SwiperSlide className="content-item" key={index}>
                  <img src={Img} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
        <div className="mt-16">
          <h2>Sponsors & Partners</h2>
          <div className="sponsor-swiper">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              slidesPerView={5}
              spaceBetween={30}
              loop={true}
              threshold={0.1}
            >
              {Sponsors.map((Img, index) => (
                <SwiperSlide className="content-item" key={index}>
                  <img src={Img} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>

      {/* news */}
      <div className="news-events">
        <h2>News & Events</h2>
        <p className="">Follow our news and blog</p>

        <section>
          <div className="activities">
            <h3>Activities</h3>
            <div></div>
            <p>
              Web3.0 Carnival is a series of industry dialogues in the format of
              panel discussions with leading entrepreneurs in the burgeoning
              Web3 sectors and top-notch professionals from leading enterprises
            </p>
          </div>

          <div className="news">
            {news.map((item, index) => {
              return (
                <div className="news-item" key={index}>
                  <div className="img-wrap">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="news-text-wrap">
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* teams */}
      <div className="teams">
        <h2>Teams</h2>

        <section>
          {Teams.map((item, index) => {
            return (
              <div className="team-member-card" key={index}>
                <div className="img-wrap">
                  <img src={item.img} alt="" />
                </div>
                <div className="team-member-info-wrap">
                  <p className="name">{item.name}</p>
                  <p className="intro">{item.intro}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>

      {/* contact */}
      <div className="contact">
        <h2>Contact</h2>

        <section>
          <div className="lab-info"></div>
        </section>
      </div>
    </div>
  );
}

export default Home;
