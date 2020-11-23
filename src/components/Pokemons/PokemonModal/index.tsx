import React, { FC } from 'react';
import Modal, { TModal } from '../../Common/Modal';

export type TPokemonModal = TModal & {
  id: string;
};

const PokemonModal: FC<TPokemonModal> = ({ id, isOpen, setIsOpen, setIsClose }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} setIsClose={setIsClose}>
      Hello from pokemons page Hello from pokemons page Hello from pokemons page Hello from pokemons page Hello from
      pokemons page Hello from pokemons page Hello from pokemons page
    </Modal>
  );
};

export default PokemonModal;
