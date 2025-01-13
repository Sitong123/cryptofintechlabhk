import Logo from '@/assets/logo.png';
import { Link } from 'react-scroll';
import './index.less';

const positionList = [
  {
    title: 'For Al Positions',
    responsibilities: [
      'Assist in the creation and development of Aeducationalmaterials that are aimed atcultivating skills in large language models(LLM) and artificial intelligence',
      'Work with large language models (LLMs) tocreate and optimize Al-driven applicationsand collaborate with team members toexplore and implement Al agents in variousprojects',
    ],
    qualifications: [
      'Familiarity with large language models(LLMs)and experience in fine-tuning Al applications',
      'Basic skills in Retrieval-AugmentedGeneration(RAG)',
      'Experience with Al agents is a plus',
    ],
  },
  {
    title: 'For Web3 Positions',
    responsibilities: [
      'Participate in the desian and developmentof blockchain-based applications',
      'Utilize programming skills in Solidity, Rust,and other relevant languages to contributeto Web3 proiects',
      'Stayupdated on blockchain trends and.technologies to support project initiatives',
    ],
    qualifications: [
      'Familiarity with blockchain technology andconcepts',
      'Programming skills in Solidity, Rust, orsimilar langyages',
      'Interest in exploring decentralized.applications and smart contracts',
    ],
  },
];

const offerList = [
  'Hands-on experience in cutting-edge AI and Web3 projects',
  'Opportunity to work alongside industry experts and researchers',
  'Flexible working hours to accommodate your academic schedule',
  'Competitive compensation for your contributions',
];

export default function Careers() {
  return (
    <div className="careers-wrapper">
      <div className="careers-header">
        <a href="/">
          <img src={Logo} width={164} alt="Logo" />
        </a>
      </div>
      <div className="careers-container">
        <div className="careers-content">
          <h1 className="careers-title">We are hiring!</h1>
          <div className="open-positions">
            <h2>Open Positions:</h2>
            <div className="divider"></div>
            <ul>
              <li>Student Helper(HKUST Student)</li>
              <li>Research Assistant(NON-HKUST Student)</li>
            </ul>
          </div>

          <div className="position-summary">
            <h2>Position Summary:</h2>
            <p>
              We are looking for enthusiastic and talented students to join and
              contribute to projects in Al and Web3This is an excellent
              opportunity for both HKUST students and non-HKUST students to gain
              hands-onenvironment of Al and Web3.experience in the exciting,
              fast-paced and innovative
            </p>
          </div>

          <div className="position-description-wrapper">
            <div className="position-description">
              {positionList.map((position) => (
                <div className="position-item">
                  <h2 className="position-title">{position.title}</h2>
                  <div className="position-item-content">
                    <h3>Key Responsibilities</h3>
                    <ul>
                      {position.responsibilities.map((responsibility) => (
                        <li>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="position-item-content">
                    <h3>Basic Qualifications</h3>
                    <ul>
                      {position.qualifications.map((qualification) => (
                        <li>{qualification}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="divider"></div>
            </div>
          </div>

          <div className="what-we-offer">
            <h2>What we offer</h2>
            <ul>
              {offerList.map((offer) => (
                <li>{offer}</li>
              ))}
            </ul>
          </div>

          <div className="type">
            <h2>Type:</h2>
            <p>Full-time / Part-time / Temporary</p>
          </div>

          <div className="location">
            <h2>Location:</h2>
            <p>
              Hong Kong University of Science and Technology (HKUST) / Remote
            </p>
          </div>

          <div className="how-to-apply">
            <h2>SEND YOUR CV & COVER LETTER TO:</h2>
            <p>
              <a href="mailto:makchen@ust.hk">makchen@ust.hk</a>
            </p>
            <p>With the subject line "Al and Web3 Work Opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
