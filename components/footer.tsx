"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import image1 from "../public/image1.png";
import image2 from "../public/image2.png";
interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function Accordion({ title, children, isOpen, onToggle }: AccordionProps) {
  return (
    <div className="border-b border-gray-200 lg:border-none">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-bold text-lg lg:hidden"
        onClick={onToggle}
      >
        {title}
        <ChevronDown
          className={`h-5 w-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-in-out lg:max-h-full lg:opacity-100`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    resources: false,
    company: false,
    contact: false,
    legal: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="max-w-6xl ml-16 py-8 lg:py-12 bg-white">
      <div className="container  px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-8">
          {/* Company Info Column - Always Expanded */}
          <div className="space-y-6 lg:space-y-8 py-4 lg:py-0">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <span className="text-[#008060] text-xl lg:text-2xl font-bold">
                  Better
                </span>
              </Link>
              <p className="text-gray-600 text-sm">
                Better is a family of companies serving all your homeownership
                needs.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Mortgage",
                  description:
                    'We can\'t wait to say "Welcome home." Apply 100% online, with expert customer support.',
                },
                {
                  title: "Real Estate",
                  description:
                    "Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.",
                },
                {
                  title: "Cover",
                  description:
                    "Shop, bundle, and save on insurance coverage for home, auto, life, and more.",
                },
                {
                  title: "Inspect",
                  description:
                    "Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.",
                },
                {
                  title: "Settlement Services",
                  description:
                    "Get transparent rates when you shop for title insurance all in one convenient place.",
                },
              ].map((service) => (
                <div key={service.title} className="space-y-2">
                  <h3 className="font-bold flex items-center gap-1">
                    <span className="text-[#008060]">Better</span>
                    <span className="text-gray-500">{service.title}</span>
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Column */}
          <Accordion
            title="Resources"
            isOpen={openSections.resources}
            onToggle={() => toggleSection("resources")}
          >
            <div className="space-y-4 pb-4 lg:pb-0">
              <h2 className="font-bold text-lg hidden lg:block">Resources</h2>
              <ul className="space-y-3">
                {[
                  "Home affordability calculator",
                  "Mortgage calculator",
                  "Free mortgage calculator",
                  "Mortgage calculator with taxes",
                  "Mortgage calculator with PMI",
                  "Rent vs buy calculator",
                  "HELOC payment calculator",
                  "HELOC vs cash-out refinance calculator",
                  "Buy a home",
                  "Sell a home",
                  "Get home inspection",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-[#008060] text-sm block py-1"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Accordion>

          {/* Company Column */}
          <Accordion
            title="Company"
            isOpen={openSections.company}
            onToggle={() => toggleSection("company")}
          >
            <div className="space-y-4 pb-4 lg:pb-0">
              <h2 className="font-bold text-lg hidden lg:block">Company</h2>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Careers",
                  "Media",
                  "Partner With Us",
                  "Learning center",
                  "FAQs",
                  "Investor Relations",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-[#008060] text-sm block py-1"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Accordion>

          {/* Contact & Legal Column */}
          <div className="space-y-6 lg:space-y-8">
            <Accordion
              title="Contact Us"
              isOpen={openSections.contact}
              onToggle={() => toggleSection("contact")}
            >
              <div className="space-y-4 pb-4 lg:pb-0">
                <h2 className="font-bold text-lg hidden lg:block">
                  Contact Us
                </h2>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="mailto:hello@better.com"
                      className="text-gray-600 hover:text-[#008060] text-sm block py-1"
                    >
                      hello@better.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:415-523-8837"
                      className="text-gray-600 hover:text-[#008060] text-sm block py-1"
                    >
                      415-523-8837
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-[#008060] text-sm block py-1"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-[#008060] text-sm block py-1"
                    >
                      Glossary
                    </Link>
                  </li>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Legal"
              isOpen={openSections.legal}
              onToggle={() => toggleSection("legal")}
            >
              <div className="space-y-4 pb-4 lg:pb-0">
                <h2 className="font-bold text-lg hidden lg:block">Legal</h2>
                <ul className="space-y-3">
                  {[
                    "NMLS Consumer Access",
                    "Privacy Policy",
                    "Terms of Use",
                    "Disclosures & Licensing",
                    "Affiliated Business",
                    "Browser Disclaimer",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-[#008060] text-sm block py-1"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Accordion>

            <div className="flex gap-2 pt-4 lg:pt-0">
              <Image
                src={image1}
                alt="Equal Housing Lender"
                width={55}
                height={55}
                className="object-contain"
              />
              <Image
                src={image2}
                alt="Equal Housing Opportunity"
                width={55}
                height={55}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
