import { useEffect, useState } from 'react';
import { request, TRequestParams } from '../config';

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

type TInitialState<D> = {
  data: D | null;
  isError: boolean;
  isLoading: boolean;
};

type TUseDataProps = TRequestParams & {
  deps: any[];
};

export const useData = <T>({ endPoint, pathname, query, deps = [] }: TUseDataProps) => {
  const initialState: TInitialState<T> = {
    data: null,
    isError: false,
    isLoading: true,
  };

  const [data, setData] = useState<TInitialState<T>>(initialState);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        setData((state) => ({ ...state, isLoading: true }));

        const result = await request<T>({ endPoint, query, pathname });

        setData((state) => ({ ...state, data: result }));
      } catch {
        setData(() => ({ ...initialState, isError: true }));
      } finally {
        setData((state) => ({ ...state, isLoading: false }));
      }
    };

    getData();
  }, deps);

  return data;
};

export type TInitialValue = string | number;

export const useValue = (initialValue: TInitialValue) => {
  const initialState = initialValue;
  const [value, setValue] = useState(initialState);

  return { value, setValue };
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

export const useDebounce = <T>(props: T, delay: number) => {
  const [debouncedProps, setDebouncedProps] = useState<T>(props);

  useEffect(() => {
    const time = setTimeout(() => {
      setDebouncedProps((prevDebouncedProps) => ({ ...prevDebouncedProps, ...props }));
    }, delay);

    return () => {
      clearTimeout(time);
    };
  }, [props]);

  return debouncedProps;
};
