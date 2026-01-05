import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-4 border-t border-border/20">
      <div className="container flex flex-col items-start gap-4">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors shadow-[0_0_20px_hsl(217_91%_60%/0.3)]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-primary-foreground" />
        </button>
        <p>Risk Warning</p>

<p>All purchases from this website are for an investment challenge account, which is a digital education product. It is not an investment or financial product.</p>

<p>All trading with TheBestProp is conducted on a simulated account basis and does not involve trading with real funds in the open market. Performance on simulated accounts may not accurately reflect real market conditions, including slippage, liquidity constraints, and execution speed.</p>

<p>Participation in any of our programs does not constitute employment, and past performance is not indicative of future results. The use of leverage can magnify profits but also significantly increases the risk of loss. Traders can lose access to funded accounts due to breaching risk rules or underperformance, and TheBestProp is not liable for any losses incurred.</p>

<p>TheBestProp does not offer investment advice, portfolio management, or brokerage services. All users must understand the risks involved and are encouraged to seek independent financial advice if needed.By joining our programs, you acknowledge that you fully accept these risks and agree to abide by all applicable terms and conditions. TheBestProp does not provide any of the investment services listed in the Financial Services and Markets Act 2000 (FSMA). The information provided on this website is not intended for residents of any country or jurisdiction where its distribution or use would be contrary to local laws or regulations.</p>
        <p className="text-xs text-muted-foreground">
          © 2026 TheBestProp
        </p>
      </div>
    </footer>
  );
};

export default Footer;
