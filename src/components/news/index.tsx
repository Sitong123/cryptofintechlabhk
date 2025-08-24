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
          <div className="activities1">
              <h3>Activities</h3>
              <div></div>
              <p>
                Web3.0 Carnival is a series of industry dialogues in the format of
                panel discussions with leading entrepreneurs in the burgeoning
                Web3 sectors and top-notch professionals from leading enterprises
              </p>
            </div>
            <div className="activities2">
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
            <div className="events-images">
              {EVENTS_LIST.map((item,idx)=>(
                 <img src={item.img} alt="" key={idx}/>
              ))}        
            </div>
          <div className="activities3">
              <h3>
                HKUST launches "Aivilization" AI social simulation platform
              </h3>
              <div></div>
              <a href="https://www.hkcd.com/hkcdweb/content/2025/08/19/content_8709701.html" target="_blank" rel="noopener noreferrer">
              香港商報網– 科大推全球首個大型人工智能教育沙盒遊戲 提升AI素養 推展公眾科研
              </a>
              <div></div>
              <a href="https://www.dotdotnews.com/a/202508/19/AP68a4029ee4b08d2905336a8d.html" target="_blank" rel="noopener noreferrer">
              點新聞– 科大推「智能體世界」AI社會模擬平台 冀引領跨領域AI教育
              </a>
              <div></div>
               <a href="https://www.miragenews.com/hkust-debuts-worlds-largest-ai-education-1517413/" target="_blank" rel="noopener noreferrer">
              Mirage News HKUST Debuts World's Largest AI Education Sandbox Game
              </a>
              <div className="events-images">
                <img src="" alt="">
                </img>
              </div>
            </div>
        </section>
      </div>
    </div>
  );
}

export default News;
