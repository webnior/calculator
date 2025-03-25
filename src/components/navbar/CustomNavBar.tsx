"use client"

import { Fragment, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react"
import {
  ArrowLongRightIcon,
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid"
import {
  ArrowPathIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { FcAbout } from "react-icons/fc"
import { GrAmazon } from "react-icons/gr"
import { LiaArtstation } from "react-icons/lia"
import { MdWork } from "react-icons/md"
import { RiContactsFill } from "react-icons/ri"
import { SiCoinmarketcap, SiFlipkart } from "react-icons/si"
import { TbBrandShopee } from "react-icons/tb"

import { Logo } from "./Logo"

const calculator = [
  {
    name: "Amazon",
    description: "Amazon seller fee & profit calculator",
    href: "/calculator/amazon",
    icon: GrAmazon,
  },
  {
    name: "Flipkart",
    description: "Flipkart seller fee & profit calculator",
    href: "/calculator/flipkart",
    icon: SiFlipkart,
  },
  {
    name: "Myntra",
    description: "Myntra seller fee & profit calculator",
    href: "/calculator/myntra",
    icon: SiCoinmarketcap,
  },
  {
    name: "AJIO",
    description: "AJIO seller fee & profit calculator",
    href: "/calculator/ajio",
    icon: LiaArtstation,
  },
]

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "tel:7451073504", icon: PhoneIcon },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function CustomNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white ">
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Logo />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Calculators
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 mt-3 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  <div className="mb-4">
                    <Link
                      href="/calculator"
                      className="text-xl font-semibold text-gray-900 hover:text-indigo-600"
                    >
                      Our Calculators
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 gap-y-2">
                    {calculator.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-4 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white group-hover:shadow-md">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            href={item.href}
                            className="block font-semibold text-gray-900 group-hover:text-indigo-600"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 px-8 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold leading-6 text-gray-900">
                        Technovita Solution
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-gray-600">
                        One-stop solution for all your e-commerce needs
                      </p>
                    </div>
                    <Link
                      href="https://technovitasolution.in"
                      className="flex items-center gap-x-1 rounded-full bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      View All
                      <ArrowLongRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link href="/seller-services">Seller Services</Link>
        </Popover.Group>
        <div className="flex lg:flex-1"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"> Technovita Solution</span>

              <h1>TECHNOVITA</h1>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Calculators
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {calculator.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                        <Disclosure.Button
                          as="a"
                          href="https://technovitasolution.in"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-indigo-600 hover:bg-gray-50"
                        >
                          View All Calculators
                        </Disclosure.Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                  href="/seller-services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Seller Services
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
