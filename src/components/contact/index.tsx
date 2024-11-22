import './index.less';
import { CONTACT_LIST } from '@/lib/constant';

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-title">Contact</h2>
      <div data-aos="zoom-in">
        <section>
          <div className="lab-info">
            {CONTACT_LIST.map((item, index) => {
              return (
                <div className="contact-item" key={index}>
                  <div className="icon-wrap">
                    <item.icon
                      className="item-icon"
                      onClick={() =>
                        item.link && window.open(item.link, '_blank')
                      }
                    />
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.4107865758338!2d114.26162207504596!3d22.33811294152429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404046aa166ac65%3A0x6225ed82511af284!2sHong%20Kong%20University%20of%20Science%20and%20Technology%20Students&#39;%20Union!5e0!3m2!1sen!2ssg!4v1732202387290!5m2!1sen!2ssg"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
