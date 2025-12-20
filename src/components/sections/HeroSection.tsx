interface HeroSectionProps {
  title: string;
  highlightedText: string;
  description: string;
  titleFirst?: boolean;
}

export default function HeroSection({
  title,
  highlightedText,
  description,
  titleFirst = true,
}: HeroSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-white from-40% via-brand-50/60 via-70% to-brand-100/80">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {titleFirst ? (
              <>
                {title} <span className="text-brand-600">{highlightedText}</span>
              </>
            ) : (
              <>
                <span className="text-brand-600">{highlightedText}</span> {title}
              </>
            )}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
