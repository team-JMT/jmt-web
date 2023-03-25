import React, { HTMLAttributes } from 'react';

import searchIcon from '../../assets/icons/search.svg';
interface InputProps extends HTMLAttributes<HTMLInputElement> {}
const SearchInput = ({ ...rest }: InputProps) => {
  return (
    <div className={'input-wrapper'}>
      <input className={'reset-input'} {...rest} />
      <div className={'input-right-icon'}>
        <img src={searchIcon} />
      </div>
    </div>
  );
};

export default SearchInput;
