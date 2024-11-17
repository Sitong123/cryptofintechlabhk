import Logo from '@/assets/logo.png';

import { NAVIGATORS } from '@/lib/constant';

function Header() {
  return (
    <div className="flex justify-between px-10 py-2">
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
