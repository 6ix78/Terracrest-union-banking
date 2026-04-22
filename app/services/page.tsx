"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CreditCard,
  Building2,
  PiggyBank,
  ArrowRightLeft,
  Globe,
  Shield,
  Smartphone,
  TrendingUp,
  Home,
  GraduationCap,
  Car,
  Briefcase,
  ChevronRight,
  CheckCircle2,
} from "lucide-react"

const bankingServices = [
  {
    icon: CreditCard,
    title: "Personal Banking",
    description: "Comprehensive personal banking solutions tailored to your lifestyle and financial goals.",
    features: ["Savings & Checking Accounts", "Debit & Credit Cards", "Personal Loans", "Mobile Banking"],
    color: "from-primary to-primary/80",
  },
  {
    icon: Building2,
    title: "Business Banking",
    description: "Empower your business with our suite of commercial banking services and solutions.",
    features: ["Business Accounts", "Merchant Services", "Business Loans", "Payroll Services"],
    color: "from-secondary to-secondary/80",
  },
  {
    icon: TrendingUp,
    title: "Investment Services",
    description: "Grow your wealth with our expert investment advisory and portfolio management services.",
    features: ["Wealth Management", "Mutual Funds", "Stock Trading", "Retirement Planning"],
    color: "from-accent to-accent/80",
  },
  {
    icon: Globe,
    title: "International Banking",
    description: "Seamless global banking solutions for international transactions and forex services.",
    features: ["Wire Transfers", "Foreign Exchange", "International Cards", "Multi-Currency Accounts"],
    color: "from-chart-4 to-chart-4/80",
  },
]

const loanProducts = [
  {
    icon: Home,
    title: "Home Loans",
    rate: "6.5%",
    description: "Make your dream home a reality with competitive mortgage rates and flexible terms.",
    features: ["Up to 30-year terms", "Fixed & Variable rates", "No prepayment penalty", "Fast approval"],
  },
  {
    icon: Car,
    title: "Auto Loans",
    rate: "5.9%",
    description: "Drive away in your dream car with our affordable auto financing options.",
    features: ["New & Used vehicles", "Competitive rates", "Flexible terms", "Quick disbursement"],
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    rate: "4.5%",
    description: "Invest in your future with our student loan programs for higher education.",
    features: ["Covers tuition & living", "Grace period", "Low interest rates", "Easy repayment"],
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    rate: "7.5%",
    description: "Fuel your business growth with our flexible commercial lending solutions.",
    features: ["Working capital", "Equipment financing", "Expansion loans", "Line of credit"],
  },
]

const digitalServices = [
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description: "Bank on the go with our feature-rich mobile application available 24/7.",
  },
  {
    icon: ArrowRightLeft,
    title: "Instant Transfers",
    description: "Send and receive money instantly to any bank account worldwide.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Make secure online payments with multi-layer encryption technology.",
  },
  {
    icon: PiggyBank,
    title: "Auto Savings",
    description: "Automate your savings with smart rules and round-up features.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Banking
              <span className="text-primary"> Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              From personal banking to business solutions, we offer a complete range of financial 
              services designed to meet your every need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/register">Open an Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Speak to an Advisor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Banking Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Complete Banking Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re an individual or a business, we have the right banking solutions for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {bankingServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className={`w-full md:w-1/3 bg-gradient-to-br ${service.color} p-8 flex items-center justify-center`}>
                      <service.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="w-full md:w-2/3 p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="link" className="p-0 mt-4 text-primary" asChild>
                        <Link href="/features">
                          Learn more <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Loan Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Flexible Financing Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Competitive rates and flexible terms to help you achieve your goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanProducts.map((loan, index) => (
              <Card key={index} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <loan.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{loan.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-3">From {loan.rate} APR</p>
                  <p className="text-muted-foreground text-sm mb-4">{loan.description}</p>
                  <ul className="space-y-2 mb-4">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Banking */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Digital Banking</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Banking at Your Fingertips
              </h2>
              <p className="text-muted-foreground mb-8">
                Experience the future of banking with our digital solutions. Manage your finances 
                anytime, anywhere with our secure and intuitive digital banking platform.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {digitalServices.map((service, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <Button asChild>
                  <Link href="/register">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/features">View All Features</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white">
                <Image src="/logo.png" alt="TerraCrest Union" width={150} height={50} className="mb-6 brightness-0 invert" />
                <h3 className="text-2xl font-bold mb-4">Download Our App</h3>
                <p className="text-white/80 mb-6">
                  Get instant access to your accounts, transfer funds, pay bills, and more - all from your smartphone.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" className="bg-white text-foreground hover:bg-white/90">
                    App Store
                  </Button>
                  <Button variant="secondary" className="bg-white text-foreground hover:bg-white/90">
                    Google Play
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who trust TerraCrest Union for their banking needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/register">Open Account</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
