"use client";

import { Shield, Lock, Target, RefreshCw, AlertTriangle, CheckCircle2, ArrowRight, Server, Search, FileCheck, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageLayout } from "@/components/layout";
import { CTASection } from "@/components/sections";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <PageLayout activePage="services">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-white from-40% via-brand-50/60 via-70% to-brand-100/80">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-brand-600">Services</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive cyber security solutions designed to protect your business 
              from evolving digital threats and ensure regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-brand-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cyber Security Consultant</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Expert consultation to assess, design, and implement robust security frameworks
                  aligned with your business objectives.
                </p>
                <a href="#consulting" className="inline-flex items-center text-brand-600 font-medium hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cyber Security Services</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  End-to-end security services including vulnerability assessments, penetration testing,
                  and continuous security monitoring.
                </p>
                <a href="#security-services" className="inline-flex items-center text-brand-600 font-medium hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategy & Governance</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Develop comprehensive security strategies and governance frameworks to ensure
                  compliance and risk management.
                </p>
                <a href="#governance" className="inline-flex items-center text-brand-600 font-medium hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-violet-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Security Transformation</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Transform your security posture with modern solutions, process optimization,
                  and technology integration.
                </p>
                <a href="#transformation" className="inline-flex items-center text-brand-600 font-medium hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Server className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cyber Defense</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Proactive defense mechanisms including threat intelligence, SOC operations,
                  and advanced threat detection.
                </p>
                <a href="#defense" className="inline-flex items-center text-brand-600 font-medium hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="group border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cyber Response</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Rapid incident response services to contain, investigate, and remediate
                  security breaches effectively.
                </p>
                <a href="#response" className="inline-flex items-center text-brand-600 font-medium hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cyber Security Consulting */}
      <section id="consulting" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-14 h-14 bg-brand-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-brand-600" />
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  Cyber Security <span className="text-brand-600">Consulting</span>
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Our expert consultants work closely with your team to understand your unique 
                  security challenges and develop tailored solutions that align with your business goals.
                </p>
                <ul className="space-y-4 mb-8">
                  {["Security Architecture Review & Design", "Risk Assessment & Management", "Security Policy Development", "Security Awareness Training", "Third-Party Security Assessment"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button size="lg">
                    Get Consultation <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border">
                <h3 className="text-xl font-bold mb-6">What You Get</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-brand-50 rounded-lg">
                    <FileCheck className="w-8 h-8 text-brand-600" />
                    <div>
                      <div className="font-semibold">Comprehensive Security Report</div>
                      <div className="text-sm text-slate-600">Detailed findings and recommendations</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                    <Target className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="font-semibold">Strategic Roadmap</div>
                      <div className="text-sm text-slate-600">Prioritized action plan for improvement</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-teal-50 rounded-lg">
                    <Users className="w-8 h-8 text-teal-600" />
                    <div>
                      <div className="font-semibold">Expert Guidance</div>
                      <div className="text-sm text-slate-600">Ongoing support from certified professionals</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section id="security-services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Cyber Security <span className="text-brand-600">Services</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive security testing and assessment services to identify vulnerabilities 
                before attackers do.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Search, title: "Vulnerability Assessment", desc: "Systematic identification and evaluation of security weaknesses in your systems and applications." },
                { icon: Zap, title: "Penetration Testing", desc: "Simulated cyber attacks to test your defenses and identify exploitable vulnerabilities." },
                { icon: Shield, title: "Security Audit", desc: "Comprehensive review of your security controls, policies, and procedures." },
                { icon: Server, title: "Infrastructure Security", desc: "Assessment and hardening of network infrastructure, servers, and cloud environments." },
                { icon: Lock, title: "Application Security", desc: "Security testing for web, mobile, and API applications to prevent data breaches." },
                { icon: FileCheck, title: "Code Review", desc: "Manual and automated review of source code to identify security flaws." },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <item.icon className="w-10 h-10 text-brand-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategy & Governance */}
      <section id="governance" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { code: "ISO 27001", label: "Information Security Management", color: "text-brand-600" },
                    { code: "PCI DSS", label: "Payment Card Industry", color: "text-blue-600" },
                    { code: "GDPR", label: "Data Protection Regulation", color: "text-teal-600" },
                    { code: "SOC 2", label: "Service Organization Control", color: "text-violet-600" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                      <div className={`text-3xl font-bold ${item.color} mb-2`}>{item.code}</div>
                      <div className="text-sm text-slate-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h2 className="text-4xl font-bold mb-6">
                  Strategy & <span className="text-brand-600">Governance</span>
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Build a robust security governance framework that ensures compliance with 
                  industry regulations and international standards.
                </p>
                <ul className="space-y-4 mb-8">
                  {["Compliance Assessment & Gap Analysis", "Security Framework Implementation", "Policy & Procedure Development", "Audit Preparation & Support"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-brand-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button size="lg">
                    Start Compliance Journey <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Transformation */}
      <section id="transformation" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="w-14 h-14 bg-violet-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <RefreshCw className="w-8 h-8 text-violet-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Security <span className="text-brand-600">Transformation</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16">
              Modernize your security operations with cutting-edge technologies and optimized processes.
            </p>
            
            <div className="relative">
              <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-2/3">
                <div className="relative h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-500 via-brand-400 to-brand-500 animate-flow-line" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 bg-brand-500 rounded-full animate-pulse-dot" />
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-500 rounded-full animate-pulse-dot animation-delay-300" />
                <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-3 bg-brand-500 rounded-full animate-pulse-dot animation-delay-600" />
              </div>

              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {[
                  { num: "1", title: "Assess", desc: "Evaluate current security posture and identify areas for improvement" },
                  { num: "2", title: "Design", desc: "Create a transformation roadmap with modern security solutions" },
                  { num: "3", title: "Implement", desc: "Deploy and integrate new security technologies and processes" },
                ].map((step, i) => (
                  <div key={i} className="text-center group">
                    <div className="relative">
                      <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-200 group-hover:shadow-lg group-hover:shadow-brand-200">
                        <span className="text-3xl font-bold text-brand-600">{step.num}</span>
                      </div>
                      <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full border-2 border-brand-400 animate-ping-slow opacity-0 group-hover:opacity-100" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Defense & Response */}
      <section id="defense" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Server className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Cyber Defense</h2>
                <p className="text-slate-600 mb-6">
                  Proactive security measures to detect and prevent threats before they impact your business.
                </p>
                <ul className="space-y-3 mb-6">
                  {["Security Operations Center (SOC)", "Threat Intelligence", "SIEM Implementation", "24/7 Monitoring"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-orange-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div id="response" className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Cyber Response</h2>
                <p className="text-slate-600 mb-6">
                  Rapid incident response to minimize damage and restore normal operations quickly.
                </p>
                <ul className="space-y-3 mb-6">
                  {["Incident Response Team", "Digital Forensics", "Malware Analysis", "Recovery & Remediation"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-red-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Emergency Response <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Secure Your Business?"
        description="Contact us today for a free consultation and discover how our services can protect your organization."
        buttonText="Get Free Consultation"
        buttonLink="/contact"
      />
    </PageLayout>
  );
}
