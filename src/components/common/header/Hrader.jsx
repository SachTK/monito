"use client";

import React, { useState } from "react";
import Image from "next/image";
import search from "./assets/search.svg";
import currency from "./assets/crncy.svg";
import banner from "./assets/banner.png";
import arrowDown from "./assets/arrow_down.svg";
import RootWrapper from "../rootWrapper/RootWrapper";
import logo from "./assets/logo.svg";
import hamburgerMenu from "./assets/hamburgerMenu.svg";
import close from "./assets/close.svg";
import Button from "../button/Button";

const Header = () => {
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (categoryDropdownOpen) setCategoryDropdownOpen(false);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <RootWrapper className={'sticky top-0 z-[999] w-full'}>
      <div className="bg-white py-4 xl:py-[28px] relative">
        {/* Mobile Header */}
        <div className="flex justify-between items-center xl:hidden px-4">
          <button
            className="p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Image 
              src={mobileMenuOpen ? close : hamburgerMenu}
              alt={mobileMenuOpen ? "Close menu" : "Open menu"}
              width={24}
              height={24}
            />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Image src={logo} alt="Monito" width={100} height={50} />
          </div>

          <button
            className="p-2"
            onClick={toggleSearch}
            aria-label="Toggle search"
          >
            <Image 
              src={search}
              alt="Search"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="xl:hidden px-4 py-2 border-t">
            <div className="relative flex items-center">
              <Image src={search} alt="Search" width={20} height={20} className="absolute left-3" />
              <input
                type="text"
                placeholder="Search something here!"
                className="w-full pl-10 pr-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2"
              />
            </div>
          </div>
        )}

        {/* Desktop Layout */}
        <div className="hidden xl:flex justify-between items-center">
          <div className="flex items-center">
            <Image src={logo} alt="Monito" width={100} height={50} />
          </div>

          <nav className="flex space-x-8 items-center">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>

            <div className="">
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="text-gray-700 hover:text-blue-600 flex items-center"
              >
                Category
              </button>

              {categoryDropdownOpen && (
                <div className="absolute left-0 right-7 top-full mt-2 bg-white py-[34px] px-[40px] shadow-lg rounded-[12px] max-w z-50 flex justify-between">
                  <div className="flex flex-row gap-[70px]">
                    <div>
                      <h4 className="font-semibold mb-[11px]">Popular →</h4>
                      <div className="flex gap-[38px]">
                        <ul className="space-y-2 bodyText3">
                          <li>Yorkshire Terrier</li>
                          <li>Pug</li>
                          <li>Cocker Spaniel</li>
                          <li>Jack Russell Terrier</li>
                          <li>Beagle</li>
                          <li>Husky</li>
                        </ul>
                        <ul className="space-y-2 bodyText3">
                          <li>Samoyed</li>
                          <li>Labrador</li>
                          <li>Tosa</li>
                          <li>Dachshund</li>
                          <li>French Bulldog</li>
                          <li>Chihuahua</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-[11px]">Large Dog →</h4>
                      <ul className="space-y-2 bodyText3">
                        <li>Akita</li>
                        <li>Alaskan Malamute</li>
                        <li>Bernese Mountain</li>
                        <li>Bloodhound</li>
                        <li>Bullmastiff</li>
                        <li>Cane Corso</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-[11px]">Small Dog →</h4>
                      <ul className="space-y-2 bodyText3">
                        <li>Beagle</li>
                        <li>Boston Terrier</li>
                        <li>Calm Terrier</li>
                        <li>Chihuahua</li>
                        <li>Cocker Spaniel</li>
                        <li>Dachshund</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={banner}
                      alt="Adopt Banner"
                      width={367}
                      className="h-fit"
                    />
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>

            <div className="relative flex gap-[8px]">
              <Image src={search} alt="Search" width={20} height={20} />
              <input
                type="text"
                placeholder="Search something here!"
                className="text-sm focus:outline-none focus:ring-2"
              />
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <Button textOnly name={"Join the community"} link={"#"} />
            <button className="flex gap-[0px] items-center">
              <Image src={currency} alt="Currency" width={20} height={20} />
              VND
              <Image src={arrowDown} alt="Arrow Down" width={40} height={40} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 w-full">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                className="text-left text-gray-700 hover:text-blue-600 flex justify-between items-center"
              >
                Category
                <Image src={arrowDown} alt="Arrow Down" width={20} height={20} />
              </button>
              
              {categoryDropdownOpen && (
                <div className="pl-4 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Popular</h4>
                    <ul className="space-y-2">
                      <li>Yorkshire Terrier</li>
                      <li>Pug</li>
                      <li>Cocker Spaniel</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Large Dog</h4>
                    <ul className="space-y-2">
                      <li>Akita</li>
                      <li>Alaskan Malamute</li>
                      <li>Bernese Mountain</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Small Dog</h4>
                    <ul className="space-y-2">
                      <li>Beagle</li>
                      <li>Boston Terrier</li>
                      <li>Chihuahua</li>
                    </ul>
                  </div>
                </div>
              )}

              <a href="#" className="text-gray-700 hover:text-blue-600">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>

              <Button textOnly name={"Join the community"} link={"#"} className="w-fit" />
              
              <button className="flex gap-[8px] items-center">
                <Image src={currency} alt="Currency" width={20} height={20} />
                VND
                <Image src={arrowDown} alt="Arrow Down" width={20} height={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </RootWrapper>
  );
};

export default Header;