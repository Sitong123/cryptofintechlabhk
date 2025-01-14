import Background from '@/assets/background.mp4';
import './index.less';
import { FaArrowRight } from 'react-icons/fa6';

import { useNavigate } from 'react-router-dom';

function Hero() {
  const goto = useNavigate();
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline>
        <source src={Background} type="video/mp4" />
      </video>
      <div className="we-are-hiring">
        <h3>New! We are hiring!</h3>
        <button
          onClick={() => {
            goto('/careers');
          }}
        >
          <FaArrowRight /> Apply Now!
        </button>
      </div>
      <section>
        <p className="pioneer">A pioneer of Web3 in Hong Kong</p>
        <h1 className="name">Crypto-Fintech Lab @HKUST</h1>
        <div>
          <button
            className="twitter-btn"
            onClick={() => window.open('https://x.com/CryptoHKUST')}
          >
            Twitter
          </button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
