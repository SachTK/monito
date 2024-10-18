"use client";

import React, { useState } from "react";
import PupyCard from "@/components/common/card/PupyCard";
import filterIcon from "./assets/filter.svg";
import dropDownIcon from "./assets/dropDown.svg";
import Pagination from './Pagination';
import Image from "next/image";

const DogList = ({ data, title, count }) => {
  const [sortBy, setSortBy] = useState("Popular");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 28; 

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col gap-[19px] pt-[22px] pb-[60px] xl:flex-row">
    
      <div className="flex justify-between items-center xl:hidden">
        <div className="relative">
          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
            className="appearance-none bg-white border border-[#C4CDD5] rounded-full px-4 py-2 text-[#003459] text-sm pr-10 cursor-pointer"
          >
            <option value="Popular">Sort by: Popular</option>
            <option value="Price Low to High">Price: Low to High</option>
            <option value="Price High to Low">Price: High to Low</option>
            <option value="Age">Age</option>
          </select>

          <Image
            src={dropDownIcon}
            alt="Dropdown"
            width={20}
            height={20}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
          />
        </div>

        <div className="flex items-center space-x-2 px-[10px] py-[7px]">
          <Image src={filterIcon} alt="Filter" width={20} height={20} />
          <span className="text-[16px] leading-[24px] text-[#003459] bold">
            Filter
          </span>
        </div>
      </div>

      
      <div className="hidden xl:flex xl:max-w-[280px] w-full flex-col gap-[24px]">
        <h2 className="text-[24px] leading-[36px] text-[#003459] bold">Filter</h2>

       
        <div className="  border-b-[1px] border-b-[#EBEEEF] pb-[16px]">
          <h3 className="text-[16px] leading-[24px] text-[#003459] bold">Gender</h3>
          <div className="flex flex-col gap-[12px] pt-[10px]">
            <label className="flex items-center gap-[8px]">
              <input type="checkbox" value="Male" />
              <span className="flex justify-center items-center gap-[10px]">Male</span>
            </label>
            <label className="flex items-center gap-[8px]">
              <input type="checkbox" value="Female" />
              <span className="flex justify-center items-center gap-[10px]">Female</span>
            </label>
          </div>
        </div>

        
        <div className="  border-b-[1px] border-b-[#EBEEEF] py-[16px]">
          <h3 className="text-[16px] leading-[24px] text-[#003459] bold">Color</h3>
          <div className="flex flex-col gap-[12px] pt-[10px]">
            {["Red", "Apricot", "Black", "Black & White", "Silver", "Tan"].map((color) => (
              <label key={color} className="flex items-center gap-[8px]">
                <input type="checkbox" value={color} />
                <span className="flex justify-center items-center gap-[10px]">
                  <div
                    className={`w-[15px] h-[15px] rounded-full ${{
                      Red: "bg-red-500",
                      Apricot: "bg-orange-300",
                      Black: "bg-black",
                      "Black & White": "bg-gradient-to-r from-black to-white",
                      Silver: "bg-gray-400",
                      Tan: "bg-yellow-500",
                    }[color]}`}
                  ></div>
                  {color}
                </span>
              </label>
            ))}
          </div>
        </div>

      
        <div className="  border-b-[1px] border-b-[#EBEEEF] py-[16px]">
          <h3 className="text-[16px] leading-[24px] text-[#003459] bold">Price</h3>
          <div className="flex  gap-[12px] pt-[10px]">
            <input type="number" placeholder="Min" className="border px-[8px] py-[6px] rounded-md max-w-[125px]" />
            <input type="number" placeholder="Max" className="border px-[8px] py-[6px] rounded-md  max-w-[125px]" />
          </div>
        </div>

       
        <div className="  border-b-[1px] border-b-[#EBEEEF] py-[16px]">
          <h3 className="text-[16px] leading-[24px] text-[#003459] bold">Breed</h3>
          <div className="flex flex-col gap-[12px] pt-[10px]">
            <label className="flex items-center gap-[8px]">
              <input type="checkbox" value="Small" />
              <span className="flex justify-center items-center gap-[10px]">Small</span>
            </label>
            <label className="flex items-center gap-[8px]">
              <input type="checkbox" value="Medium" />
              <span className="flex justify-center items-center gap-[10px]">Medium</span>
            </label>
            <label className="flex items-center gap-[8px]">
              <input type="checkbox" value="Large" />
              <span className="flex justify-center items-center gap-[10px]">Large</span>
            </label>
          </div>
        </div>
      </div>

    
      <div className="xl:max-w-[880px] w-full flex flex-col justify-between">
        <div className="flex justify-between">
          <h2 className="text-[24px] leading-[36px] text-[#003459] bold">
            {title}{" "}
            <span className="text-[14px] leading-[20px] text-[#667479] medium">
              63 puppies
            </span>
          </h2>

          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
            className="appearance-none bg-white border border-[#C4CDD5] rounded-full px-4 py-2 text-[#003459] text-sm pr-10 cursor-pointer hidden xl:block"
          >
            <option value="Popular">Sort by: Popular</option>
            <option value="Price Low to High">Price: Low to High</option>
            <option value="Price High to Low">Price: High to Low</option>
            <option value="Age">Age</option>
          </select>
        </div>

        <div className="flex flex-row flex-wrap gap-[12px] lg:gap-[20px] justify-center mt-[20px]">
          {data.map((dog) => (
            <PupyCard
              key={dog.id}
              id={dog.id}
              breed={dog.breed}
              price={dog.price}
              age={dog.age}
              gender={dog.gender}
              image={dog.image}
              category={title}
            />
          ))}
        </div>

      
        <div className="mt-[40px]">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DogList;
