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

import { Logo } from "./Logo"

const calculator = [
  {
    name: "Amazon",
    description: "Get a better understanding traffic",
    href: "/calculator/amazon",
    icon: ChartPieIcon,
  },
  {
    name: "Flipkart",
    description: "Speak directly to your customers",
    href: "/calculator/flipkart",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Myntra",
    description: "Your customers’ data will be safe",
    href: "/calculator/myntra",
    icon: FingerPrintIcon,
  },
  {
    name: "Shopsy",
    description: "Connect with third-party tools",
    href: "/calculator/shopsy",
    icon: SquaresPlusIcon,
  },
  {
    name: "AJIO",
    description: "Build strategic funnels that will convert",
    href: "/calculator/ajio",
    icon: ArrowPathIcon,
  },
]
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
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
          <Popover className="">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Products
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
              <Popover.Panel className="absolute left-0 mr-5 top-full z-10 mt-3 w-screen max-w-full overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="flex flex-row justify-between">
                  <div className=" flex flex-col">
                    <div className="pl-16 pt-6">
                      <h1 className="text-2xl font-sans font-semibold">
                        Our Plateforms
                      </h1>
                    </div>
                    <div className="flex flex-row px-10">
                      <div className="p-2">
                        {products.map((item) => (
                          <div
                            key={item.name}
                            className="group relative my-2 flex items-center gap-x-2 rounded-xl p-4 text-sm leading-6 hover:bg-gray-100 border-2 border-gray-900/5 cursor-pointer"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon
                                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="flex-auto">
                              <Link
                                href={item.href}
                                className="block font-semibold text-gray-900"
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
                      <div className="p-2">
                        {products.map((item) => (
                          <div
                            key={item.name}
                            className="group relative my-2 flex items-center gap-x-6 rounded-xl p-4 text-sm leading-6 hover:bg-gray-100 border-2 border-gray-900/5 cursor-pointer"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon
                                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="flex-auto">
                              <Link
                                href={item.href}
                                className="block font-semibold text-gray-900"
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
                  </div>
                  <div className="p-2 flex flex-col justify-around">
                    <div className="  cursor-pointer max-w-[400px] max-h-[400px]">
                      <div className="rounded-xl">
                        <Image
                          width={390}
                          height={180}
                          src="/nav2.webp"
                          alt={"whatever"}
                        />
                      </div>
                      <h2 className="py-2 font-bold font-[#555]">
                        GoFynd : The trendiest fashon marketplace
                      </h2>
                    </div>
                    <div className="  cursor-pointer max-w-[400px] max-h-[400px]">
                      <div className="rounded-xl">
                        <Image
                          width={390}
                          height={180}
                          src="/nav3.webp"
                          alt={"whatever"}
                        />
                      </div>
                      <h2 className="py-2 font-bold font-[#555]">
                        ConvertFiles.ai : Convert Image to any format
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="">
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
              <Popover.Panel className="absolute left-0 mr-5 top-full z-10 mt-3 w-screen max-w-full overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="flex flex-row justify-between">
                  <div className=" flex flex-col">
                    <div className="pl-16 pt-6">
                      <Link
                        href="/calculator"
                        className="text-2xl font-sans font-semibold"
                      >
                        Our Calculators
                      </Link>
                    </div>
                    <div className="flex flex-row px-10">
                      <div className="p-2">
                        {calculator.map((item) => (
                          <div
                            key={item.name}
                            className="group relative my-2 flex items-center gap-x-2 rounded-xl p-4 text-sm leading-6 hover:bg-gray-100 border-2 border-gray-900/5 cursor-pointer"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon
                                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="flex-auto">
                              <Link
                                href={item.href}
                                className="block font-semibold text-gray-900"
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
                      <div className="p-2">
                        {calculator.map((item) => (
                          <div
                            key={item.name}
                            className="group relative my-2 flex items-center gap-x-6 rounded-xl p-4 text-sm leading-6 hover:bg-gray-100 border-2 border-gray-900/5 cursor-pointer"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon
                                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="flex-auto">
                              <Link
                                href={item.href}
                                className="block font-semibold text-gray-900"
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
                  </div>
                  <div className="p-2 flex flex-col justify-between">
                    <div className="  cursor-pointer max-w-[400px] max-h-[400px]">
                      <div className="rounded-xl">
                        <Image
                          width={390}
                          height={180}
                          src="/nav1.webp"
                          alt={"whatever"}
                        />
                      </div>
                      <h2 className="py-2 font-bold font-[#555]">
                        Fynd Store OS
                      </h2>

                      <p>
                        The ultimate store management platform. Elevate store
                        experiences for everyone, powered by our cloud-based,
                        in-store solution. Delight customers, empower store
                        staff, boost sales, and simplify operations, all through
                        a mobile app.
                      </p>
                    </div>
                    <div>
                      <button className=" flex w-auto gap-2 text-white content-center justify-around bg-[#2f31ac] rounded-full p-2 place-content-center px-5">
                        <h1 className="text-base text-center">try now</h1>
                        <ArrowLongRightIcon
                          className="h-6 w-6 text-white-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/marketplace"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Marketplace
          </Link>
          <Link
            href="/company"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Company
          </Link>
          <Link href="/seller-services">seller-services</Link>
          <Link href="/career">Career</Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact Us <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
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
              <span className="sr-only">Your Company</span>

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
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
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
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
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
