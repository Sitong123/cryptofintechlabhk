import '@/styles/homepage.less';
import Background from '@/assets/background.mp4';

function Home() {
  return (
    <div className="homo-page">
      <div className="hero">
        <video autoPlay loop muted playsInline>
          <source src={Background} type="video/mp4" />
        </video>
        <section>
          <h2>A pioneer of Web3 in Hong Kong</h2>
          <h1>Crypto-Fintech Lab @HKUST</h1>
          <div>
            <p>
              The Crypto-Fintech Lab at HKUST, backed by Foga Technology, unites
              members and advisors to pioneer cutting-edge financial technology
              research and applications. Situated in the tech hub of Hong Kong,
              we blend academia and industry strengths to explore innovative
              solutions for the benefit of Hong Kong, Greater China, and beyond.
            </p>
            <button>Twitter</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
