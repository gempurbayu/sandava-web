"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Shield, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageLayout } from "@/components/layout";
import Link from "next/link";

export default function ContactPage() {
  const [contactType, setContactType] = useState<"message" | "meeting" | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
  });

  const isMandatoryFilled = 
    formData.firstName.trim() !== "" && 
    formData.lastName.trim() !== "" && 
    formData.email.trim() !== "" && 
    formData.company.trim() !== "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageLayout activePage="contact">

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-white from-40% via-brand-50/60 via-70% to-brand-100/80">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-brand-600">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ready to strengthen your cyber security? Our team of experts is here to help 
              protect your business from evolving digital threats.
            </p>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-2">How can we help you?</h2>
              <p className="text-slate-600 mb-8">
                Fill in your details below and choose how you'd like to connect with us.
              </p>
              
              <form className="space-y-6">
                {/* Mandatory Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="john.doe@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                {/* Contact Type Selection - Shows after mandatory fields filled */}
                <div className={`transition-all duration-300 ${isMandatoryFilled ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    How would you like to connect? *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setContactType("message")}
                      className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-all border-2 ${
                        contactType === "message"
                          ? "bg-brand-600 text-white border-brand-600"
                          : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:bg-brand-50"
                      }`}
                    >
                      <MessageSquare className="w-5 h-5" />
                      Send Message
                    </button>
                    <button
                      type="button"
                      onClick={() => setContactType("meeting")}
                      className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium transition-all border-2 ${
                        contactType === "meeting"
                          ? "bg-brand-600 text-white border-brand-600"
                          : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:bg-brand-50"
                      }`}
                    >
                      <Calendar className="w-5 h-5" />
                      Schedule Meeting
                    </button>
                  </div>
                </div>

                {/* Send Message Fields */}
                {contactType === "message" && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Service Interest *
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white">
                        <option value="">Select</option>
                        <option value="consulting">Cyber Security Consulting</option>
                        <option value="assessment">Security Assessment</option>
                        <option value="penetration">Penetration Testing</option>
                        <option value="siem">SIEM Implementation</option>
                        <option value="incident">Incident Response</option>
                        <option value="compliance">Compliance & Governance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                        placeholder="Tell us about your security needs..."
                      />
                    </div>
                    
                    <Button size="lg" className="w-full text-lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </div>
                )}

                {/* Schedule Meeting Fields */}
                {contactType === "meeting" && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                        placeholder="+62 xxx xxxx xxxx"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Preferred Time *
                        </label>
                        <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white">
                          <option value="">Select time</option>
                          <option value="09:00">09:00 WIB</option>
                          <option value="10:00">10:00 WIB</option>
                          <option value="11:00">11:00 WIB</option>
                          <option value="13:00">13:00 WIB</option>
                          <option value="14:00">14:00 WIB</option>
                          <option value="15:00">15:00 WIB</option>
                          <option value="16:00">16:00 WIB</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Meeting Type *
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white">
                        <option value="">Select meeting type</option>
                        <option value="video">Video Call (Google Meet/Zoom)</option>
                        <option value="phone">Phone Call</option>
                        <option value="onsite">On-site Meeting</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Service Interest *
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white">
                        <option value="">Select</option>
                        <option value="consultation">Initial Security Consultation</option>
                        <option value="assessment">Security Assessment Discussion</option>
                        <option value="proposal">Project Proposal Review</option>
                        <option value="demo">Product Demo</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                        placeholder="Any specific topics you'd like to discuss..."
                      />
                    </div>
                    
                    <Button size="lg" className="w-full text-lg">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Meeting
                    </Button>
                  </div>
                )}
              </form>
            </div>

            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
                <p className="text-slate-600">
                  Reach out to us through any of these channels.
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="border-2 border-brand-100 hover:border-brand-300 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Office Address</h3>
                      <p className="text-slate-600 text-sm">
                        Jl. Sudirman No. 123<br />
                        Jakarta Selatan, DKI Jakarta 12190<br />
                        Indonesia
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-brand-100 hover:border-brand-300 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-slate-600 text-sm">
                        General: business@sandava.co.id<br />
                        Sales: business@sandava.co.id<br />
                        Support: business@sandava.co.id
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-brand-100 hover:border-brand-300 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-slate-600 text-sm">
                        Office: +62 21 xxxx xxxx<br />
                        Hotline: +62 811 xxxx xxxx
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-brand-100 hover:border-brand-300 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-slate-600 text-sm">
                        Monday - Friday: 09:00 - 18:00 WIB<br />
                        Saturday: 09:00 - 13:00 WIB<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Emergency Support */}
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-900 mb-1">24/7 Security Incident Response</h3>
                    <p className="text-brand-700 text-sm mb-3">
                      Experiencing a security breach? Our incident response team is available around the clock.
                    </p>
                    <p className="font-bold text-brand-600">
                      Emergency Hotline: +62 811 xxxx xxxx
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
