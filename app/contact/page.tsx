"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  HeadphonesIcon,
  Building2,
  Send,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Talk to our support team",
    value: "+1 (800) 555-0123",
    action: "Call Now",
    href: "tel:+18005550123",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    value: "support@terracrestunion.com",
    action: "Send Email",
    href: "mailto:support@terracrestunion.com",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with an agent",
    value: "Available 24/7",
    action: "Start Chat",
    href: "#",
  },
  {
    icon: HeadphonesIcon,
    title: "Video Call",
    description: "Schedule a video consultation",
    value: "Mon-Fri, 9AM-5PM EST",
    action: "Book Call",
    href: "#",
  },
]

const offices = [
  {
    city: "New York",
    address: "123 Financial District, New York, NY 10004",
    phone: "+1 (212) 555-0123",
    hours: "Mon-Fri: 9AM-6PM EST",
  },
  {
    city: "Los Angeles",
    address: "456 Banking Boulevard, Los Angeles, CA 90017",
    phone: "+1 (310) 555-0123",
    hours: "Mon-Fri: 9AM-6PM PST",
  },
  {
    city: "Chicago",
    address: "789 Commerce Street, Chicago, IL 60601",
    phone: "+1 (312) 555-0123",
    hours: "Mon-Fri: 9AM-6PM CST",
  },
]

const faqs = [
  {
    question: "How do I reset my password?",
    answer: "You can reset your password by clicking 'Forgot Password' on the login page. We will send a reset link to your registered email.",
  },
  {
    question: "What are your customer support hours?",
    answer: "Our phone and live chat support is available 24/7. Email responses are typically within 2-4 business hours.",
  },
  {
    question: "How long does it take to open an account?",
    answer: "Most accounts can be opened in under 5 minutes. Identity verification may take up to 24 hours for some cases.",
  },
  {
    question: "Are my deposits insured?",
    answer: "Yes, all deposits are FDIC insured up to $250,000 per depositor, per insured bank.",
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection variant="fade-up" className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-6 text-pretty text-lg text-white/80">
                Have questions or need assistance? Our dedicated support team is here to help 
                you 24/7. Choose your preferred contact method below.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactMethods.map((method, i) => (
                <AnimatedSection key={method.title} variant="fade-up" delay={i * 100}>
                <Card className="border-border/50 text-center transition-all hover:shadow-lg h-full">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/10 p-4 text-primary">
                      <method.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">{method.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{method.description}</p>
                    <p className="mt-2 font-medium text-primary">{method.value}</p>
                    <Button className="mt-4 w-full" variant="outline" size="sm" asChild>
                      <a href={method.href}>{method.action}</a>
                    </Button>
                  </CardContent>
                </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <AnimatedSection variant="slide-in-left">
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we will get back to you within 24 hours.
                </p>
                
                {submitted ? (
                  <Card className="mt-8 border-primary/30 bg-primary/5">
                    <CardContent className="flex flex-col items-center py-12 text-center">
                      <div className="rounded-full bg-primary/10 p-4">
                        <CheckCircle2 className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold">Message Sent!</h3>
                      <p className="mt-2 text-muted-foreground">
                        Thank you for reaching out. Our team will respond to your inquiry within 24 hours.
                      </p>
                      <Button className="mt-6" onClick={() => setSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="account">Account Support</SelectItem>
                          <SelectItem value="technical">Technical Issue</SelectItem>
                          <SelectItem value="loans">Loans & Credit</SelectItem>
                          <SelectItem value="business">Business Banking</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="How can we help you?" 
                        rows={5}
                        required 
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                )}
              </AnimatedSection>

              {/* Office Locations */}
              <AnimatedSection variant="slide-in-right">
                <h2 className="text-2xl font-bold">Our Offices</h2>
                <p className="mt-2 text-muted-foreground">
                  Visit us at one of our branch locations for in-person assistance.
                </p>
                <div className="mt-8 space-y-6">
                  {offices.map((office) => (
                    <Card key={office.city} className="border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                            <Building2 className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{office.city}</h3>
                            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                              <p className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {office.address}
                              </p>
                              <p className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                {office.phone}
                              </p>
                              <p className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {office.hours}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Operating Hours */}
                <Card className="mt-6 border-border/50 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-semibold">Customer Support Hours</h3>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Phone Support</span>
                        <span className="font-medium">24/7</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Live Chat</span>
                        <span className="font-medium">24/7</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Email Response</span>
                        <span className="font-medium">2-4 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Branch Hours</span>
                        <span className="font-medium">Mon-Fri, 9AM-6PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                <p className="mt-2 text-muted-foreground">
                  Quick answers to common questions
                </p>
              </div>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <Card key={faq.question} className="border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold">{faq.question}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  Can&apos;t find what you&apos;re looking for?
                </p>
                <Button className="mt-4" variant="outline" asChild>
                  <Link href="/help">Visit Help Center</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
