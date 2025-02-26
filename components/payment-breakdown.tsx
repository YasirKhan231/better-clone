"use client";

interface PaymentBreakdownProps {
  principal: number;
  interestRate: number;
  loanTerm: number;
}

export default function PaymentBreakdown({
  principal,
  interestRate,
  loanTerm,
}: PaymentBreakdownProps) {
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const principalAndInterest =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const propertyTax = 178;
  const insurance = 132;
  const hoaFees = 132;
  const utilities = 100;
  const totalPayment =
    principalAndInterest + propertyTax + insurance + hoaFees + utilities;

  const segments = [
    {
      name: "Principal & interest",
      amount: principalAndInterest,
      color: "bg-[#0B8A5C]",
    },
    { name: "Property taxes", amount: propertyTax, color: "bg-[#6366F1]" },
    { name: "Homeowners insurance", amount: insurance, color: "bg-[#8B5CF6]" },
    { name: "HOA fees", amount: hoaFees, color: "bg-[#F59E0B]" },
    { name: "Utilities", amount: utilities, color: "bg-[#EF4444]" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Monthly payment breakdown</h2>
      <div className="text-3xl font-semibold mb-4">
        ${Math.round(totalPayment)}/mo
      </div>

      <div className="flex mb-6 rounded-full overflow-hidden h-4">
        {segments.map((segment) => (
          <div
            key={segment.name}
            className={`${segment.color}`}
            style={{
              width: `${(segment.amount / totalPayment) * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="grid gap-4">
        {segments.map((segment) => (
          <div key={segment.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${segment.color}`} />
              <span>{segment.name}</span>
            </div>
            <div className="font-semibold">${Math.round(segment.amount)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
