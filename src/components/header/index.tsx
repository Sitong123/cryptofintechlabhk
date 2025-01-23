import Logo from '@/assets/logo.png';

import { NAVIGATORS } from '@/lib/constant';
import Drawer from '@mui/joy/Drawer';

import { LuAlignJustify } from 'react-icons/lu';

import { useEffect, useState } from 'react';

import { Link } from 'react-scroll';

import './index.less';

function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="header">
      <Link
        key={'Hero'}
        to={'Hero'}
        smooth={true}
        duration={500}
        offset={-72}
        className="navigation-link"
        activeClass="active-link"
        spy={true}
      >
        <img src={Logo} width={164} alt="Logo" />
      </Link>

      {width >= 900 ? (
        <ul className="navigation">
          {NAVIGATORS.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-72}
              className="navigation-link"
              activeClass="active-link"
              spy={true}
            >
              {item}
            </Link>
          ))}
          <a href="/#/careers" className="navigation-link">
            Careers
          </a>
        </ul>
      ) : (
        <button onClick={toggleDrawer(true)}>
          <LuAlignJustify className="w-8 h-8" />
        </button>
      )}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="drawer-content">
          {NAVIGATORS.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-72}
              className="navigation-link"
              activeClass="active-link"
              spy={true}
            >
              <button onClick={toggleDrawer(false)}> {item}</button>
            </Link>
          ))}
          <a href="/#/careers" className="navigation-link">
            Careers
          </a>
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
