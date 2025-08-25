"use client";

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              HÜHA™ embraces your body, as it is
            </h3>
            <p className="text-sm text-amber-100 mb-6">
              We design thoughtful skin-layer garments for bodies that breathe,
              sweat, move, and live. We obsess over fit, comfort, and functional
              fabrics because we think your underwear should work with your
              body, not against it.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5" />
              <Instagram className="h-5 w-5" />
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4">EXPLORE</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-amber-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Peach Perks
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Email & SMS Sign-up
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Refer a Friend
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Gift Card
                </Link>
              </li>
            </ul>
          </div>

          {/* More Info */}
          <div>
            <h4 className="font-semibold mb-4">MORE INFO</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Size Chart
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Find a Retailer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Become a Stockist
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Influencers
                </Link>
              </li>
            </ul>
          </div>

          {/* Help/Support */}
          <div>
            <h4 className="font-semibold mb-4">HELP/SUPPORT</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Make a Return
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-amber-800 text-sm">
          <p>🇨🇦 CAD</p>
          <p className="mt-2">
            © 2025 © Huha | Terms of Service | Privacy + Cookies
          </p>
        </div>
      </div>
    </footer>
  );
}
