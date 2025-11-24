import { clsx, type ClassValue } from "clsx";

// Custom cn function without tailwind-merge (which was removed)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
