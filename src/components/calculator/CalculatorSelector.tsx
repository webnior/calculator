'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ShoppingBagIcon, 
  ShoppingCartIcon, 
  TagIcon, 
  BuildingStorefrontIcon 
} from '@heroicons/react/24/outline';

interface CalculatorOption {
  name: string;
  path: string;
  icon: React.ReactNode;
  color: string;
}

export default function CalculatorSelector() {
  const pathname = usePathname();
  
  const calculators: CalculatorOption[] = [
    {
      name: 'Amazon',
      path: '/calculator/amazon',
      icon: <ShoppingCartIcon className="h-6 w-6" />,
      color: 'bg-orange-100 text-orange-600 border-orange-200 hover:bg-orange-200'
    },
    {
      name: 'Flipkart',
      path: '/calculator/flipkart',
      icon: <ShoppingBagIcon className="h-6 w-6" />,
      color: 'bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200'
    },
    {
      name: 'Myntra',
      path: '/calculator/myntra',
      icon: <TagIcon className="h-6 w-6" />,
      color: 'bg-pink-100 text-pink-600 border-pink-200 hover:bg-pink-200'
    },
    {
      name: 'Ajio',
      path: '/calculator/ajio',
      icon: <BuildingStorefrontIcon className="h-6 w-6" />,
      color: 'bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-200'
    }
  ];

  return (
    <div className="w-full mb-6">
      <h3 className="text-lg font-medium mb-3">Other Calculators</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {calculators.map((calculator) => {
          const isActive = pathname === calculator.path;
          
          if (isActive) {
            return null; // Don't show the current calculator
          }
          
          return (
            <Link 
              key={calculator.name}
              href={calculator.path}
              className={`
                flex flex-col items-center justify-center p-4 rounded-lg
                border transition-all duration-200 
                ${calculator.color}
                transform hover:scale-105 hover:shadow-md
              `}
            >
              <div className="mb-2">
                {calculator.icon}
              </div>
              <span className="font-medium">{calculator.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
