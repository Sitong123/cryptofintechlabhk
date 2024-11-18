import './index.less';

import { ABOUT_LIST } from '@/lib/constant';

import { Element } from 'react-scroll';

function About() {
  return (
    <Element name="About Us">
      <div className="abouts">
        <div data-aos="fade-down">
          <section className="about-title-wrap">
            <h2 className="about-title">About Us</h2>
            <div></div>
            <p>
              In the last decade, financial technology has surged, with
              blockchain leading the transformation across industries. This wave
              has birthed groundbreaking technologies, numerous startups, and
              innovations in banking, IoT, and supply chains. We are in a golden
              age of fintech, blending data science, blockchain, and AI.
            </p>
          </section>
        </div>

        <div data-aos="fade-up">
          <section className="about-content-wrap">
            {ABOUT_LIST.map((item, index) => {
              return (
                <div className="about-content" key={index}>
                  <h3>{item.title}</h3>
                  <div></div>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </Element>
  );
}

export default About;
