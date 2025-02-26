"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PaymentBreakdown from "./payment-breakdown";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [zipCode, setZipCode] = useState("600001");
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = useCallback(() => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPaymentCalc =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const propertyTax = 178;
    const insurance = 132;
    const hoaFees = 132;
    const utilities = 100;

    return monthlyPaymentCalc + propertyTax + insurance + hoaFees + utilities;
  }, [homePrice, downPayment, interestRate, loanTerm]);

  useEffect(() => {
    setMonthlyPayment(calculateMonthlyPayment());
  }, [calculateMonthlyPayment]);

  const handleDownPaymentChange = (value: string) => {
    const amount = Number.parseFloat(value);
    setDownPayment(amount);
    setDownPaymentPercent((amount / homePrice) * 100);
  };

  const handleDownPaymentPercentChange = (value: number) => {
    setDownPaymentPercent(value);
    setDownPayment((homePrice * value) / 100);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-[#f0f7f1]">
      <h1 className="text-5xl font-semibold mb-4">Mortgage calculator</h1>
      <p className="text-gray-600 mb-12 text-lg max-w-3xl">
        Our mortgage calculator includes key factors like homeowners association
        fees, property taxes, and private mortgage insurance (PMI). Get the
        whole picture and calculate your total monthly payment.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <Label htmlFor="home-price" className="text-lg mb-2">
            Home price
          </Label>
          <Input
            id="home-price"
            type="text"
            value={`$${homePrice.toLocaleString()}`}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, "");
              setHomePrice(Number(value));
            }}
            className="text-5xl font-semibold h-20 mb-4"
          />
          <Slider
            value={[homePrice]}
            min={100000}
            max={1000000}
            step={1000}
            onValueChange={([value]) => setHomePrice(value)}
            className="my-6"
          />
        </div>
        <div className="text-right">
          <div className="text-lg text-gray-600 mb-2">Monthly payment</div>
          <div className="text-6xl font-semibold mb-6">
            ${Math.round(monthlyPayment)}/mo
          </div>
          <Button className="mt-4 bg-[#0B8A5C] hover:bg-[#097a51] h-14 px-8 text-lg">
            Get pre-approved
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div>
          <Label htmlFor="zip" className="text-lg mb-2">
            ZIP code
          </Label>
          <Input
            id="zip"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="text-lg h-14"
          />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="down-payment" className="text-lg mb-2">
            Down payment
          </Label>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Input
                id="down-payment"
                type="text"
                value={`$${downPayment.toLocaleString()}`}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");
                  handleDownPaymentChange(value);
                }}
                className="text-lg h-14 pr-16"
              />
            </div>
            <div className="relative w-32">
              <Input
                type="number"
                value={downPaymentPercent}
                onChange={(e) =>
                  handleDownPaymentPercentChange(Number(e.target.value))
                }
                className="text-lg h-14 pr-8"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                %
              </span>
            </div>
          </div>
        </div>
        <div>
          <Label htmlFor="interest" className="text-lg mb-2">
            Interest rate
          </Label>
          <div className="relative">
            <Input
              id="interest"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              step={0.125}
              className="text-lg h-14 pr-8"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              %
            </span>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <Label htmlFor="term" className="text-lg mb-2">
          Length of loan
        </Label>
        <Select
          value={String(loanTerm)}
          onValueChange={(value) => setLoanTerm(Number(value))}
        >
          <SelectTrigger id="term" className="text-lg h-14">
            <SelectValue placeholder="Select term" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="15" className="text-lg">
              15 years
            </SelectItem>
            <SelectItem value="20" className="text-lg">
              20 years
            </SelectItem>
            <SelectItem value="30" className="text-lg">
              30 years
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <PaymentBreakdown
        principal={homePrice - downPayment}
        interestRate={interestRate}
        loanTerm={loanTerm}
      />
    </div>
  );
}
