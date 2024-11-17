import Temp from '@/assets/temp.png';
import './index.less';
import { CONTACT_LIST } from '@/lib/constant';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>

      <section>
        <div className="lab-info">
          {CONTACT_LIST.map((item, index) => {
            return (
              <div className="contact-item" key={index}>
                <div className="icon-wrap">
                  <item.icon className="item-icon" />
                </div>
                <div>
                  <p className="name">{item.name}</p>
                  <p className="text">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="google-map">
          <img src={Temp} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Contact;
