import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Usage example:
// getImagePath('/product-1.png', false) -> '/product-1.png' (localhost)
// getImagePath('/product-1.png', true) -> '/huha-demo/product-1.png' (GitHub Pages)
export function getImagePath(
  imagePath: string,
  isProduction: boolean = true
): string {
  if (isProduction) {
    return `/huha-demo${imagePath}`;
  }
  return imagePath;
}
