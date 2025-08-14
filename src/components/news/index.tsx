import { NEWS_LIST } from '@/lib/constant';
import { EVENTS_LIST } from '@/lib/constant';

import './index.less';

function News() {
  return (
    <div className="news-events">
      <div data-aos="fade-down">
        <h2 className="news-events-title">News & Events</h2>
        <p className="news-events-subtitle">Follow our news and blog</p>
      </div>
      <div data-aos="fade-up">
        <section>
          <div className="news">
            {NEWS_LIST.map((item, index) => {
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
          <div className="activities-container">
            <div className="activities">
              <h3>Activities</h3>
              <div></div>
              <p>
                Web3.0 Carnival is a series of industry dialogues in the format of
                panel discussions with leading entrepreneurs in the burgeoning
                Web3 sectors and top-notch professionals from leading enterprises
              </p>
            </div>
            <div className="activities">
              <h3>
                Tencent's Lightspeed Studios & Hong Kong University of Science and
                Technology Technology Collaboration Project Launch Meeting
              </h3>
              <div></div>
              <p>
                This event marks the initiation of a collaborative project between
                Tencent's Lightspeed Studios and the Hong Kong University of
                Science and Technology (HKUST). The primary goal of this
                cooperation is to drive innovation and enhance research
                capabilities in advanced technologies, particularly in gaming and
                digital media. The meeting aims to outline strategic objectives
                and establish frameworks for collaboration, fostering a
                synergistic relationship that promotes cutting-edge developments
                in these fields.
              </p>
            </div>
          </div>
          <div className="events-images-container">
            {EVENTS_LIST.map((item, index) => {
                return (
                  <div className="events-images" key={index}>
                    <img src={item.img} alt="" /> 
                  </div>
                );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default News;
