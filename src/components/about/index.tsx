import './index.less';

import { ABOUT_LIST } from '@/lib/constant';

function About() {
  return (
    <div className="abouts">
      <div data-aos="fade-down">
        <section className="about-title-wrap">
          <h2 className="about-title">About Us</h2>
          <div></div>
          <p>
            The Crypto-Fintech Lab at HKUST, backed by Foga Technology, unites
            members and advisors to pioneer cutting-edge financial technology
            research and applications. Situated in the tech hub of Hong Kong, we
            blend academia and industry strengths to explore innovative
            solutions for the benefit of Hong Kong, Greater China, and beyond.
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
  );
}

export default About;
