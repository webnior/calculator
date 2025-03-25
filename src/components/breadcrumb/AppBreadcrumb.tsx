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

export default function AppBreadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex py-3 px-2 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link 
            href="/" 
            className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
          >
            <HomeIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRightIcon 
              className="h-4 w-4 mx-2 text-gray-400 flex-shrink-0" 
              aria-hidden="true" 
            />
            {index === items.length - 1 ? (
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {item.label}
              </span>
            ) : (
              item.href ? (
                <Link 
                  href={item.href} 
                  className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-500 dark:text-gray-400">
                  {item.label}
                </span>
              )
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
