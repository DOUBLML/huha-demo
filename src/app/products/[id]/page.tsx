"use client";

import Image from "next/image";
import { useState, use } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Star, Plus, Minus } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getImagePath } from "@/lib/utils";

// Product data mapping
const productData = {
  bikini: {
    name: "Bikini",
    category: "Mineral Undies",
    price: "$28.00",
    rating: 4.8,
    reviewCount: "4091 Reviews",
    mainImage: "/p-1.jpg",
    additionalImages: ["/p-1-1.png", "/p-1-2.png", "/p-1-3.png"],
    colors: {
      classic: [
        { name: "Black", color: "#000000", selected: true },
        { name: "Nude", color: "#F5DEB3" },
        { name: "White", color: "#FFFFFF" },
        { name: "Forest", color: "#228B22" },
        { name: "Terracotta", color: "#E2725B" },
        { name: "Plum", color: "#8B4B8C" },
        { name: "Lavender", color: "#E6E6FA" },
      ],
      limited: [
        { name: "Teal", color: "#008080" },
        { name: "Hot Pink", color: "#FF69B4" },
      ],
    },
    sizes: ["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    stock: "Hurry! 63 units left in stock",
    fitNote: "Go by hip measurement for the best fit in this style.",
  },
  "low-profile-thong": {
    name: "Low Profile Thong",
    category: "Mineral Undies",
    price: "$29.00",
    rating: 4.8,
    reviewCount: "3245 Reviews",
    mainImage: "/p-2.jpg",
    additionalImages: ["/p-2-1.png", "/p-2-2.png", "/p-2-3.png"],
    colors: {
      classic: [
        { name: "Black", color: "#000000", selected: true },
        { name: "Nude", color: "#F5DEB3" },
        { name: "White", color: "#FFFFFF" },
        { name: "Forest", color: "#228B22" },
        { name: "Terracotta", color: "#E2725B" },
        { name: "Plum", color: "#8B4B8C" },
        { name: "Lavender", color: "#E6E6FA" },
      ],
      limited: [
        { name: "Teal", color: "#008080" },
        { name: "Hot Pink", color: "#FF69B4" },
      ],
    },
    sizes: ["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    stock: "Hurry! 45 units left in stock",
    fitNote: "Go by hip measurement for the best fit in this style.",
  },
  thong: {
    name: "Thong",
    category: "Mineral Undies",
    price: "$28.00",
    rating: 4.8,
    reviewCount: "2987 Reviews",
    mainImage: "/p-3.jpg",
    additionalImages: ["/p-3-1.png", "/p-3-2.png", "/p-3-3.png"],
    colors: {
      classic: [
        { name: "Black", color: "#000000", selected: true },
        { name: "Nude", color: "#F5DEB3" },
        { name: "White", color: "#FFFFFF" },
        { name: "Forest", color: "#228B22" },
        { name: "Terracotta", color: "#E2725B" },
        { name: "Plum", color: "#8B4B8C" },
        { name: "Lavender", color: "#E6E6FA" },
      ],
      limited: [
        { name: "Teal", color: "#008080" },
        { name: "Hot Pink", color: "#FF69B4" },
      ],
    },
    sizes: ["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    stock: "Hurry! 52 units left in stock",
    fitNote: "Go by hip measurement for the best fit in this style.",
  },
  brief: {
    name: "Brief",
    category: "Mineral Undies",
    price: "$29.00",
    rating: 4.8,
    reviewCount: "3654 Reviews",
    mainImage: "/p-4.jpg",
    additionalImages: ["/p-4-1.png", "/p-4-2.png", "/p-4-3.png"],
    colors: {
      classic: [
        { name: "Black", color: "#000000", selected: true },
        { name: "Nude", color: "#F5DEB3" },
        { name: "White", color: "#FFFFFF" },
        { name: "Forest", color: "#228B22" },
        { name: "Terracotta", color: "#E2725B" },
        { name: "Plum", color: "#8B4B8C" },
        { name: "Lavender", color: "#E6E6FA" },
      ],
      limited: [
        { name: "Teal", color: "#008080" },
        { name: "Hot Pink", color: "#FF69B4" },
      ],
    },
    sizes: ["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
    stock: "Hurry! 38 units left in stock",
    fitNote: "Go by hip measurement for the best fit in this style.",
  },
};

const otherProducts = [
  {
    id: "bikini",
    name: "Bikini",
    image: "/p-1.jpg",
    price: "$28.00",
    rating: 4.8,
    colors: "+8 colours",
  },
  {
    id: "low-profile-thong",
    name: "Low Profile Thong",
    image: "/p-2.jpg",
    price: "$29.00",
    rating: 4.8,
    colors: "+9 colours",
  },
  {
    id: "thong",
    name: "Thong",
    image: "/p-3.jpg",
    price: "$28.00",
    rating: 4.8,
    colors: "+9 colours",
  },
  {
    id: "brief",
    name: "Brief",
    image: "/p-4.jpg",
    price: "$29.00",
    rating: 4.8,
    colors: "+8 colours",
  },
];

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("2XS");
  const [quantity, setQuantity] = useState(1);

  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return <div>Product not found</div>;
  }

  const allImages = [product.mainImage, ...product.additionalImages];
  const recommendedProducts = otherProducts.filter((p) => p.id !== productId);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>/</span>
          <Link href="/mineral-undies" className="hover:text-gray-900">
            Mineral Undies
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-16 h-20 border-2 rounded-lg overflow-hidden ${
                    selectedImageIndex === index
                      ? "border-pink-500"
                      : "border-gray-200"
                  }`}
                >
                  <Image
                    src={getImagePath(image)}
                    alt={`${product.name} ${index + 1}`}
                    width={64}
                    height={80}
                    className="w-full h-full object-cover"
                    quality={100}
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src={getImagePath(allImages[selectedImageIndex])}
                alt={product.name}
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-gray-600">{product.category}</p>
            </div>

            <div className="text-2xl font-bold">{product.price}</div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <Link href="#" className="text-sm text-gray-600 underline">
                {product.reviewCount}
              </Link>
            </div>

            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">{product.fitNote}</p>
            </div>

            {/* Colors */}
            <div>
              <h3 className="font-semibold mb-3">Classic Colours: Black</h3>
              <div className="flex space-x-2 mb-4">
                {product.colors.classic.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 ${
                      color.selected ? "border-gray-900" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.color }}
                  />
                ))}
              </div>

              <h3 className="font-semibold mb-3">Limited Edition</h3>
              <div className="flex space-x-2">
                {product.colors.limited.map((color, index) => (
                  <button
                    key={index}
                    className="w-8 h-8 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: color.color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Size: {selectedSize}</h3>
                <span className="text-sm text-orange-600">{product.stock}</span>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`p-2 border rounded text-sm ${
                      selectedSize === size
                        ? "border-pink-500 bg-pink-50 text-pink-600"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <Link
                href="#"
                className="text-sm text-gray-600 underline flex items-center"
              >
                Size chart
              </Link>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <Button className="w-full bg-amber-900 text-white hover:bg-amber-800 py-3 text-lg">
                ADD TO CART
              </Button>
            </div>

            {/* Additional Info */}
            <div className="space-y-2 text-sm text-gray-600">
              <p>Free shipping on orders above $85</p>
              <p>Designed in Canada</p>
              <p>Women owned and led</p>
            </div>

            {/* Bundle Section */}
            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">MAKE IT A SET</h3>
              <p className="text-sm text-gray-600 mb-4">
                Select your size below:
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={getImagePath("/triangle-bra.png")}
                      alt="Triangle Bra"
                      width={60}
                      height={60}
                      className="rounded"
                      quality={100}
                    />
                    <div>
                      <p className="font-medium">Triangle Bra</p>
                      <p className="text-sm text-gray-600">$59.00</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <select className="border rounded px-3 py-1 text-sm">
                      <option>Black / 2XS</option>
                    </select>
                    <Button size="sm" className="bg-amber-900 text-white">
                      ADD
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={getImagePath("/sporty-bralette.png")}
                      alt="Sporty Bralette"
                      width={60}
                      height={60}
                      className="rounded"
                      quality={100}
                    />
                    <div>
                      <p className="font-medium">Sporty Bralette</p>
                      <p className="text-sm text-gray-600">$49.00</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <select className="border rounded px-3 py-1 text-sm">
                      <option>Black / 2XS</option>
                    </select>
                    <Button size="sm" className="bg-amber-900 text-white">
                      ADD
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Collapsible Sections */}
            <div className="space-y-4 border-t pt-6">
              <details className="border-b pb-4">
                <summary className="font-semibold cursor-pointer flex items-center justify-between">
                  DETAILS
                  <Plus className="w-4 h-4" />
                </summary>
              </details>

              <details className="border-b pb-4">
                <summary className="font-semibold cursor-pointer flex items-center justify-between">
                  FABRIC + CARE
                  <Plus className="w-4 h-4" />
                </summary>
              </details>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            We also think you'll like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {recommendedProducts.map((product, index) => (
              <Link key={index} href={`/products/${product.id}`}>
                <Card className="border-0 shadow-none cursor-pointer group">
                  <CardContent className="p-0">
                    <div className="aspect-[3/4] relative mb-4">
                      <Badge className="absolute top-4 left-4 z-10 bg-pink-100 text-pink-600">
                        Bundle + Save
                      </Badge>
                      <Image
                        src={getImagePath(product.image)}
                        alt={product.name}
                        fill
                        className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        quality={100}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg font-bold">
                          {product.price}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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
      </div>

      <Footer />
    </div>
  );
}
