"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Facebook } from "lucide-react";
import image1 from "../public/image1.png";
import image2 from "../public/image2.png";
import facebookIcon from "simple-icons/icons/facebook.svg";
import instagramIcon from "simple-icons/icons/instagram.svg";
import linkedinIcon from "simple-icons/icons/linkedin.svg";

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
      <div className="container max-w-6xl mt-12 px-4">
        {/* Social Media Icons
        <div className="flex gap-4 mb-8">
          <Link
            href="https://facebook.com"
            className="text-gray-600 hover:text-[#008060]"
          >
            <Image
              src={facebookIcon}
              alt="Facebook Logo"
              width={24}
              height={24}
            />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://instagram.com"
            className="text-gray-600 hover:text-[#008060]"
          >
            <Image
              src={instagramIcon}
              alt="Instagram Logo"
              width={24}
              height={24}
            />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-gray-600 hover:text-[#008060]"
          >
            <Image
              src={linkedinIcon}
              alt="LinkedIn Logo"
              width={24}
              height={24}
            />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div> */}

        {/* Legal Text Sections */}
        <div className="space-y-6 text-sm text-gray-600">
          <p>
            <sup>1</sup>Better Mortgage's One Day Mortgage™ promotion offers
            qualified customers who provide certain required financial
            information/documentation to Better Mortgage within 4 hours of
            locking a rate on a mortgage loan the opportunity to receive an
            underwriting determination from Better Mortgage within 24 hours of
            their rate lock. The underwriting determination is subject to
            customary terms, including fraud and anti-money laundering checks,
            that take place pre-closing and which may trigger additional
            required documentation from the customer. Better Mortgage does not
            guarantee that initial underwriting approval will result in a final
            underwriting approval. See{" "}
            <Link href="#" className="text-[#008060] hover:underline">
              One Day Mortgage™ Terms and Conditions
            </Link>
            .
          </p>

          <p>
            <sup>2</sup>Better Mortgage's One Day HELOC™ promotion offers
            qualified customers who provide certain required financial
            information/documentation to Better Mortgage within 4 hours of
            locking a rate on a HELOC loan the opportunity to receive an
            underwriting determination from Better Mortgage within 24 hours of
            their rate lock. The underwriting determination is subject to
            customary terms, including fraud and anti-money laundering checks,
            that take place pre-closing and which may trigger additional
            required documentation from the customer. Better Mortgage does not
            guarantee that initial underwriting approval will result in final
            underwriting approval. See{" "}
            <Link href="#" className="text-[#008060] hover:underline">
              One Day Heloc™ Terms and Conditions
            </Link>
            .
          </p>

          <p>
            <sup>3</sup>Assumes borrowers are eligible for the Automated
            Valuation Model (AVM) to calculate their home value, their loan
            amount is less than $400,000, all required documents are uploaded to
            their Better Mortgage online account within 24 hours of application,
            closing is scheduled for the earliest available date and time, and a
            notary is readily available. Funding timelines may vary and may be
            longer if an appraisal is required to calculate a borrower's home
            value.
          </p>

          <p>
            © 2025 Better Home & Finance Holding Company and/or its affiliates.
            Better is a family of companies. Better Mortgage Corporation
            provides home loans. Better Real Estate, LLC and Better Real Estate
            California Inc License # 02164055 provides real estate services.
            Better Cover, LLC sells insurance products; and Better Settlement
            Services provides title insurance services, and Better Inspect, LLC
            provides home inspection services. All rights reserved.
          </p>

          <p>
            Home lending products offered by Better Mortgage Corporation. Better
            Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade
            Center, 80th Floor, New York, NY 10007. Loans made or arranged
            pursuant to a California Finance Lenders Law License. Not available
            in all states. Equal Housing Lender.{" "}
            <Link href="#" className="text-[#008060] hover:underline">
              NMLS Consumer Access
            </Link>
          </p>

          <p>
            Better Real Estate, LLC dba BRE, Better Home Services, BRE Services,
            LLC and Better Real Estate, and operating in the State of California
            through its wholly owned subsidiary Better Real Estate California
            Inc., is a licensed real estate brokerage and maintains its
            corporate headquarters at 325-41 Chestnut Street, Suite 826,
            Philadelphia, PA 19106. Here is a full listing of Better Real
            Estate, LLC's{" "}
            <Link href="#" className="text-[#008060] hover:underline">
              license numbers
            </Link>
            . Better Real Estate, LLC provides access to real estate brokerage
            services via its nationwide network of partner brokerages and real
            estate agents ("Better Real Estate Partner Agents"). Equal Housing
            Opportunity. All rights reserved.
          </p>

          <div className="space-y-2">
            <Link href="#" className="text-[#008060] hover:underline block">
              New York State Housing and Anti-Discrimination Notice
            </Link>
            <Link href="#" className="text-[#008060] hover:underline block">
              New York Standard Operating Procedures
            </Link>
          </div>

          <p>
            Texas Real Estate Commission:{" "}
            <Link href="#" className="text-[#008060] hover:underline">
              Information About Brokerage Services
            </Link>{" "}
            |{" "}
            <Link href="#" className="text-[#008060] hover:underline">
              Consumer Protection Notice
            </Link>
          </p>

          <p>
            Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803,
            Philadelphia, PA 19106.
          </p>

          <p>
            Homeowners insurance policies are offered through Better Cover, LLC,
            a Pennsylvania Resident Producer Agency. License #881593. 325-41
            Chestnut Street, Suite 807, Philadelphia, PA 19106.
          </p>

          <p>
            Insurance quotes and policies are offered through Better Cover, LLC.
            A Pennsylvania Resident Producer Agency. License #881593. Here is a
            full listing of Better Cover, LLC's{" "}
            <Link href="#" className="text-[#008060] hover:underline">
              license numbers
            </Link>
            .
          </p>

          <p>
            Better Inspect, LLC maintains its corporate headquarters at 325-41
            Chestnut Street, Suite 846, Philadelphia, PA 19106.
          </p>

          <p>
            Better Mortgage Corporation, Better Real Estate, LLC, Better
            Settlement Services, LLC, Better Cover, LLC, Better Connect, and
            Better Inspect, LLC are separate operating subsidiaries of Better
            Home & Finance Holding Company. Each company is a separate legal
            entity operated and managed through its own management and
            governance structure as required by its state of incorporation, and
            applicable and legal and regulatory requirements. Products not
            available in all states.
          </p>

          <p>
            Any unauthorized use of any proprietary or intellectual property is
            strictly prohibited. All trademarks, service marks, trade names,
            logos, icons, and domain names are proprietary to Better Home &
            Finance Holding Company. Better Home & Finance Holding Company
            trademarks are federally registered with the U.S. Patent and
            Trademark Office. Better Cover is a registered trademark with the
            U.S. Patent and Trademark Office and is owned by Better Cover, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
