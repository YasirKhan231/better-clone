import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white border-b">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-2xl font-semibold">
          Better
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/aboutus" className="text-sm font-medium">
            About Us
          </Link>
          <Link href="/mortgageCalculator" className="text-sm font-medium">
            Mortgage Calculator
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Phone className="h-5 w-5" />
        </Button>
        <Button variant="ghost">Sign in</Button>
        <Button className="bg-[#0B8A5C] hover:bg-[#097a51]">Continue</Button>
      </div>
    </nav>
  );
}
