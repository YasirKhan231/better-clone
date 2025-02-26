import NavBar from "@/components/navbar";
import MortgageCalculator from "@/components/mortage-calculator";
import CalculatorInfo from "@/components/calulator-info";
import Footer from "@/components/footer";
export default function MortgageCal() {
  return (
    <main>
      <NavBar />
      <MortgageCalculator />
      <CalculatorInfo />
      <Footer></Footer>
    </main>
  );
}
