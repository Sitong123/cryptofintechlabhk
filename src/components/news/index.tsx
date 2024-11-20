import { NEWS_LIST } from '@/lib/constant';
import './index.less';
import { Element } from 'react-scroll';

function News() {
  return (
    <div className="news-events">
      <div data-aos="fade-down">
        <h2 className="news-events-title">News & Events</h2>
        <p className="news-events-subtitle">Follow our news and blog</p>
      </div>
      <section>
        <div data-aos="fade-right" className="activities">
          <h3>Activities</h3>
          <div></div>
          <p>
            Web3.0 Carnival is a series of industry dialogues in the format of
            panel discussions with leading entrepreneurs in the burgeoning Web3
            sectors and top-notch professionals from leading enterprises
          </p>
        </div>

        <div data-aos="fade-left" className="news">
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
      </section>
    </div>
  );
}

export default News;
