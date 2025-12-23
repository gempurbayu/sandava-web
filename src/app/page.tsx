"use client";

import { Shield, Lock, Target, RefreshCw, AlertTriangle, Menu, X, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import BackToTop from "@/components/ui/BackToTop";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import logo from "@/assets/logo-sandava.png";
import logoBca from "@/assets/clients/logo-bca.png";
import logoBekasi from "@/assets/clients/logo-bekasi.png";
import logoDiy from "@/assets/clients/logo-diy.png";
import logoImeco from "@/assets/clients/logo-imeco.png";
import logoJih from "@/assets/clients/logo-jih.png";
import logoUnair from "@/assets/clients/logo-unair.png";
import logoUny from "@/assets/clients/logo-uny.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm h-16">
        <div className="container mx-auto px-6 h-full">
          <div className="flex items-center h-full">
            <div className="flex items-center">
              <Image 
                src={logo} 
                alt="Sandava" 
                className="h-[138px] w-auto -my-10" 
                height={138}
                priority
                placeholder="empty"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center gap-10 flex-1">
              <Link href="/" className="text-lg font-medium text-brand-600 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-lg font-medium hover:text-brand-600 transition-colors">
                Services
              </Link>
              <Link href="/solutions" className="text-lg font-medium hover:text-brand-600 transition-colors">
                Solutions
              </Link>
              <Link href="/about" className="text-lg font-medium hover:text-brand-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:text-brand-600 transition-colors">
                Contact
              </Link>
            </div>

            {/* Contact Us Button */}
            <div className="hidden md:block">
              <Link href="/contact">
                <Button>
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 border-t pt-4">
              <Link
                href="/"
                className="block text-sm font-medium text-brand-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block text-sm font-medium hover:text-brand-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/solutions"
                className="block text-sm font-medium hover:text-brand-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/about"
                className="block text-sm font-medium hover:text-brand-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-sm font-medium hover:text-brand-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="/contact">
                <Button className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-white from-40% via-brand-50/60 via-70% to-brand-100/80 relative overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-[64px] font-bold leading-tight mb-6">
                The Enterprise <span className="text-brand-600">Cyber Security</span> Platform
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                Unified protection for endpoints, cloud workloads, and digital infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative lg:block">
              {/* Dashboard Mockup */}
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-slate-200">
                <div className="bg-gradient-to-br from-slate-50 to-white p-6">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-slate-500 font-mono">Security Dashboard</div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-brand-100 cursor-pointer">
                      <div className="text-3xl font-bold text-brand-600">178,245</div>
                      <div className="text-sm text-slate-600 mt-1">Protected Assets</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-100 cursor-pointer">
                      <div className="text-3xl font-bold text-blue-600">99.8%</div>
                      <div className="text-sm text-slate-600 mt-1">Threat Detection</div>
                    </div>
                  </div>

                  {/* Chart Visualization */}
                  <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-semibold">Security Events</div>
                      <div className="text-xs text-slate-500">Last 30 days</div>
                    </div>
                    <div className="flex items-end justify-between h-32 gap-1">
                      {[65, 45, 75, 55, 85, 60, 70, 50, 90, 65, 75, 55].map((height, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-gradient-to-t from-brand-500 to-brand-400 rounded-t transition-all duration-300 hover:from-brand-600 hover:to-brand-500 hover:scale-y-110 origin-bottom cursor-pointer" 
                          style={{height: `${height}%`}}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Status List */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm bg-white border border-slate-200 rounded-lg p-3 transition-all duration-300 hover:shadow-md hover:border-brand-300 hover:bg-brand-50 cursor-pointer">
                      <span className="text-slate-700">System Status</span>
                      <span className="text-brand-600 font-semibold">✓ All Systems Operational</span>
                    </div>
                    <div className="flex items-center justify-between text-sm bg-white border border-slate-200 rounded-lg p-3 transition-all duration-300 hover:shadow-md hover:border-blue-300 hover:bg-blue-50 cursor-pointer">
                      <span className="text-slate-700">Active Monitoring</span>
                      <span className="text-blue-600 font-semibold">24/7 Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-slate-500 mb-8 font-semibold tracking-wider">
            TRUSTED BY LEADING ORGANIZATIONS
          </p>
          <div className="relative">
            <div className="flex animate-scroll">
              <div className="flex items-center">
                <div className="w-40 md:w-48 lg:w-56 flex items-center justify-center px-4">
                  <Image src={logoBca} alt="BCA" className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" height={112} />
                </div>
                <div className="w-40 md:w-48 lg:w-56 flex items-center justify-center px-4">
                  <Image src={logoBekasi} alt="Bekasi" className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" height={112} />
                </div>
                <div className="w-40 md:w-48 lg:w-56 flex items-center justify-center px-4">
                  <Image src={logoDiy} alt="DIY" className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" height={112} />
                </div>
                <div className="w-40 md:w-48 lg:w-56 flex items-center justify-center px-4">
                  <Image src={logoImeco} alt="Imeco" className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" height={112} />
                </div>
                <div className="w-40 md:w-48 lg:w-56 flex items-center justify-center px-4">
                  <Image src={logoJih} alt="JIH" className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" height={112} />
                </div>
                <div className="w-40 md:w-48 lg:w-56 flex items-center justify-center px-4">
                  <Image src={logoUnair} alt="Unair" className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" height={112} />
                </div>
                <div className="w-40 md:w-48 lg:w-56 flex items-center justify-center px-4">
                  <Image src={logoUny} alt="UNY" className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" height={112} />
                </div>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center">
                <div className="w-40 md:w-48 lg:w-56 flex items-center justify-center px-4">
                  <Image src={logoBca} alt="BCA" className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" height={112} />
                </div>
                <div className="w-40 md:w-48 lg:w-56 flex items-center justify-center px-4">
                  <Image src={logoBekasi} alt="Bekasi" className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" height={112} />
                </div>
                <div className="w-40 md:w-48 lg:w-56 flex items-center justify-center px-4">
                  <Image src={logoDiy} alt="DIY" className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" height={112} />
                </div>
                <div className="w-40 md:w-48 lg:w-56 flex items-center justify-center px-4">
                  <Image src={logoImeco} alt="Imeco" className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" height={112} />
                </div>
                <div className="w-40 md:w-48 lg:w-56 flex items-center justify-center px-4">
                  <Image src={logoJih} alt="JIH" className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" height={112} />
                </div>
                <div className="w-40 md:w-48 lg:w-56 flex items-center justify-center px-4">
                  <Image src={logoUnair} alt="Unair" className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" height={112} />
                </div>
                <div className="w-40 md:w-48 lg:w-56 flex items-center justify-center px-4">
                  <Image src={logoUny} alt="UNY" className="h-20 md:h-24 lg:h-28 w-auto max-w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" height={112} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Endpoint and Cloud <span className="text-brand-600">Workload Protection</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              PT Sandava unifies historically separate functions into a single platform architecture.
              Protection is provided for public clouds, private clouds, and on-premises data centers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Endpoint Security */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Endpoint Security</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Configuration Assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Malware Detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">File Integrity Monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Threat Intelligence */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Threat Intelligence</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Threat Hunting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Log Data Analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Vulnerability Detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Security Operations */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Security Operations</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Incident Response</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Regulatory Compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">IT Hygiene</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cloud Security */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Cloud Security</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Container Security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Posture Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Workload Protection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Cyber Defense (XDR) */}
      <section id="solutions" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Dashboard Mockup - Left Side */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-brand-500/20 hover:-translate-y-2">
              {/* Browser Header */}
              <div className="bg-slate-100 px-4 py-2 flex items-center gap-4 border-b">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <div className="text-sm font-semibold text-slate-700">S.</div>
                  <div className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">Incident Response</div>
                </div>
                <div className="text-xs text-slate-500">⟳ sandava</div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-4 bg-white">
                {/* Tabs */}
                <div className="flex items-center gap-4 mb-4 text-xs">
                  <span className="text-slate-600 font-medium">Dashboard</span>
                  <span className="text-slate-400">Events</span>
                  <div className="flex-1" />
                  <span className="text-blue-600">☆ Explore agent</span>
                  <span className="text-slate-400">📊 Generate report</span>
                </div>
                
                {/* Search & Filters */}
                <div className="flex items-center gap-2 mb-4 text-xs">
                  <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded">
                    <span>🔍 Search</span>
                  </div>
                  <span className="text-slate-400">KQL</span>
                  <span className="text-slate-400">⏱ Last 24 hours</span>
                  <div className="flex-1" />
                  <span className="text-slate-500">Show Alerts</span>
                  <span className="text-blue-600">↻ Refresh</span>
                </div>
                
                <div className="text-xs text-blue-600 mb-4">+ Add filter</div>
                
                {/* Charts Row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Pie Chart */}
                  <div className="border rounded-lg p-3">
                    <div className="text-xs font-medium mb-2">Alert groups</div>
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-full border-4 border-blue-500 border-t-yellow-400 border-r-brand-400" />
                      <div className="text-xs space-y-1">
                        <div className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full" /> syscheck</div>
                        <div className="flex items-center gap-1"><span className="w-2 h-2 bg-yellow-400 rounded-full" /> vulnerability</div>
                        <div className="flex items-center gap-1"><span className="w-2 h-2 bg-brand-400 rounded-full" /> virustotal</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bar Chart */}
                  <div className="border rounded-lg p-3">
                    <div className="text-xs font-medium mb-2">Events</div>
                    <div className="flex items-end gap-0.5 h-16">
                      {[40, 60, 45, 70, 55, 80, 65, 50, 75, 60, 85, 70].map((h, i) => (
                        <div key={i} className="flex-1 bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600" style={{height: `${h}%`}} />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Table */}
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left p-2 font-medium text-slate-600">Time</th>
                        <th className="text-left p-2 font-medium text-slate-600">agent.name</th>
                        <th className="text-left p-2 font-medium text-slate-600">rule.description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-2 text-slate-500">Aug 15, 2024 @ 10:15:34</td>
                        <td className="p-2"><span className="text-blue-600">dbsrv</span></td>
                        <td className="p-2 text-slate-600 truncate max-w-[200px]">Host-based anomaly detection...</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-2 text-slate-500">Aug 15, 2024 @ 10:12:21</td>
                        <td className="p-2"><span className="text-orange-600">Windows</span></td>
                        <td className="p-2 text-slate-600 truncate max-w-[200px]">File added to system...</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-2 text-slate-500">Aug 15, 2024 @ 10:08:45</td>
                        <td className="p-2"><span className="text-brand-600">linuxsrv</span></td>
                        <td className="p-2 text-slate-600 truncate max-w-[200px]">Unauthorized access attempt...</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* Text Content - Right Side */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Active <span className="text-brand-600">Cyber Defense</span> from modern threats
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                PT Sandava provides analysts with real-time correlation and context. Its active responses
                are granular and include on-device remediation to keep endpoints clean and operational.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all">
                Learn more about Cyber Defense <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - SIEM */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A comprehensive <span className="text-brand-600">SIEM solution</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The PT Sandava Security Information and Event Management (SIEM) solution provides
                monitoring, detection, and alerting of security events and incidents.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all">
                Learn more about SIEM <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            {/* Dashboard Mockup - Right Side */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-blue-500/20 hover:-translate-y-2">
              {/* Browser Header */}
              <div className="bg-slate-100 px-4 py-2 flex items-center gap-4 border-b">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <div className="text-sm font-semibold text-slate-700">S.</div>
                  <div className="bg-teal-600 text-white text-xs px-2 py-0.5 rounded">Vulnerability Detection</div>
                </div>
                <div className="text-xs text-slate-500">⟳ sandava</div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-4 bg-white">
                {/* Tabs */}
                <div className="flex items-center gap-4 mb-4 text-xs">
                  <span className="text-slate-600 font-medium">Dashboard</span>
                  <span className="text-slate-400">Events</span>
                  <div className="flex-1" />
                  <span className="text-blue-600">☆ Explore agent</span>
                  <span className="text-slate-400">📊 Generate report</span>
                </div>
                
                {/* Filters */}
                <div className="flex items-center gap-2 mb-4 text-xs">
                  <span className="bg-slate-100 px-2 py-1 rounded">KQL</span>
                  <span className="text-slate-400">⏱ Last 24 hours</span>
                  <div className="flex-1" />
                  <span className="text-blue-600">↻ Refresh</span>
                </div>
                
                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-3 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3 text-center transition-all duration-300 hover:bg-blue-100 hover:scale-105 cursor-pointer">
                    <div className="text-xl font-bold text-blue-600">226415</div>
                    <div className="text-xs text-slate-500">Total</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 text-center transition-all duration-300 hover:bg-yellow-100 hover:scale-105 cursor-pointer">
                    <div className="text-xl font-bold text-yellow-600">49</div>
                    <div className="text-xs text-slate-500">Alerts</div>
                  </div>
                  <div className="bg-brand-50 rounded-lg p-3 text-center transition-all duration-300 hover:bg-brand-100 hover:scale-105 cursor-pointer">
                    <div className="text-xl font-bold text-brand-600">39232</div>
                    <div className="text-xs text-slate-500">Events</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3 text-center transition-all duration-300 hover:bg-orange-100 hover:scale-105 cursor-pointer">
                    <div className="text-xl font-bold text-orange-600">51</div>
                    <div className="text-xs text-slate-500">Critical</div>
                  </div>
                </div>
                
                {/* Charts Row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {/* Bar Chart */}
                  <div className="col-span-2 border rounded-lg p-3">
                    <div className="text-xs font-medium mb-2">Alert distribution: Top 5 agents</div>
                    <div className="flex items-end gap-1 h-20">
                      {[
                        {h: 80, colors: ['bg-blue-400', 'bg-yellow-400', 'bg-brand-400']},
                        {h: 65, colors: ['bg-blue-400', 'bg-yellow-400']},
                        {h: 55, colors: ['bg-blue-400', 'bg-yellow-400', 'bg-brand-400']},
                        {h: 70, colors: ['bg-blue-400', 'bg-yellow-400']},
                        {h: 45, colors: ['bg-blue-400']},
                        {h: 60, colors: ['bg-blue-400', 'bg-yellow-400']},
                        {h: 75, colors: ['bg-blue-400', 'bg-yellow-400', 'bg-brand-400']},
                        {h: 50, colors: ['bg-blue-400']},
                      ].map((bar, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end gap-0.5" style={{height: `${bar.h}%`}}>
                          {bar.colors.map((color, j) => (
                            <div key={j} className={`${color} flex-1 rounded-sm transition-all duration-300 hover:opacity-80`} />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Pie Chart */}
                  <div className="border rounded-lg p-3">
                    <div className="text-xs font-medium mb-2">Most affected</div>
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-yellow-400 to-brand-500 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Table */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="text-xs font-medium p-2 bg-slate-50 border-b">Security alerts</div>
                  <table className="w-full text-xs">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left p-2 font-medium text-slate-600">Time</th>
                        <th className="text-left p-2 font-medium text-slate-600">Severity</th>
                        <th className="text-left p-2 font-medium text-slate-600">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-2 text-slate-500">Aug 15, 2024</td>
                        <td className="p-2"><span className="bg-red-100 text-red-600 px-1.5 py-0.5 rounded text-xs">Critical</span></td>
                        <td className="p-2 text-slate-600 truncate max-w-[150px]">Agent: Docker Threat Detection...</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-2 text-slate-500">Aug 15, 2024</td>
                        <td className="p-2"><span className="bg-yellow-100 text-yellow-600 px-1.5 py-0.5 rounded text-xs">Warning</span></td>
                        <td className="p-2 text-slate-600 truncate max-w-[150px]">SSH: Attempt to login using...</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-brand-600">Expert Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive cyber security solutions tailored to your organization's needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cyber Security Consultant */}
            <Card className="group border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-brand-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cyber Security Consultant</h3>
                <p className="text-slate-600 leading-relaxed">
                  Expert consultation to assess, design, and implement robust security frameworks
                  aligned with your business objectives.
                </p>
              </CardContent>
            </Card>

            {/* Cyber Security Services */}
            <Card className="group border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cyber Security Services</h3>
                <p className="text-slate-600 leading-relaxed">
                  End-to-end security services including vulnerability assessments, penetration testing,
                  and continuous security monitoring.
                </p>
              </CardContent>
            </Card>

            {/* Strategy & Governance */}
            <Card className="group border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategy & Governance</h3>
                <p className="text-slate-600 leading-relaxed">
                  Develop comprehensive security strategies and governance frameworks to ensure
                  compliance and risk management.
                </p>
              </CardContent>
            </Card>

            {/* Security Transformation */}
            <Card className="group border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-violet-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Security Transformation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Transform your security posture with modern solutions, process optimization,
                  and technology integration.
                </p>
              </CardContent>
            </Card>

            {/* Cyber Defense */}
            <Card className="group border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cyber Defense</h3>
                <p className="text-slate-600 leading-relaxed">
                  Proactive defense mechanisms including threat intelligence, SOC operations,
                  and advanced threat detection.
                </p>
              </CardContent>
            </Card>

            {/* Cyber Response */}
            <Card className="group border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cyber Response</h3>
                <p className="text-slate-600 leading-relaxed">
                  Rapid incident response services to contain, investigate, and remediate
                  security breaches effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 z-50 left-1/4 w-96 h-96 bg-brand-200 rounded-full blur-3xl" />
          <div className="absolute bottom-0 z-50 right-1/4 w-96 h-96 bg-teal-200 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Enterprises <span className="text-brand-600">Across Indonesia</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our track record speaks for itself. We've helped hundreds of organizations strengthen their security posture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="group">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-brand-500 hover:shadow-xl hover:shadow-brand-500/10 hover:-translate-y-1">
                <AnimatedCounter
                  end={500}
                  suffix="+"
                  className="text-6xl md:text-7xl font-bold text-brand-600 mb-3 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="text-lg font-semibold text-slate-900 mb-1">Projects Completed</div>
                <div className="text-sm text-slate-500">Successfully delivered security solutions</div>
                <div className="mt-4 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-600 to-brand-400 rounded-full animate-progress-fill" style={{ width: "100%" }} />
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-teal-500 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1">
                <AnimatedCounter
                  end={200}
                  suffix="+"
                  className="text-6xl md:text-7xl font-bold text-teal-600 mb-3 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="text-lg font-semibold text-slate-900 mb-1">Enterprise Clients</div>
                <div className="text-sm text-slate-500">Trusted by leading organizations</div>
                <div className="mt-4 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-600 to-teal-400 rounded-full animate-progress-fill animation-delay-300" style={{ width: "85%" }} />
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1">
                <AnimatedCounter
                  end={15}
                  suffix="+"
                  duration={1500}
                  className="text-6xl md:text-7xl font-bold text-violet-600 mb-3 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="text-lg font-semibold text-slate-900 mb-1">Years Experience</div>
                <div className="text-sm text-slate-500">Industry expertise since 2009</div>
                <div className="mt-4 w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-violet-600 to-violet-400 rounded-full animate-progress-fill animation-delay-600" style={{ width: "75%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Feels to Work With Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto px-2 sm:px-0 -rotate-1 hover:scale-105 transition-all duration-300 hover:rotate-0">
            <div className={`${inter.className} relative isolate overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 p-10 shadow-2xl shadow-slate-900/30 ring-1 ring-slate-100`}>

              <h3 className="text-2xl font-bold mb-8">Dear Our Future Partner</h3>

              <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
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

              <p className="mt-10 font-semibold text-slate-900">The Sandava Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-brand-600 to-teal-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-xl mb-8 text-brand-50">
              Get in touch with our cyber security experts for a comprehensive consultation
              and learn how we can protect your organization.
            </p>
            <Button size="lg" className="bg-white text-brand-600 hover:bg-slate-100 text-lg">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12 items-start">
            <div>
              <Image src={logo} alt="Sandava" className="h-24 w-auto -ml-2 -mt-6 -mb-4 brightness-0 invert" height={96} width={260} />
              <p className="text-sm leading-relaxed">
                Leading cyber security consultant providing comprehensive protection
                for enterprises across Indonesia.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-brand-400 transition-colors">Consulting</a></li>
                <li><a href="#services" className="hover:text-brand-400 transition-colors">Security Services</a></li>
                <li><a href="#services" className="hover:text-brand-400 transition-colors">Strategy & Governance</a></li>
                <li><a href="#services" className="hover:text-brand-400 transition-colors">Transformation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>Jakarta, Indonesia</li>
                <li>info@sandava.co.id</li>
                <li>+62 21 xxxx xxxx</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Sandava. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
