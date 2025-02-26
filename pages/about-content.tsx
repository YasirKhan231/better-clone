"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import city from "../public/citi.png";
import softbank from "../public/softbank.png";
import ally from "../public/city.png";

import amercanexpress from "../public/americanexpress.png";
export default function AboutContent() {
  const openYoutubeVideo = () => {
    window.open("https://youtu.be/1KjYlLBM9j4", "_blank");
  };

  return (
    <main className="w-full">
      {/* Mission Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-6">
          <h2 className="text-[#008060] font-semibold text-xl">Our mission</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-5xl mx-auto">
            We're making homeownership simpler, faster — and most importantly,
            more accessible for all Americans.
          </h1>
        </div>
      </section>

      {/* Status Quo Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
            onClick={openYoutubeVideo}
          >
            <Button
              variant="secondary"
              size="icon"
              className="absolute inset-0 m-auto rounded-full w-16 h-16 z-10 pointer-events-none"
            >
              <Play className="w-8 h-8" />
            </Button>
            <iframe
              src="https://www.youtube.com/embed/1KjYlLBM9j4"
              title="Vishal Garg's Story"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-medium">
              The status quo is broken
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The traditional processes around homeownership are opaque and
              stressful. Fees aren't transparent and some are simply outrageous
              in size. Traditional mortgage lending is rife with unnecessary
              fees and slow, painful processes. It's a system set up to benefit
              insiders — not you. Better.com CEO, Vishal Garg, set out to change
              that.
            </p>
            <Button
              className="bg-[#008060] hover:bg-[#008060]/90"
              onClick={openYoutubeVideo}
            >
              Read Vishal's story
            </Button>
          </div>
        </div>
      </section>

      {/* How We're Changing Things Section */}
      <section className="bg-[#008060] text-white py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">
            How we're changing things
          </h2>
          <div className="space-y-6 text-lg">
            <p>
              Homeownership is a huge part of our economy. Housing overall is a
              $33 trillion business, and mortgages account for $15 trillion. Yet
              home finance operates in the same way it has for decades — through
              opaque systems and expensive intermediaries whose interests are
              misaligned with consumers'.
            </p>
            <p>
              That's why Better.com is redefining the homeownership process from
              the ground up. We're using technology to make it faster and more
              efficient, and humans to help make it friendly and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-medium text-center mb-16">
          Company timeline
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200" />
          {[
            {
              year: "2014",
              content:
                "After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
              align: "right",
            },
            {
              year: "2015",
              content:
                "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
              align: "left",
            },
            {
              year: "2016",
              content:
                "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
              align: "right",
            },
            {
              year: "2017",
              content:
                "Better expands into the real estate market with Better Real Estate.",
              align: "left",
            },
            {
              year: "2018",
              content:
                "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
              align: "right",
            },
            {
              year: "2019",
              content:
                "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
              align: "left",
            },
            {
              year: "2021",
              content:
                "Better acquires Trussle — The UK's most innovative online mortgage broker.",
              align: "right",
            },
            {
              year: "2022",
              content:
                "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
              align: "left",
            },
            {
              year: "2023",
              content:
                "Better Mortgage launches One Day Mortgage: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
              align: "right",
            },
            {
              year: "2024",
              content:
                "Better continues to innovate and expand its services, making homeownership even more accessible and efficient for all Americans.",
              align: "left",
            },
            {
              year: "Today",
              content:
                "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
              align: "right",
            },
          ].map((item, index) => (
            <div key={item.year} className="relative mb-12">
              <div
                className={`grid grid-cols-[1fr,auto,1fr] gap-4 items-start ${
                  item.align === "left" ? "" : "text-right"
                }`}
              >
                <div
                  className={`${
                    item.align === "left" ? "col-start-3" : "col-start-1"
                  } bg-gray-100 p-6 rounded-lg`}
                >
                  <p className="text-gray-600">{item.content}</p>
                </div>
                <div className="flex items-center justify-center z-10">
                  <div className="bg-[#008060] text-white px-4 py-2 rounded-full text-sm font-medium">
                    {item.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-[#008060] hover:bg-[#008060]/90 text-white px-8 py-3 rounded-full text-lg font-medium">
            Get Started
          </Button>
        </div>
      </section>

      {/* Backed By Section */}
      <section className="container max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-medium text-center mb-12">Backed by</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {[
            {
              name: "SoftBank",
              src: softbank,
            },
            {
              name: "Ally",
              src: ally,
            },
            {
              name: "Citi",
              src: city,
            },
            {
              name: "American Express",
              src: amercanexpress,
            },
          ].map((partner) => (
            <div key={partner.name} className="w-32 h-12 relative">
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
