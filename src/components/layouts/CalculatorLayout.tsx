import React, { ReactNode } from 'react';
import Breadcrumb from '../breadcrumb/Breadcrumb';

interface CalculatorLayoutProps {
  children: ReactNode;
  title?: string;
  platform?: 'amazon' | 'flipkart' | 'myntra' | 'ajio';
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function CalculatorLayout({ 
  children, 
  title,
  platform 
}: CalculatorLayoutProps) {
  // Define breadcrumb items based on the platform
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Calculators', href: '/calculators' },
  ];

  if (platform) {
    const platformLabel = platform.charAt(0).toUpperCase() + platform.slice(1);
    breadcrumbItems.push({ label: `${platformLabel} Calculator`, href: `/calculators/${platform}` });
  }

  // Add title as the last breadcrumb item if provided and different from platform
  if (title && (!platform || title !== `${platform.charAt(0).toUpperCase() + platform.slice(1)} Calculator`)) {
    breadcrumbItems.push({ label: title, href: '' });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbItems} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {title && (
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          </div>
        )}
        
        {children}
      </main>
    </div>
  );
}
