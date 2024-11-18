import { css } from '@emotion/css';
import { Link } from '@tanstack/react-router';
import { BiFoodMenu } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { GiCartwheel, GiNoodles } from 'react-icons/gi';
import { LiaCocktailSolid } from 'react-icons/lia';
import { MdOutlineDinnerDining } from 'react-icons/md';
import { PiBreadBold } from 'react-icons/pi';
import { TbCake, TbSoup } from 'react-icons/tb';

const linkStyle = css({
  display: 'flex',
  alignitems: 'center',
  gap: 5,
  textdecoration: 'none',
  textDecorationLine: 'none',
  color: 'black',
  padding: 5,
  '&:hover': {
    backgroundColor: 'whitesmoke',
  },
});

export const Navbar = ({ onNavigate }: { onNavigate: () => void }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <Link
        to="/SaraCookbook"
        activeOptions={{ exact: true }}
        className={linkStyle}
        onClick={onNavigate}
      >
        <FaHome size="1.5rem" /> Home
      </Link>
      <Link
        to="/SaraCookbook/sandwich"
        activeOptions={{ exact: true }}
        className={linkStyle}
        onClick={onNavigate}
      >
        <PiBreadBold size="1.5rem" /> Sandwiches
      </Link>
      <Link
        to="/SaraCookbook/soup"
        activeOptions={{ exact: true }}
        className={linkStyle}
        onClick={onNavigate}
      >
        <TbSoup size="1.5rem" /> Soup
      </Link>
      <Link
        to="/SaraCookbook/entree"
        activeOptions={{ exact: true }}
        className={linkStyle}
        onClick={onNavigate}
      >
        <MdOutlineDinnerDining size="1.5rem" /> Entrees
      </Link>
      <Link
        to="/SaraCookbook/pasta"
        activeOptions={{ exact: true }}
        className={linkStyle}
        onClick={onNavigate}
      >
        <GiNoodles size="1.5rem" /> Pasta/Noodles
      </Link>
      <Link
        to="/SaraCookbook/dessert"
        activeOptions={{ exact: true }}
        className={linkStyle}
        onClick={onNavigate}
      >
        <TbCake size="1.5rem" /> Dessert
      </Link>
      <Link
        to="/SaraCookbook/drinks"
        activeOptions={{ exact: true }}
        className={linkStyle}
        onClick={onNavigate}
      >
        <LiaCocktailSolid size="1.5rem" /> Drinks
      </Link>
      <Link
        to="/SaraCookbook/cuisine"
        activeOptions={{ exact: true }}
        className={linkStyle}
        onClick={onNavigate}
      >
        <BiFoodMenu size="1.5rem" /> By Cuisine
      </Link>
      <Link
        to="/SaraCookbook/wheel"
        activeOptions={{ exact: true }}
        className={linkStyle}
        onClick={onNavigate}
      >
        <GiCartwheel size="1.5rem" /> The Wheel
      </Link>
    </div>
  );
};
