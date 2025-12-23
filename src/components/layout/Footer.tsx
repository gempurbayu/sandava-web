import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-sandava.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12 items-start">
          <div>
            <Image
              src={logo}
              alt="Sandava"
              className="h-24 w-auto -ml-2 -mt-6 -mb-4 brightness-0 invert"
              height={96}
              width={260}
              priority
            />
            <p className="text-sm leading-relaxed">
              Leading cyber security consultant providing comprehensive protection
              for enterprises across Indonesia.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#consulting" className="hover:text-brand-400 transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#security-services" className="hover:text-brand-400 transition-colors">
                  Security Services
                </Link>
              </li>
              <li>
                <Link href="/services#governance" className="hover:text-brand-400 transition-colors">
                  Strategy & Governance
                </Link>
              </li>
              <li>
                <Link href="/services#transformation" className="hover:text-brand-400 transition-colors">
                  Transformation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Jakarta, Indonesia</li>
              <li>business@sandava.co.id</li>
              <li>+62 21 xxxx xxxx</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; 2025 Sandava. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
