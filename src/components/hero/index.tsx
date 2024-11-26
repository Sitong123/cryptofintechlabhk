import Background from '@/assets/background.mp4';
import './index.less';

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline>
        <source src={Background} type="video/mp4" />
      </video>
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
