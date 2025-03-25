"use client"

import React from "react"
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react"

import {
  Activity,
  ChevronDown,
  Flash,
  Lock,
  Scale,
  Server,
  TagUser,
} from "./Icons"
import { Logo } from "./Logo"

export default function CNavbar() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  }

  return (
    <Navbar>
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">TECH.V</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="Effortless Seller Onboarding for eCommerce Success"
              startContent={icons.scale}
            >
              Seller Onboarding Services
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Calculators
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Calculator options"
            className="w-[480px] p-0"
            itemClasses={{
              base: "data-[hover=true]:bg-transparent",
            }}
          >
            <div className="flex flex-col p-0 overflow-hidden rounded-lg">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
                <h3 className="text-xl font-bold">Fee Calculators</h3>
                <p className="text-sm opacity-90">Estimate your profits across marketplaces</p>
              </div>
              
              {/* Content */}
              <div className="p-3 bg-background">
                <div className="grid grid-cols-2 gap-4">
                  {/* Amazon */}
                  <div className="group cursor-pointer">
                    <div className="p-4 rounded-xl border border-neutral-200 bg-white hover:border-primary hover:shadow-md transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                            <line x1="7" y1="7" x2="7.01" y2="7"></line>
                          </svg>
                        </div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Amazon Calculator</h4>
                      </div>
                      <p className="text-xs text-default-500 leading-relaxed">Calculate fees, commissions, and estimated profits for Amazon marketplace sellers.</p>
                    </div>
                  </div>
                  
                  {/* Flipkart */}
                  <div className="group cursor-pointer">
                    <div className="p-4 rounded-xl border border-neutral-200 bg-white hover:border-primary hover:shadow-md transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                          </svg>
                        </div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Flipkart Calculator</h4>
                      </div>
                      <p className="text-xs text-default-500 leading-relaxed">Calculate fees, commissions, and estimated profits for Flipkart marketplace sellers.</p>
                    </div>
                  </div>
                  
                  {/* Myntra */}
                  <div className="group cursor-pointer">
                    <div className="p-4 rounded-xl border border-neutral-200 bg-white hover:border-primary hover:shadow-md transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                            <path d="M20.38 3.46L16 2a4 4 0 0 1 1.63 3.61l.01 12.18A4.99 4.99 0 0 1 24 22c-1.53 0-2.9-.76-3.73-1.92v.02c-.35-.54-.27-1.2.01-1.84a4.01 4.01 0 0 1-1.6 1.73H8c-3.35 0-6-2.57-6.54-5.84"></path>
                            <path d="M6.67 20h13.66a4 4 0 0 0 4-4V4.34a4 4 0 0 0-4-4H6.67a4 4 0 0 0-4 4V16a4 4 0 0 0 4 4z"></path>
                          </svg>
                        </div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Myntra Calculator</h4>
                      </div>
                      <p className="text-xs text-default-500 leading-relaxed">Calculate fees, commissions, and estimated profits for Myntra marketplace sellers.</p>
                    </div>
                  </div>
                  
                  {/* Ajio */}
                  <div className="group cursor-pointer">
                    <div className="p-4 rounded-xl border border-neutral-200 bg-white hover:border-primary hover:shadow-md transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 1 2 1.61h9.72a2 2 0 0 1 2-1.61L23 6H6"></path>
                          </svg>
                        </div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Ajio Calculator</h4>
                      </div>
                      <p className="text-xs text-default-500 leading-relaxed">Calculate fees, commissions, and estimated profits for Ajio marketplace sellers.</p>
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="mt-3 pt-3 border-t border-neutral-200 text-center">
                  <span className="text-xs text-default-500">Need help with calculations? <a href="#" className="text-primary hover:underline">Contact our support team</a></span>
                </div>
              </div>
            </div>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Company
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="Effortless Seller Onboarding for eCommerce Success"
              startContent={icons.scale}
            >
              Seller Onboarding Services
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
