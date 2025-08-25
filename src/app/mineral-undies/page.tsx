"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getImagePath } from "@/lib/utils";
import Link from "next/link";

const products = [
  {
    id: "bikini",
    name: "Bikini",
    price: "$28.00",
    rating: 4.8,
    colors: "+8 colours",
    image: "/p-1.jpg",
  },
  {
    id: "low-profile-thong",
    name: "Low Profile Thong",
    price: "$29.00",
    rating: 4.8,
    colors: "+9 colours",
    image: "/p-2.jpg",
  },
  {
    id: "thong",
    name: "Thong",
    price: "$28.00",
    rating: 4.8,
    colors: "+9 colours",
    image: "/p-3.jpg",
  },
  {
    id: "brief",
    name: "Brief",
    price: "$29.00",
    rating: 4.8,
    colors: "+8 colours",
    image: "/p-4.jpg",
  },
];

export default function MineralUndiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Mineral Undies</h1>
          <p className="text-lg text-gray-600 mb-6">
            Add 1 more item to save 5%
          </p>

          {/* Bundle Progress */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-bold">
                1
              </div>
              <span className="ml-2 text-sm text-pink-500">Save 5%</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm">
                2
              </div>
              <span className="ml-2 text-sm text-gray-500">Save 10%</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm">
                5
              </div>
              <span className="ml-2 text-sm text-gray-500">Save 10%</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm">
                7
              </div>
              <span className="ml-2 text-sm text-gray-500">Save 15%</span>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 mb-12">
          {[
            { name: "STRING", image: "/huha-category-string.jpg" },
            { name: "THONGS", image: "/huha-category-thongs.jpg" },
            { name: "BIKINI", image: "/huha-category-bikini.jpg" },
            { name: "BRIEF", image: "/huha-category-brief.jpg" },
            { name: "CHEEKY", image: "/huha-category-cheeky.jpg" },
            { name: "BOXERS", image: "/huha-category-boxers.jpg" },
            { name: "SEAMLESS", image: "/huha-category-seamless.jpg" },
            { name: "HIPSTER", image: "/huha-category-hipster.jpg" },
          ].map((category) => (
            <div
              key={category.name}
              className="text-center cursor-pointer group"
            >
              <div className="aspect-square w-full max-w-[120px] mx-auto mb-3 relative overflow-hidden rounded-xl">
                <Image
                  src={getImagePath(category.image)}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-medium text-gray-900 group-hover:text-pink-600 transition-colors">
                {category.name}
              </span>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <select className="border border-gray-300 rounded px-3 py-2">
              <option>Availability</option>
            </select>
            <select className="border border-gray-300 rounded px-3 py-2">
              <option>Colour</option>
            </select>
            <select className="border border-gray-300 rounded px-3 py-2">
              <option>Size</option>
            </select>
            <select className="border border-gray-300 rounded px-3 py-2">
              <option>Coverage</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <span>Sort by:</span>
            <select className="border border-gray-300 rounded px-3 py-2">
              <option>Featured</option>
            </select>
            <span className="text-gray-600">50 products</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${encodeURIComponent(product.name)}`}
            >
              <Card className="border-0 shadow-none cursor-pointer group">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] relative mb-4 group">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded text-xs font-medium">
                        Bundle + Save
                      </span>
                    </div>
                    <Image
                      src={getImagePath(product.image)}
                      alt={product.name}
                      fill
                      className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg font-bold">{product.price}</span>
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-black rounded-full"></div>
                      <span className="text-sm text-gray-600">
                        {product.colors}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
