import { Link } from '@tanstack/react-router';
import { CSSProperties } from 'react';
import { BiFoodMenu } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { GiCartwheel, GiNoodles } from 'react-icons/gi';
import { LiaCocktailSolid } from 'react-icons/lia';
import { MdOutlineDinnerDining } from 'react-icons/md';
import { PiBreadBold } from 'react-icons/pi';
import { TbCake, TbSoup } from 'react-icons/tb';

const linkStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 5,
  textDecoration: 'none',
  color: 'black',
};

export const Navbar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <Link
        to="/SaraCookbook"
        activeOptions={{ exact: true }}
        style={linkStyle}
      >
        <FaHome size="1.5rem" /> Home
      </Link>
      <Link
        to="/SaraCookbook/sandwich"
        activeOptions={{ exact: true }}
        style={linkStyle}
      >
        <PiBreadBold size="1.5rem" /> Sandwiches
      </Link>
      <Link
        to="/SaraCookbook/soup"
        activeOptions={{ exact: true }}
        style={linkStyle}
      >
        <TbSoup size="1.5rem" /> Soup
      </Link>
      <Link
        to="/SaraCookbook/entree"
        activeOptions={{ exact: true }}
        style={linkStyle}
      >
        <MdOutlineDinnerDining size="1.5rem" /> Entrees
      </Link>
      <Link
        to="/SaraCookbook/pasta"
        activeOptions={{ exact: true }}
        style={linkStyle}
      >
        <GiNoodles size="1.5rem" /> Pasta/Noodles
      </Link>
      <Link
        to="/SaraCookbook/dessert"
        activeOptions={{ exact: true }}
        style={linkStyle}
      >
        <TbCake size="1.5rem" /> Dessert
      </Link>
      <Link
        to="/SaraCookbook/drinks"
        activeOptions={{ exact: true }}
        style={linkStyle}
      >
        <LiaCocktailSolid size="1.5rem" /> Drinks
      </Link>
      <Link
        to="/SaraCookbook/cuisine"
        activeOptions={{ exact: true }}
        style={linkStyle}
      >
        <BiFoodMenu size="1.5rem" /> By Cuisine
      </Link>
      <Link
        to="/SaraCookbook/wheel"
        activeOptions={{ exact: true }}
        style={linkStyle}
      >
        <GiCartwheel size="1.5rem" /> The Wheel
      </Link>
    </div>
  );
};
