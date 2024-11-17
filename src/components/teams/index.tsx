import { TEAM_LIST } from '@/lib/constant';
import './index.less';

function Teams() {
  return (
    <div className="teams">
      <h2 className="teams-title">Teams</h2>

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
  );
}

export default Teams;
