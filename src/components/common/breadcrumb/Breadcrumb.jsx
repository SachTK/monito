import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({ items, separator = '>', className = '' }) => {
  return (
    <nav aria-label="breadcrumb" className={`flex space-x-2 items-center ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">

          {item.link ? (
            <Link href={item.link}>
              <p className="text-gray-500 hover:text-blue-600">{item.label}</p>
            </Link>
          ) : (
            <span className="text-gray-500">{item.label}</span>
          )}

         
          {index < items.length - 1 && (
            <span className="mx-2 text-gray-400">{separator}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
