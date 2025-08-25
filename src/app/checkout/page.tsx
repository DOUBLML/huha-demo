"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { getImagePath } from "@/lib/utils";

export default function CheckoutPage() {
  const router = useRouter();
  const [productData, setProductData] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("British Columbia");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("Canada");
  const [phone, setPhone] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [emailOffers, setEmailOffers] = useState(true);
  const [textOffers, setTextOffers] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Get product data from localStorage
    const savedProduct = localStorage.getItem("checkoutProduct");
    if (savedProduct) {
      setProductData(JSON.parse(savedProduct));
    }
  }, []);

  const subtotal = productData?.price
    ? parseFloat(productData.price.replace("$", ""))
    : 28.0;
  const taxes = 3.36;
  const total = subtotal + taxes;

  const handleApplyDiscount = () => {
    console.log("Applying discount:", discountCode);
  };

  const handlePayNow = () => {
    // Navigate to success page
    router.push("/success");
  };

  if (!productData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Loading checkout...
          </h2>
          <p className="text-gray-600">Preparing your order</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Checkout Form */}
          <div className="space-y-8">
            {/* Express Checkout */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Express checkout
              </h2>
              <div className="grid grid-cols-3 gap-3">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md">
                  <span className="font-semibold">Shop</span>
                  <span className="ml-1 font-normal">Pay</span>
                </Button>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-md font-semibold">
                  PayPal
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white py-3 rounded-md">
                  <span className="mr-2">G</span>Pay
                </Button>
              </div>
              <div className="text-center text-gray-500 text-sm my-4">OR</div>
            </div>

            {/* Contact */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Contact</h2>
                <a href="#" className="text-sm text-gray-600 underline">
                  Log in
                </a>
              </div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
              <div className="flex items-center space-x-2 mt-3">
                <Checkbox
                  id="email-offers"
                  checked={emailOffers}
                  onCheckedChange={(checked) =>
                    setEmailOffers(checked as boolean)
                  }
                />
                <label htmlFor="email-offers" className="text-sm text-gray-600">
                  Email me with news and offers
                </label>
              </div>
            </div>

            {/* Bundle Notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
              <p className="text-sm font-medium text-amber-800">
                KEEP BUNDLING! ADD 1 MORE ITEM TO SAVE 5% OFF
              </p>
            </div>

            {/* Product Items */}
            <div className="space-y-4">
              {/* Main Product */}
              {/* <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Image
                    src={getImagePath("/p-1.jpg")}
                    alt={productData.name}
                    width={60}
                    height={60}
                    className="rounded object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{productData.name}</p>
                    <p className="text-sm text-gray-600">{productData.selectedColor}</p>
                    <p className="text-sm font-medium">{productData.price}</p>
                  </div>
                </div>
                <Button 
                  className="text-white"
                  style={{ backgroundColor: "#92400e" }}
                >
                  ADD TO ORDER
                </Button>
              </div> */}

              {/* Bundle Product */}
              {/* <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Image
                    src={getImagePath("/p-1.jpg")}
                    alt="Bikini"
                    width={60}
                    height={60}
                    className="rounded object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Bikini</p>
                    <p className="text-sm text-gray-600">Green / 2XS</p>
                    <p className="text-sm font-medium">CA$28.00</p>
                  </div>
                </div>
                <select className="border border-gray-300 rounded px-3 py-2 text-sm">
                  <option>Green / 2XS</option>
                </select>
                <Button 
                  className="text-white"
                  style={{ backgroundColor: "#92400e" }}
                >
                  ADD TO ORDER
                </Button>
              </div> */}
            </div>

            {/* Delivery */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Delivery
              </h2>

              <div className="space-y-4">
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  <option>Canada</option>
                </select>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <Input
                  placeholder="Company (optional)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />

                <div className="relative">
                  <Input
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    🔍
                  </Button>
                </div>

                <Input
                  placeholder="Apartment, suite, etc. (optional)"
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                />

                <div className="grid grid-cols-3 gap-4">
                  <Input
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <select className="border border-gray-300 rounded px-3 py-2">
                    <option>British Columbia</option>
                  </select>
                  <Input
                    placeholder="Postal code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>

                <Input
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Shipping Method Notice */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Shipping method
                </h3>
                <p className="text-sm text-gray-600">
                  Please select your preferred shipping method.
                </p>

                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">
                    In light of ongoing Canada Post labour negotiations, we've
                    switched to alternate couriers to avoid delivery
                    disruptions. Shipping timelines are expected to remain the
                    same.
                  </p>
                </div>

                <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800">
                    Enter your shipping address to view available shipping
                    methods.
                  </p>
                </div>
              </div>

              {/* Text Offers */}
              <div className="mt-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="text-offers"
                    checked={textOffers}
                    onCheckedChange={(checked) =>
                      setTextOffers(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="text-offers"
                    className="text-sm text-gray-600"
                  >
                    Text me with news and offers
                  </label>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Payment
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                All transactions are secure and encrypted.
              </p>

              <div className="space-y-4">
                {/* Credit Card */}
                <div className="border border-gray-300 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="payment"
                        defaultChecked
                        className="w-4 h-4"
                      />
                      <label className="font-medium">Credit card</label>
                    </div>
                    <div className="flex space-x-2">
                      {/* <Image src={getImagePath("/visa-icon.png")} alt="Visa" width={24} height={16} />
                      <Image src={getImagePath("/mastercard-icon.png")} alt="Mastercard" width={24} height={16} />
                      <Image src={getImagePath("/amex-icon.png")} alt="Amex" width={24} height={16} /> */}
                      <span className="text-xs text-gray-500">Visa</span>
                      <span className="text-xs text-gray-500">MasterCard</span>
                      <span className="text-xs text-gray-500">
                        American Express
                      </span>
                      <span className="text-xs text-gray-500">+3</span>
                    </div>
                  </div>

                  <Input
                    placeholder="Card number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="mb-4"
                  />

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Input
                      placeholder="Expiration date (MM / YY)"
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)}
                    />
                    <Input
                      placeholder="Security code"
                      value={securityCode}
                      onChange={(e) => setSecurityCode(e.target.value)}
                    />
                  </div>

                  <Input
                    placeholder="Name on card"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                  />
                </div>

                {/* PayPal */}
                <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="payment" className="w-4 h-4" />
                    <label className="font-medium">PayPal</label>
                  </div>
                  <div className="text-blue-600 font-bold">PayPal</div>
                </div>

                {/* Sezzle */}
                <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="payment" className="w-4 h-4" />
                    <label className="font-medium">
                      Buy Now, Pay Later with Sezzle
                    </label>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div className="mt-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Checkbox
                    id="billing-address"
                    checked={useShippingAsBilling}
                    onCheckedChange={(checked) =>
                      setUseShippingAsBilling(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="billing-address"
                    className="text-sm text-gray-600"
                  >
                    Use shipping address as billing address
                  </label>
                </div>
              </div>
            </div>

            {/* Remember Me */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Remember me
              </h2>
              <div className="flex items-center space-x-2 mb-4">
                <Checkbox
                  id="save-info"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                />
                <label htmlFor="save-info" className="text-sm text-gray-600">
                  Save my information for a faster checkout with a Shop account
                </label>
              </div>

              <Input
                placeholder="Mobile phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mb-4"
              />
            </div>

            {/* Pay Now Button */}
            <div className="pt-4">
              <Button
                onClick={handlePayNow}
                className="w-full py-4 text-lg font-medium text-white transition-all duration-200 hover:shadow-lg"
                style={{ backgroundColor: "#92400e" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#78350f";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#92400e";
                }}
              >
                Pay now
              </Button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Your info will be saved to a Shop account. By continuing, you
                agree to Shop's{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>{" "}
                and acknowledge the{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:sticky lg:top-8 space-y-6">
            {/* Product Summary */}
            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image
                      src={getImagePath("/p-1.jpg")}
                      alt={productData.name}
                      width={60}
                      height={60}
                      className="rounded object-cover"
                    />
                    <Badge className="absolute -top-2 -right-2 bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      1
                    </Badge>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {productData.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {productData.selectedColor}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded">
                    -
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded">
                    +
                  </button>
                  <span className="font-medium">{productData.price}</span>
                </div>
              </div>

              {/* Peach Perks Notice */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700">
                  Don't miss out!{" "}
                  <a href="#" className="text-pink-600 underline">
                    Log in
                  </a>{" "}
                  to Peach Perks to earn or redeem.
                </p>
              </div>

              {/* Discount Code */}
              <div className="flex space-x-2 mb-6">
                <Input
                  placeholder="Discount code or gift card"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="flex-1"
                />
                <Button
                  onClick={handleApplyDiscount}
                  variant="outline"
                  className="text-gray-700 border-gray-300"
                >
                  Apply
                </Button>
              </div>

              {/* Order Total */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{productData.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-gray-500">Enter shipping address</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated taxes</span>
                  <span>$3.36</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t">
                  <span>Total</span>
                  <span>
                    <span className="text-sm text-gray-500 mr-2">CAD</span>$
                    {total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">
              Refund policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Shipping
            </a>
            <a href="#" className="hover:text-gray-900">
              Privacy policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
