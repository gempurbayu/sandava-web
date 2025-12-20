"use client";

import { Shield, Server, Eye, Lock, Database, Cloud, CheckCircle2, ArrowRight, Monitor, AlertTriangle, FileSearch, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageLayout } from "@/components/layout";
import { CTASection } from "@/components/sections";
import Link from "next/link";

export default function SolutionsPage() {
  return (
    <PageLayout activePage="solutions">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-white from-40% via-brand-50/60 via-70% to-brand-100/80">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise <span className="text-brand-600">Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive security solutions designed to protect your endpoints, cloud workloads, 
              and digital infrastructure from modern cyber threats.
            </p>
          </div>
        </div>
      </section>


      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Endpoint and Cloud <span className="text-brand-600">Workload Protection</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              PT Sandava unifies historically separate functions into a single platform architecture.
              Protection is provided for public clouds, private clouds, and on-premises data centers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Endpoint Security */}
            <Card className="border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Monitor className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Endpoint Security</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Configuration Assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Malware Detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    File Integrity Monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Threat Intelligence */}
            <Card className="border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Threat Intelligence</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Threat Hunting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Log Data Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Vulnerability Detection
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Security Operations */}
            <Card className="border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Security Operations</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Incident Response
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Regulatory Compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    IT Hygiene
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cloud Security */}
            <Card className="border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Cloud className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-lg font-bold mb-3">Cloud Security</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Container Security
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Posture Management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Workload Protection
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* XDR Solution */}
      <section id="xdr" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Dashboard Mockup */}
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
                  <div className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">XDR Dashboard</div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-4 bg-white">
                <div className="flex items-center gap-4 mb-4 text-xs">
                  <span className="text-slate-600 font-medium">Threat Detection</span>
                  <span className="text-slate-400">Events</span>
                  <span className="text-slate-400">Alerts</span>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-brand-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-brand-600">2,847</div>
                    <div className="text-xs text-slate-500">Events Today</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-yellow-600">23</div>
                    <div className="text-xs text-slate-500">Active Alerts</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-green-600">99.9%</div>
                    <div className="text-xs text-slate-500">Uptime</div>
                  </div>
                </div>
                
                {/* Chart */}
                <div className="border rounded-lg p-3 mb-4">
                  <div className="text-xs font-medium mb-2">Threat Activity (24h)</div>
                  <div className="flex items-end gap-1 h-20">
                    {[30, 45, 25, 60, 40, 75, 55, 35, 65, 45, 80, 50].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-brand-500 to-brand-400 rounded-t transition-all hover:from-brand-600 hover:to-brand-500" style={{height: `${h}%`}} />
                    ))}
                  </div>
                </div>
                
                {/* Recent Alerts */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs bg-red-50 rounded p-2">
                    <span className="text-red-600 font-medium">Critical: Malware detected</span>
                    <span className="text-slate-500">2m ago</span>
                  </div>
                  <div className="flex items-center justify-between text-xs bg-yellow-50 rounded p-2">
                    <span className="text-yellow-600 font-medium">Warning: Unusual login</span>
                    <span className="text-slate-500">15m ago</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Shield className="w-4 h-4" />
                Extended Detection & Response
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Active <span className="text-brand-600">Cyber Defense</span> from Modern Threats
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                PT Sandava XDR provides analysts with real-time correlation and context. Its active responses
                are granular and include on-device remediation to keep endpoints clean and operational.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  <span className="text-slate-700">Real-time threat detection and response</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  <span className="text-slate-700">Automated incident investigation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  <span className="text-slate-700">Cross-platform visibility</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  <span className="text-slate-700">Advanced threat hunting capabilities</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button size="lg">
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* SIEM Solution */}
      <section id="siem" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Database className="w-4 h-4" />
                Security Information & Event Management
              </div>
              <h2 className="text-4xl font-bold mb-6">
                A Comprehensive <span className="text-brand-600">SIEM Solution</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The PT Sandava Security Information and Event Management (SIEM) solution provides
                monitoring, detection, and alerting of security events and incidents across your entire infrastructure.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  <span className="text-slate-700">Centralized log management</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  <span className="text-slate-700">Real-time security monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  <span className="text-slate-700">Compliance reporting (PCI DSS, HIPAA, GDPR)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  <span className="text-slate-700">Advanced analytics and correlation</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button size="lg">
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Dashboard Mockup */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-teal-500/20 hover:-translate-y-2">
              {/* Browser Header */}
              <div className="bg-slate-100 px-4 py-2 flex items-center gap-4 border-b">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <div className="text-sm font-semibold text-slate-700">S.</div>
                  <div className="bg-teal-600 text-white text-xs px-2 py-0.5 rounded">SIEM Dashboard</div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-4 bg-white">
                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="bg-blue-50 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-blue-600">226K</div>
                    <div className="text-xs text-slate-500">Events</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-yellow-600">49</div>
                    <div className="text-xs text-slate-500">Alerts</div>
                  </div>
                  <div className="bg-brand-50 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-brand-600">39K</div>
                    <div className="text-xs text-slate-500">Logs</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-2 text-center">
                    <div className="text-lg font-bold text-red-600">12</div>
                    <div className="text-xs text-slate-500">Critical</div>
                  </div>
                </div>
                
                {/* Charts */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="border rounded-lg p-3">
                    <div className="text-xs font-medium mb-2">Event Sources</div>
                    <div className="flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border-8 border-blue-500 border-t-teal-400 border-r-brand-400 border-b-yellow-400" />
                    </div>
                  </div>
                  <div className="border rounded-lg p-3">
                    <div className="text-xs font-medium mb-2">Severity Distribution</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: '15%'}} />
                        </div>
                        <span className="text-xs text-slate-500">Critical</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{width: '35%'}} />
                        </div>
                        <span className="text-xs text-slate-500">Warning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-slate-100 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '50%'}} />
                        </div>
                        <span className="text-xs text-slate-500">Info</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Table */}
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left p-2 font-medium">Time</th>
                        <th className="text-left p-2 font-medium">Source</th>
                        <th className="text-left p-2 font-medium">Event</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-slate-50">
                        <td className="p-2 text-slate-500">10:15:34</td>
                        <td className="p-2 text-blue-600">Firewall</td>
                        <td className="p-2 text-slate-600">Connection blocked</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-2 text-slate-500">10:12:21</td>
                        <td className="p-2 text-teal-600">Server</td>
                        <td className="p-2 text-slate-600">Auth failure</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* More Solutions Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              More <span className="text-brand-600">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our complete range of security solutions designed for enterprise needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Vulnerability Management */}
            <Card className="border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileSearch className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Vulnerability Management</h3>
                <p className="text-slate-600 mb-4">
                  Continuous vulnerability scanning and assessment to identify and prioritize security weaknesses.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Automated scanning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Risk prioritization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Remediation tracking
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center text-brand-600 font-medium hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* SOC as a Service */}
            <Card className="border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Server className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">SOC as a Service</h3>
                <p className="text-slate-600 mb-4">
                  24/7 security operations center monitoring and incident response managed by our expert team.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    24/7 monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Threat analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Incident response
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center text-brand-600 font-medium hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Identity & Access Management */}
            <Card className="border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-violet-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lock className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Identity & Access Management</h3>
                <p className="text-slate-600 mb-4">
                  Secure identity management and access control to protect your critical resources.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Single Sign-On (SSO)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Multi-factor authentication
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Privileged access management
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center text-brand-600 font-medium hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Data Loss Prevention */}
            <Card className="border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Data Loss Prevention</h3>
                <p className="text-slate-600 mb-4">
                  Protect sensitive data from unauthorized access, sharing, and exfiltration.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Data classification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Policy enforcement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Encryption management
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center text-brand-600 font-medium hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Network Security */}
            <Card className="border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Network Security</h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive network protection including firewall, IDS/IPS, and network segmentation.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Next-gen firewall
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Intrusion detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Network monitoring
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center text-brand-600 font-medium hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Backup & Recovery */}
            <Card className="border-2 hover:border-brand-600 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Database className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Backup & Recovery</h3>
                <p className="text-slate-600 mb-4">
                  Secure backup solutions and disaster recovery planning to ensure business continuity.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Automated backups
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Disaster recovery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600" />
                    Business continuity
                  </li>
                </ul>
                <Link href="/contact" className="inline-flex items-center text-brand-600 font-medium hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Find the Right Solution for Your Business"
        description="Our security experts will help you identify the best solutions to protect your organization."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </PageLayout>
  );
}
