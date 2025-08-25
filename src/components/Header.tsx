"use client";

import Image from "next/image";
import { useState } from "react";
import { Search, User, ShoppingBag, ChevronDown } from "lucide-react";
import Link from "next/link";
import { getImagePath } from "@/lib/utils";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-pink-100 text-center py-2 text-sm">
        Free shipping above $85+ 📦
      </div>

      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-bold text-black">hüha</h1>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-900 hover:text-pink-600">
                Shop All
              </Link>
              <Link href="#" className="text-gray-900 hover:text-pink-600">
                Summer Colours
              </Link>

              {/* Mineral Undies Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="text-gray-900 hover:text-pink-600 flex items-center"
                >
                  Mineral Undies
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-0 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-8">
                        {/* STYLES Column */}
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-4">
                            STYLES
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <Link
                                href="/mineral-undies"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                Shop All
                              </Link>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                Seamless
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                String
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                Thong
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                Bikini
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                Brief
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                Boxer
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                Cheeky
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                Hipster
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* RISE Column */}
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-4">
                            RISE
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                Low Rise
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                Mid Rise
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                High Rise
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* COVERAGE Column */}
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-4">
                            COVERAGE
                          </h3>
                          <ul className="space-y-2">
                            <li>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                Bare Cheek
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                Half-Cheek
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-gray-700 hover:text-pink-600"
                              >
                                Full Coverage
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="#" className="text-gray-900 hover:text-pink-600">
                Mineral Bras
              </Link>
              <Link href="#" className="text-gray-900 hover:text-pink-600">
                Apparel
              </Link>
              <Link href="#" className="text-gray-900 hover:text-pink-600">
                Care + Accessories
              </Link>
              <Link href="#" className="text-gray-900 hover:text-pink-600">
                Peach Perks
              </Link>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <span className="text-sm">CAD</span>
              <Search className="h-5 w-5 text-gray-600" />
              <User className="h-5 w-5 text-gray-600" />
              <ShoppingBag className="h-5 w-5 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
