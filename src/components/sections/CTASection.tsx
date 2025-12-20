import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8 text-brand-100">{description}</p>
          <Link href={buttonLink}>
            <Button size="lg" className="bg-white text-brand-600 hover:bg-slate-100 text-lg">
              {buttonText} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
