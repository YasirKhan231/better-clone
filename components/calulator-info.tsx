import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function CalculatorInfo() {
  return (
    <div className=" max-w-6xl  mx-auto px-4 py-8 space-y-12">
      <section>
        <h2 className="text-3xl font-semibold mb-4">
          How does a mortgage calculator help me?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          When deciding how much house you can afford, one of the most important
          pieces to determine is whether a home will fit into your monthly
          budget. A mortgage calculator helps you understand the monthly cost of
          a home. And ours will allow you to enter different down payments and
          interest rates to help determine what is affordable for you.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">
          How much monthly mortgage payment can I afford?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Lenders determine how much you can afford on a monthly housing payment
          by calculating your{" "}
          <Link href="#" className="text-[#0B8A5C] hover:underline">
            debt-to-income ratio (DTI)
          </Link>
          . The maximum DTI you can have in order to qualify for most mortgage
          loans is often between 45-50%, with your anticipated housing costs
          included.
        </p>

        <Card className="p-6 bg-gray-50 mb-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#0B8A5C] mb-4">
                Debts
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Auto loan</span>
                  <span>$350/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Student loans</span>
                  <span>$220/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Credit cards</span>
                  <span>$130/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Expected housing costs</span>
                  <span>$1,800/month</span>
                </div>
                <div className="pt-2 border-t mt-4">
                  <div className="flex justify-between font-semibold text-[#0B8A5C]">
                    <span>Monthly debt obligation</span>
                    <span>$2,500</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0B8A5C] mb-4">
                Income
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monthly salary ($60,000/12)</span>
                  <span>$5,000/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly side-gig income</span>
                  <span>$1,500/month</span>
                </div>
                <div className="pt-2 border-t mt-4">
                  <div className="flex justify-between font-semibold text-[#0B8A5C]">
                    <span>Monthly income</span>
                    <span>$6,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="text-2xl font-semibold mb-2">
              $2,500 / $6,500 × 100 ={" "}
              <span className="text-[#0B8A5C]">38% DTI</span>
            </div>
            <p className="text-sm text-gray-500">
              The above scenario is for illustrative purposes only.
            </p>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">
          How to calculate monthly mortgage payments?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          The easiest way to calculate your mortgage payment is to use a
          calculator, but for the curious or mathematically inclined, here's the
          formula for calculating principal and interest yourself:
        </p>

        <Card className="p-6 bg-gray-50 mb-6">
          <div className="text-center mb-6">
            <div className="text-xl mb-2">
              Monthly mortgage payments (M) = P ×{" "}
            </div>
            <div className="text-xl">
              <div className="border-b border-black inline-block px-4">
                r(1+r)ⁿ
              </div>
              <br />
              <div className="inline-block px-4">(1+r)ⁿ - 1</div>
            </div>
          </div>

          <div className="space-y-4">
            <p>
              <strong>Where:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>M is monthly mortgage payments</li>
              <li>P is the principal loan amount (the amount you borrow)</li>
              <li>
                r is the monthly interest rate
                <br />
                <span className="text-gray-600">
                  (annual interest rate divided by 12 and expressed as a
                  decimal)
                  <br />
                  For example: if the annual interest rate is 5%,
                  <br />
                  the monthly rate would be 0.05/12 = .00417, or .417%
                </span>
              </li>
              <li>
                n is the total number of payments in months
                <br />
                <span className="text-gray-600">
                  For example: for a 30-year loan, n = 30×12 = 360 months
                </span>
              </li>
            </ul>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">
          Do you know your property tax rate?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          While exact property tax rates vary by county, it can be helpful to
          look at taxes on the state level to get an idea for taxes in your
          state. Here's a helpful chart breaking down the Census Bureau's 2021
          American Community Survey 5-year estimate:
        </p>

        <Table>
          <TableHeader>
            <TableRow className="bg-[#0B8A5C] text-white">
              <TableHead className="font-semibold">State</TableHead>
              <TableHead className="font-semibold">
                Median Effective Property Tax Rate
              </TableHead>
              <TableHead className="font-semibold">
                Mean Effective Property Tax Rate
              </TableHead>
              <TableHead className="font-semibold">Median Home Value</TableHead>
              <TableHead className="font-semibold">
                Median Property Taxes Paid
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>AL</TableCell>
              <TableCell>0.41%</TableCell>
              <TableCell>0.40%</TableCell>
              <TableCell>$157,100</TableCell>
              <TableCell>$646</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AK</TableCell>
              <TableCell>1.23%</TableCell>
              <TableCell>1.04%</TableCell>
              <TableCell>$282,800</TableCell>
              <TableCell>$3,464</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AZ</TableCell>
              <TableCell>0.62%</TableCell>
              <TableCell>0.63%</TableCell>
              <TableCell>$265,600</TableCell>
              <TableCell>$1,648</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AR</TableCell>
              <TableCell>0.62%</TableCell>
              <TableCell>0.64%</TableCell>
              <TableCell>$142,100</TableCell>
              <TableCell>$878</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">
          How is Better's mortgage calculator different?
        </h2>

        <h3 className="text-2xl font-semibold mb-3">
          This mortgage calculator shows your payments with taxes and insurance
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          The property taxes you contribute are used to finance the services
          provided by your local government to the community. These services
          encompass schools, libraries, roads, parks, water treatment, police,
          and fire departments. Even after your mortgage has been fully paid,
          you will still need to pay property taxes.
        </p>

        <h3 className="text-2xl font-semibold mb-3">
          This mortgage calculator shows your mortgage costs with PMI
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          PMI, an abbreviation for private mortgage insurance, aids potential
          homeowners in qualifying for a mortgage without the necessity of a 20%
          down payment. By opting for a lower down payment and choosing a
          mortgage with PMI, you can purchase a home sooner, begin accruing
          equity, and keep cash available for future needs.
        </p>

        <h3 className="text-2xl font-semibold mb-3">
          This mortgage calculator includes HOA fees
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Homeowners association ("HOA") fees are typically charged directly by
          a homeowners association, but as HOA fees come part and parcel with
          condos, townhomes, and planned housing developments, they're an
          essential factor to consider when calculating your mortgage costs.
        </p>
      </section>
    </div>
  );
}
