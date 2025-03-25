import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const FloatingButtons = () => {
  // WhatsApp number - replace with the actual number
  const whatsappNumber = '917451073504';
  // Phone number - replace with the actual number
  const phoneNumber = '+917451073504';

  return (
    <>
      {/* Call Button - Left Bottom Corner */}
      <Link 
        href={`tel:${phoneNumber}`}
        className="fixed left-4 bottom-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:bg-blue-700 hover:scale-110 animate-wave origin-bottom"
        aria-label="Call us"
      >
        <FaPhone className="h-5 w-5" />
      </Link>

      {/* WhatsApp Button - Right Bottom Corner */}
      <Link 
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-110 animate-wave origin-bottom"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-5 w-5" />
      </Link>
    </>
  );
};

export default FloatingButtons;
