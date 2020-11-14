import { useEffect, useState } from 'react';
import { TPokemonCard } from '../components/Pokemons/PokemonCard';

/* eslint-disable import/prefer-default-export */

export const useScreenCursorCoordinates = () => {
  const [state, setState] = useState({
    screenX: 0,
    screenY: 0,
  });

  const handleMouseMove = (event: MouseEvent) => {
    const { screenX, screenY } = event;
    setState(() => ({ screenX, screenY }));
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [state]);

  return state;
};

type TInitialState = {
  pokemons: TPokemonCard[];
  total: number;
  isError: boolean;
  isLoading: boolean;
};

type TDataServer = {
  pokemons: TPokemonCard[];
  total: number;
};

export const usePokemons = () => {
  const initialState: TInitialState = {
    pokemons: [],
    total: 0,
    isError: false,
    isLoading: true,
  };

  const [data, setData] = useState(initialState);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch(
          `http://zar.hosthot.ru/api/v1/pokemons?limit=${process.env.POKEMONS_LIMIT}&offset=1`,
        );
        const result: TDataServer = await response.json();

        setData((state) => ({ ...state, total: result.total, pokemons: result.pokemons }));
      } catch {
        setData(() => ({ ...initialState, isError: true }));
      } finally {
        setData((state) => ({ ...state, isLoading: false }));
      }
    };

    getPokemons();
  }, []);

  return data;
};

type TUsePagination = {
  startCurrentPage?: number;
  totalItems: number;
  itemsPerPage: number;
};

export const usePagination = ({ startCurrentPage = 0, totalItems, itemsPerPage }: TUsePagination) => {
  const initialCurrentPage = startCurrentPage;

  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const maxPage = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((pervCurrentPage) => Math.min(pervCurrentPage + 1, maxPage));
  };

  const prevPage = () => {
    setCurrentPage((prevCurrentPage) => Math.max(prevCurrentPage - 1, initialCurrentPage));
  };

  const jumpPage = (page: number) => {
    const pageNumber = Math.max(initialCurrentPage, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  };

  return { currentPage, maxPage, nextPage, prevPage, jumpPage };
};
