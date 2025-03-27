"use client";

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
});

type FormValues = z.infer<typeof formSchema>;

// Platform-specific offers
const platformOffers = {
  amazon: {
    title: "Amazon Seller Growth Offer",
    description: "Get a FREE 10-minute consultation worth ₹3,000 to boost your Amazon sales!",
    callText: "Speak with an Amazon Expert Now",
  },
  flipkart: {
    title: "Flipkart Seller Special",
    description: "Claim your FREE 10-minute strategy session worth ₹3,000 to maximize your Flipkart profits!",
    callText: "Talk to a Flipkart Specialist",
  },
  myntra: {
    title: "Myntra Growth Package",
    description: "Unlock a FREE 10-minute consultation worth ₹3,000 to scale your Myntra business!",
    callText: "Connect with a Myntra Expert",
  },
  ajio: {
    title: "AJIO Seller Exclusive",
    description: "Receive a FREE 10-minute consultation worth ₹3,000 to optimize your AJIO performance!",
    callText: "Speak with an AJIO Specialist",
  },
  default: {
    title: "E-commerce Growth Offer",
    description: "Get a FREE 10-minute consultation worth ₹3,000 to accelerate your e-commerce business!",
    callText: "Talk to an E-commerce Expert",
  },
};

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [platform, setPlatform] = useState<keyof typeof platformOffers>('default');
  const pathname = usePathname();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  // Detect platform from URL
  useEffect(() => {
    const currentPath = pathname || '';
    
    if (currentPath.includes('/calculator/amazon')) {
      setPlatform('amazon');
    } else if (currentPath.includes('/calculator/flipkart')) {
      setPlatform('flipkart');
    } else if (currentPath.includes('/calculator/myntra')) {
      setPlatform('myntra');
    } else if (currentPath.includes('/calculator/ajio')) {
      setPlatform('ajio');
    } else {
      setPlatform('default');
    }
  }, [pathname]);

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          platform: platform,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        // Close popup after 3 seconds
        setTimeout(() => {
          setIsOpen(false);
          // Reset success state after popup is closed
          setTimeout(() => {
            setIsSuccess(false);
          }, 500);
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Phone number for direct call
  const phoneNumber = '+917451073504';

  const offer = platformOffers[platform];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-800"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FaTimes className="h-5 w-5" />
            </button>

            <div className="mb-6 text-center">
              <div className="mb-2 inline-block rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">{offer.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{offer.description}</p>
            </div>

            {isSuccess ? (
              <div className="rounded-lg bg-green-100 p-4 text-center dark:bg-green-900">
                <svg className="mx-auto mb-2 h-10 w-10 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h4 className="mb-1 text-lg font-semibold text-green-800 dark:text-green-200">Thank You!</h4>
                <p className="text-green-700 dark:text-green-300">We&apos;ll contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    {...register('name')}
                    className={`w-full rounded-lg border p-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    {...register('phone')}
                    className={`w-full rounded-lg border p-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
                </button>
              </form>
            )}

            <div className="mt-4">
              <a
                href={`tel:${phoneNumber}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-blue-600 bg-transparent px-5 py-2.5 text-center text-sm font-medium text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
              >
                <FaPhone className="h-4 w-4" />
                {offer.callText}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadPopup;
