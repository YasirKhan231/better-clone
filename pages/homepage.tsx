import React from "react";
import { Clock, ArrowRight, Star, Phone } from "lucide-react";
import Footer from "@/components/footer";
function HomePage() {
  return (
    <div className="font-sans">
      <nav className="bg-emerald-900 text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold mr-10">Better</div>
            <div className="hidden md:flex space-x-8">
              <a href="/home" className="hover:text-emerald-400">
                Home
              </a>
              <a href="/aboutus" className="hover:text-emerald-400">
                Aboutus
              </a>

              <a href="/mortgageCalculator" className="hover:text-emerald-400">
                MortgageCalculator
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="rounded-full border border-white p-2">
              <Phone size={20} />
            </a>
            <a href="#" className="hover:text-emerald-400">
              Sign in
            </a>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-emerald-900 font-bold py-2 px-6 rounded-full">
              Continue
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-emerald-800 text-white py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-emerald-400">
              Mortgages
              <br />
              made simple
            </h1>
          </div>

          <div className="relative w-full max-w-xs mx-auto mb-8">
            <img
              src="https://images.unsplash.com/photo-1616440347437-b1c73416efc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Phone showing mortgage approval"
              className="w-full"
            />
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center w-full">
              <div className="bg-black bg-opacity-70 p-3 rounded-lg inline-block">
                <div className="text-emerald-400 mb-1">
                  <span className="text-xs">Congrats,</span>
                  <br />
                  <span className="text-xs">You're pre-approved</span>
                  <br />
                  <span className="text-xs">for a loan up to</span>
                </div>
                <div className="text-emerald-400 text-xl font-bold">
                  $450,000
                </div>
              </div>
            </div>
          </div>

          <button className="bg-emerald-400 hover:bg-emerald-500 text-emerald-900 font-bold py-3 px-6 rounded-full text-base mb-4">
            Start my approval
          </button>

          <div className="flex items-center text-xs">
            <Clock size={16} className="mr-2" />
            <span>3 min</span>
            <span className="mx-2">|</span>
            <span>No credit impact</span>
          </div>

          <div className="mt-4 flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="h-5 mr-2"
            />
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="gold"
                  color="gold"
                  className={i === 4 ? "fill-[50%]" : ""}
                />
              ))}
            </div>
            <span className="ml-2 text-xs">
              4.6 Stars | 3177 Google reviews
            </span>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Customer testimonial"
                className="w-full h-auto rounded-lg"
              />
              <div className="bg-black bg-opacity-70 p-4 relative -mt-32">
                <div className="text-white mb-3">
                  <span className="text-xl">"</span>
                  <p className="text-base">
                    The reason why I decided to go with Better is because after
                    I did my research with the other lenders, Better was the
                    ones that provided me with the lowest interest rate.
                  </p>
                </div>
                <p className="text-white text-xs">
                  Arian — Better Mortgage customer
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Find out why
              <br />
              we're better.
            </h2>

            <button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2 px-5 rounded-full mb-4">
              See all our stories
            </button>

            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Trustpilot_logo.svg"
                alt="Trustpilot"
                className="h-5 mr-2"
              />
              <span className="mr-2 text-sm">Excellent</span>
              <span className="text-sm">4.4 out of 5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Got questions?
              </h2>
              <p className="text-3xl md:text-4xl font-bold text-gray-800">
                We've got answers
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              <button className="border-2 border-emerald-600 text-emerald-600 font-bold py-2 px-5 rounded-full text-sm">
                Our products
              </button>
              <button className="border-2 border-gray-300 text-gray-700 font-bold py-2 px-5 rounded-full text-sm">
                Calculators
              </button>
              <button className="border-2 border-gray-300 text-gray-700 font-bold py-2 px-5 rounded-full text-sm">
                Guides & FAQs
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">
                Buying your first home with Better
              </h3>

              <button className="bg-white rounded-full p-2 mb-4">
                <ArrowRight size={18} className="text-emerald-800" />
              </button>

              <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="First home"
                className="w-full h-36 object-cover rounded-lg"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-emerald-50 p-6 rounded-lg">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">
                  One Day Mortgage<sup>1</sup>
                </h3>
              </div>

              <p className="text-emerald-900 text-sm mb-4">
                Kick your home loan into hyperdrive. Going from locked rate to
                Commitment Letter takes weeks for traditional lenders. We do it
                in a single day. Traditional lenders deliver a Commitment Letter
                in a few weeks.<sup>1</sup>
              </p>

              <button className="bg-white rounded-full p-2 mb-4">
                <ArrowRight size={18} className="text-emerald-800" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-emerald-100 p-6 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-emerald-800 text-4xl font-bold flex items-center justify-center">
                  <div className="relative">
                    <span className="absolute -left-5 top-0 text-2xl">•••</span>
                    <span className="text-5xl">1</span>
                  </div>
                  <div className="text-left ml-2">
                    <div>One Day</div>
                    <div>Mortgage</div>
                  </div>
                </div>
                <div className="text-xs mt-1 text-right">™</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HELOC Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* HELOC Card */}
          <div className="col-span-2 flex">
            <div className="w-1/3">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Couple looking at laptop"
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
            <div className="w-2/3 bg-white p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">
                Better HELOC
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Introducing One Day HELOC™—your express lane to getting cash
                from your home with our Home Equity Line of Credit<sup>2</sup>.
                Access up to 90% of your home equity as cash in as little as 7
                days.<sup>3</sup>
              </p>
              <button className="bg-white border border-emerald-800 rounded-full p-2">
                <ArrowRight size={18} className="text-emerald-800" />
              </button>
            </div>
          </div>

          {/* Insurance Card */}
          <div className="bg-white rounded-lg">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Insurance
              </h2>
              <button className="bg-white border border-emerald-800 rounded-full p-2 mb-4">
                <ArrowRight size={18} className="text-emerald-800" />
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Happy family"
              className="w-full h-40 object-cover rounded-b-lg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
