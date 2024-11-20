import { TEAM_LIST } from '@/lib/constant';
import { Element } from 'react-scroll';
import './index.less';

function Teams() {
  return (
    <div className="teams">
      <div data-aos="fade-down">
        <h2 className="teams-title">Teams</h2>
      </div>

      <div data-aos="fade-up">
        <section>
          {TEAM_LIST.map((item, index) => {
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
    </div>
  );
}

export default Teams;
