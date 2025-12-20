"use client";

import { Shield, Users, Award, Target, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageLayout } from "@/components/layout";
import { HeroSection, CTASection } from "@/components/sections";

export default function AboutPage() {
  return (
    <PageLayout activePage="about">
      <HeroSection
        title="About"
        highlightedText="Sandava"
        description="We are a leading IT Security Consultant dedicated to protecting businesses from evolving cyber threats with innovative solutions and expert guidance."
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-2 border-brand-100">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-brand-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-brand-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  To empower organizations with robust cybersecurity solutions that protect
                  their digital assets, ensure business continuity, and build trust with
                  their stakeholders in an increasingly connected world.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-brand-100">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-brand-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-brand-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  To be the most trusted cybersecurity partner in Indonesia, setting the
                  standard for excellence in security consulting and helping businesses
                  thrive securely in the digital age.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Feels to Work With Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-12 text-center">How It Feels to Work With Us</h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-10 relative">
              <div className="absolute -bottom-4 left-4 right-4 h-4 bg-slate-200/50 rounded-b-2xl -z-10" />

              <h3 className="text-3xl font-bold mb-8">Dear Our Future Partner</h3>

              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p>
                  At Sandava, we help corporates, enterprises, and market-leading teams
                  strengthen and secure their digital infrastructure.
                </p>
                <p>
                  We do more than provide security assessments. We create comprehensive
                  cybersecurity solutions that deliver measurable protection. From identifying
                  vulnerabilities to implementing robust defense systems, our work is designed
                  to safeguard your business assets.
                </p>
                <p>
                  Our approach combines strategic thinking, enterprise-grade security frameworks,
                  and proactive threat intelligence to ensure every solution we deliver is
                  purposeful, scalable, and future-ready.
                </p>
                <p>
                  Whether you need to assess your current security posture, respond to an
                  incident, or transform your entire security operations, we provide the
                  expertise, structure, and momentum to make it happen.
                </p>
                <p>Let's build the security foundation that makes a real difference for your business.</p>
              </div>

              <p className="mt-8 font-bold text-slate-900">The Sandava Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Choose <span className="text-brand-600">Sandava</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Certified Experts", desc: "Our team holds industry-leading certifications including CISSP, CEH, OSCP, and more." },
              { title: "Proven Track Record", desc: "500+ successful projects delivered for enterprises across various industries." },
              { title: "24/7 Support", desc: "Round-the-clock monitoring and incident response to protect your business." },
              { title: "Tailored Solutions", desc: "Custom security strategies designed for your specific business needs." },
              { title: "Compliance Ready", desc: "Help you meet regulatory requirements including ISO 27001, PCI DSS, and GDPR." },
              { title: "Local Expertise", desc: "Deep understanding of Indonesia's regulatory landscape and business environment." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-brand-600">Values</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Integrity", desc: "We uphold the highest ethical standards in everything we do." },
              { icon: Award, title: "Excellence", desc: "We strive for excellence in every project and engagement." },
              { icon: Users, title: "Collaboration", desc: "We work as partners with our clients to achieve shared goals." },
              { icon: Target, title: "Innovation", desc: "We continuously evolve to stay ahead of emerging threats." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Secure Your Business?"
        description="Let's discuss how we can help protect your organization from cyber threats."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </PageLayout>
  );
}
