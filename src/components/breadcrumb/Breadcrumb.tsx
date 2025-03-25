import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex py-4 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
      <ol className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base">
        <li>
          <div className="flex items-center">
            <Link href="/" className="text-gray-500 hover:text-primary transition-colors duration-200">
              <HomeIcon className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRightIcon className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
            <div className="ml-1 md:ml-2">
              {index === items.length - 1 ? (
                <span className="font-medium text-gray-800">{item.label}</span>
              ) : (
                item.href ? (
                  <Link 
                    href={item.href} 
                    className="text-gray-500 hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-500">{item.label}</span>
                )
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}