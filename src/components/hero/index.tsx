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
          <p>
            The Crypto-Fintech Lab at HKUST, backed by Foga Technology, unites
            members and advisors to pioneer cutting-edge financial technology
            research and applications. Situated in the tech hub of Hong Kong, we
            blend academia and industry strengths to explore innovative
            solutions for the benefit of Hong Kong, Greater China, and beyond.
          </p>
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
