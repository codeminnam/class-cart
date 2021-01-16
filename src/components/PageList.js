import React from 'react';

const PageList = ({ length, onSetCurrentPage }) => {
  const pageCount = Math.ceil(length / 4);
  const pageArray = [];

  for (let num = 1; num <= pageCount; num += 1) {
    pageArray.push(
      <button
        type="button"
        key={num}
        onClick={() => onSetCurrentPage(`${num}`)}
      >
        {num}
      </button>,
    );
  }

  return <div>{pageArray}</div>;
};

export default PageList;
