import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './index.less';
import { Element } from 'react-scroll';
import { PROJECT_LIST } from '@/lib/constant';

const chunkArray = (
  array: Array<{
    title: string;
    text: string;
  }>,
  size: number,
) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

function Project() {
  const groupedProjects = chunkArray(PROJECT_LIST, 6);
  return (
    <Element name="Projects">
      <div className="projects">
        <div data-aos="fade-down">
          <h2 className="project-title">Projects</h2>
        </div>

        <div data-aos="fade-up">
          <Swiper
            modules={[Pagination]}
            loop={true}
            threshold={0.1}
            pagination={{
              clickable: true,
            }}
            className="project-swiper"
          >
            {groupedProjects.map((group, index) => (
              <SwiperSlide key={index}>
                <section className="grid-container">
                  {group.map((item, idx) => (
                    <div className="project-content" key={idx}>
                      <h3>{item.title}</h3>
                      <div></div>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </section>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Element>
  );
}

export default Project;
