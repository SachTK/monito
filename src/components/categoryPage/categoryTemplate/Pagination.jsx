
import React from 'react';
import nextArroww from './assets/nextArrow.svg';
import backArroww from './assets/backArrow.svg';
import Image from 'next/image';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-[10px] py-[5px] rounded-md ${
            currentPage === i
              ? 'bg-[#003459] text-white'
              : 'text-[#003459] hover:bg-[#E8F2FA]'
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center gap-2 justify-center">
      <button
        onClick={handlePrevious}
        className="px-[10px] py-[5px] rounded-md text-[#003459] hover:bg-[#E8F2FA]"
      >
        <Image src={backArroww} alt="nextArrow" width={20} height={20} />
      </button>
      {renderPageNumbers().slice(0, 4)} {/* First few pages */}
      <span>...</span>
      <button
        onClick={() => onPageChange(totalPages)}
        className="px-[10px] py-[5px] rounded-md text-[#003459] hover:bg-[#E8F2FA]"
      >
        {totalPages}
      </button>
      <button
        onClick={handleNext}
        className="px-[10px] py-[5px] rounded-md text-[#003459] hover:bg-[#E8F2FA]"
      >
        <Image src={nextArroww} alt="nextArrow" width={20} height={20} />
      </button>
    </div>
  );
};

export default Pagination;
