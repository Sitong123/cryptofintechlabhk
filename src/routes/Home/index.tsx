import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Hero from '@/components/hero';
import About from '@/components/about';
import Project from '@/components/project';
import InvestorSponser from '@/components/investor-sponser';
import News from '@/components/news';
import Teams from '@/components/teams';
import Contact from '@/components/contact';

import './index.less';

function Home() {
  return (
    <div className="homo-page">
      <Hero />

      <About />

      <Project />

      <InvestorSponser />

      <News />

      <Teams />

      <Contact />
    </div>
  );
}

export default Home;
