import React, { FC } from 'react';

import styles from './Pagination.module.less';

import { usePagination } from '../../../hooks';

export type TPaginationProps = {
  totalItems: number;
  itemsPerPage: number;
};

const Pagination: FC<TPaginationProps> = ({ totalItems, itemsPerPage }) => {
  const { currentPage, maxPage } = usePagination({
    totalItems,
    itemsPerPage,
  });

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === maxPage;

  const items = generateButtons(currentPage, 3, maxPage);

  return (
    <div className={styles.pagination}>
      <ul className={styles.pagination__list}>
        {!isFirstPage && (
          <li className={styles.pagination__item}>
            <button className={`${styles.pagination__button} ${styles.pagination__button_prev}`} type="button">
              {'<'}
            </button>
          </li>
        )}
        {items.map((item) => (
          <li className={styles.pagination__item} key={item}>
            <button className={styles.pagination__button} type="button">
              {item}
            </button>
          </li>
        ))}
        {!isLastPage && (
          <li className={styles.pagination__item}>
            <button className={`${styles.pagination__button} ${styles.pagination__button_next}`} type="button">
              {'>'}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

const generateButtons = (currentPage: number, countPageVisibile: number, maxPage: number) => {
  const paginationItems = [];

  for (let i = currentPage; i < countPageVisibile; i += 1) {
    paginationItems.push(i + 1);
  }

  paginationItems.push('...');

  for (let i = maxPage - countPageVisibile; i < maxPage; i += 1) {
    paginationItems.push(i + 1);
  }

  return paginationItems;
};

export default Pagination;
