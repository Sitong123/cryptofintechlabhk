import './index.less';

import { ABOUT_LIST } from '@/lib/constant';

function About() {
  return (
    <div className="abouts">
      <section>
        <h2 className="about-title">About Us</h2>
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
        {ABOUT_LIST.map((item) => {
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
  );
}

export default About;
