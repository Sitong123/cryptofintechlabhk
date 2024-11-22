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

import { Element } from 'react-scroll';

import './index.less';
import Footer from '@/components/footer';

function Home() {
  return (
    <div className="relative top-[72px]">
      <Element name="Hero">
        <Hero />
      </Element>

      <Element name="About Us">
        <About />
      </Element>

      <Element name="Projects">
        <Project />
      </Element>

      <Element name="Supporters">
        <InvestorSponser />
      </Element>

      <Element name="News & Events">
        <News />
      </Element>

      <Element name="Teams">
        <Teams />
      </Element>

      <Element name="Contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default Home;
