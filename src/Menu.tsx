import React from 'react';

type MenuItem = {
  id: number;
  name: string;
};
type MenuItems = MenuItem[];

const menuItems: MenuItems = [
  {
    id: 1,
    name: 'Home',
  },
  {
    id: 2,
    name: 'Pokédex',
  },
  {
    id: 3,
    name: 'Legendaries',
  },
  {
    id: 4,
    name: 'Documentation',
  },
];

const Menu = () => {
  return (
    <nav>
      <ul>
        {menuItems.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
