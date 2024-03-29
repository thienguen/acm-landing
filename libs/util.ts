import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * @returns merge tailwind is a godsend of a utility
 * this place is throwing stuff inside
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
