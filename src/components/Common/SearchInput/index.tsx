import React from 'react';
import styles from './SearchInput.module.less';

import { TInitialValue } from '../../../hooks';

type TSearchInput = {
  value: TInitialValue;
  placeholder?: string;
  onChange: (value: string) => void;
};

const SearchInput: React.FC<TSearchInput> = ({ value, placeholder, onChange }) => {
  const handleInputOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    onChange(value);
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        type="text"
        onChange={handleInputOnChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
