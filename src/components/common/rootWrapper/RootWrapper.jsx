import React from 'react';

const RootWrapper = ({children, className}) => {
  return (
    <div
      className={`w-full  px-[16px] md:px-[40px] xl:px-[130px] 2xl:max-w-[1440px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default RootWrapper;