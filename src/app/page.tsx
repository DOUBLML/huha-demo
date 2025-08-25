"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getImagePath } from "@/lib/utils";
import Link from "next/link";

export default function HuhaHomepage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Split Design */}
      <section className="relative h-[600px] flex">
        {/* Left Side - Better Undies */}
        <div className="flex-1 relative bg-gradient-to-br from-pink-400 to-pink-600">
          <div className="absolute inset-0">
            <Image
              src={getImagePath("/huha-hero-left.png")}
              alt="Better Undies"
              fill
              className="object-cover opacity-80"
              style={{ objectPosition: "50% 5%" }}
            />
          </div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h2 className="text-4xl font-bold mb-4">Better Undies</h2>
              <p className="text-lg mb-6 max-w-md">
                Our breathable fabrics & mineral lining keep you cool &
                fresh—for what's left of summer and beyond.
              </p>
              <Link href="/mineral-undies">
                <Button className="bg-amber-900 text-white hover:bg-amber-800">
                  SHOP MINERAL UNDIES™
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Gone in a Flash */}
        <div className="flex-1 relative bg-gradient-to-br from-lime-400 to-lime-500">
          <div className="absolute inset-0">
            <Image
              src={getImagePath("/huha-hero-right.png")}
              alt="Gone in a Flash"
              fill
              className="object-cover opacity-80"
              style={{ objectPosition: "50% 20%" }}
            />
          </div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h2 className="text-4xl font-bold mb-4">Gone in a Flash</h2>
              <p className="text-lg mb-6 max-w-md">
                The lights are almost out on our Summer Brights. Snag your size
                before they're gone for good.
              </p>
              <Button className="bg-amber-900 text-white hover:bg-amber-800">
                SHOP LIMITED EDITION
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Take Care Down There Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl">🌿</span>
              <h2 className="text-3xl font-bold mx-4">Take care, down there</h2>
              <span className="text-4xl">🌿</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Summer Brights */}
            <div className="relative group">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
                <Image
                  src={getImagePath("/huha-collection-1.jpg")}
                  alt="Summer Brights"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">SUMMER BRIGHTS</h3>
              </div>
            </div>

            {/* Bestsellers */}
            <div className="relative group">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
                <Image
                  src={getImagePath("/huha-collection-2.jpg")}
                  alt="Bestsellers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">BESTSELLERS</h3>
              </div>
            </div>

            {/* Mineral Undies */}
            <Link
              href="/mineral-undies"
              className="relative group cursor-pointer"
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
                <Image
                  src={getImagePath("/huha-collection-3.jpg")}
                  alt="Mineral Undies"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">MINERAL UNDIES™</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
