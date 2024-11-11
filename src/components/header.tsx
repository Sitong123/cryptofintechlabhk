import Logo from '@/assets/logo.png';

const NAVIGATORS = [
  'About Us',
  'Projects',
  'Supporters',
  'News & Events',
  'Teams',
  'Contact',
];

function Header() {
  return (
    <div className="flex justify-between pl-24 pr-10 py-2">
      <img src={Logo} width={164} alt="" />
      <ul className="flex rounded-2xl bg-[#ECECEC] w-[790px] h-[56px] justify-around items-center">
        {NAVIGATORS.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Header;
