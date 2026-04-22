import Link from "next/link"
import { 
  Shield, 
  Smartphone, 
  CreditCard, 
  TrendingUp, 
  Globe, 
  Clock, 
  ArrowRight,
  CheckCircle2,
  Banknote,
  PiggyBank,
  Building2,
  HeadphonesIcon,
  Lock,
  Zap,
  BarChart3,
  Send,
  Wallet,
  Users,
  Bell,
  FileText,
  RefreshCw,
  Percent,
  Eye,
  Fingerprint,
  QrCode,
  Landmark,
  Receipt,
  Calculator,
  Target,
  DollarSign,
  LineChart,
  PieChart,
  Briefcase,
  Home,
  Car,
  GraduationCap,
  Heart,
  Plane
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features & Services | TerraCrest Union",
  description: "Explore our comprehensive banking features including personal banking, business solutions, loans, investments, and more.",
}

const personalBankingFeatures = [
  {
    icon: Wallet,
    title: "Checking Accounts",
    description: "Fee-free checking with unlimited transactions, free ATM access worldwide, and instant debit card issuance.",
    features: ["No monthly fees", "Free overdraft protection", "Unlimited transactions", "Mobile check deposit"],
  },
  {
    icon: PiggyBank,
    title: "Savings Accounts",
    description: "High-yield savings accounts with competitive APY rates to help your money grow faster.",
    features: ["4.5% APY interest", "No minimum balance", "Auto-save features", "Goal-based savings"],
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Rewards credit cards with cashback, travel points, and exclusive member benefits.",
    features: ["Up to 5% cashback", "No annual fee options", "Fraud protection", "Instant virtual cards"],
  },
  {
    icon: Receipt,
    title: "Bill Pay",
    description: "Schedule and automate all your bill payments from one convenient dashboard.",
    features: ["Auto-pay scheduling", "Payment reminders", "E-bill delivery", "Payment history"],
  },
]

const businessBankingFeatures = [
  {
    icon: Building2,
    title: "Business Checking",
    description: "Tailored checking accounts designed for businesses of all sizes with advanced cash management tools.",
    features: ["Multi-user access", "Bulk payments", "API integration", "Dedicated support"],
  },
  {
    icon: Briefcase,
    title: "Merchant Services",
    description: "Accept payments anywhere with our integrated point-of-sale and payment processing solutions.",
    features: ["Low transaction fees", "Same-day deposits", "Payment terminals", "Online payments"],
  },
  {
    icon: Users,
    title: "Payroll Services",
    description: "Streamline your payroll with automated processing, tax calculations, and direct deposits.",
    features: ["Auto tax filing", "Direct deposit", "Employee portal", "Compliance tools"],
  },
  {
    icon: LineChart,
    title: "Business Analytics",
    description: "Get actionable insights into your business finances with advanced reporting and analytics.",
    features: ["Cash flow analysis", "Expense tracking", "Custom reports", "Forecasting tools"],
  },
]

const loanProducts = [
  {
    icon: Home,
    title: "Home Mortgages",
    description: "Competitive mortgage rates with flexible terms for buying, refinancing, or renovating your home.",
    rate: "From 5.99% APR",
    features: ["Fixed & adjustable rates", "First-time buyer programs", "Refinancing options", "Pre-approval in minutes"],
  },
  {
    icon: Car,
    title: "Auto Loans",
    description: "Finance your new or used vehicle with low rates and flexible repayment terms.",
    rate: "From 4.49% APR",
    features: ["New & used vehicles", "Refinancing available", "No prepayment penalty", "Quick approval"],
  },
  {
    icon: Banknote,
    title: "Personal Loans",
    description: "Unsecured personal loans for debt consolidation, major purchases, or unexpected expenses.",
    rate: "From 6.99% APR",
    features: ["No collateral needed", "Fixed monthly payments", "Funds in 24 hours", "Flexible terms"],
  },
  {
    icon: GraduationCap,
    title: "Student Loans",
    description: "Invest in education with competitive student loan rates and flexible repayment options.",
    rate: "From 4.99% APR",
    features: ["In-school deferment", "Grace periods", "Income-based repayment", "Parent PLUS loans"],
  },
]

const investmentServices = [
  {
    icon: PieChart,
    title: "Managed Portfolios",
    description: "Let our expert advisors manage your investments with personalized portfolio strategies.",
    features: ["Professional management", "Diversified portfolios", "Rebalancing", "Tax optimization"],
  },
  {
    icon: Target,
    title: "Retirement Planning",
    description: "Plan for your future with IRA accounts, 401(k) rollovers, and retirement calculators.",
    features: ["Traditional & Roth IRA", "401(k) rollovers", "Pension planning", "Social Security optimization"],
  },
  {
    icon: TrendingUp,
    title: "Self-Directed Trading",
    description: "Take control with our powerful trading platform for stocks, ETFs, and mutual funds.",
    features: ["Zero commission trades", "Real-time quotes", "Research tools", "Mobile trading"],
  },
  {
    icon: DollarSign,
    title: "Wealth Management",
    description: "Comprehensive wealth management services for high-net-worth individuals and families.",
    features: ["Dedicated advisor", "Estate planning", "Trust services", "Tax strategies"],
  },
]

const digitalFeatures = [
  {
    icon: Smartphone,
    title: "Mobile Banking App",
    description: "Full-featured mobile banking with Touch ID, Face ID, and advanced security features.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Real-time alerts for transactions, low balances, bill due dates, and suspicious activity.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Security",
    description: "Secure your account with fingerprint and facial recognition authentication.",
  },
  {
    icon: QrCode,
    title: "QR Payments",
    description: "Send and receive money instantly by scanning QR codes with your mobile device.",
  },
  {
    icon: Eye,
    title: "Spending Insights",
    description: "AI-powered spending analysis and budgeting recommendations to optimize your finances.",
  },
  {
    icon: RefreshCw,
    title: "Instant Transfers",
    description: "Transfer money between accounts or to other banks instantly, 24/7/365.",
  },
]

const securityFeatures = [
  {
    icon: Shield,
    title: "256-bit Encryption",
    description: "Bank-grade encryption protects all your data and transactions.",
  },
  {
    icon: Lock,
    title: "Multi-Factor Auth",
    description: "Extra layers of security with SMS, email, and authenticator app verification.",
  },
  {
    icon: Eye,
    title: "Fraud Monitoring",
    description: "24/7 AI-powered fraud detection and automatic transaction alerts.",
  },
  {
    icon: Landmark,
    title: "FDIC Insured",
    description: "Your deposits are insured up to $250,000 by the FDIC.",
  },
]

const accountPlans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for individuals starting their banking journey",
    features: [
      "Fee-free checking account",
      "Standard savings account",
      "Mobile & online banking",
      "Debit card included",
      "24/7 customer support",
      "Up to 5 free ATM withdrawals/month",
    ],
    highlighted: false,
    cta: "Open Account",
  },
  {
    name: "Premium",
    price: "$12/mo",
    description: "Enhanced features for growing your wealth",
    features: [
      "Everything in Basic",
      "High-yield savings (4.5% APY)",
      "Unlimited free ATM withdrawals",
      "Premium credit card",
      "Investment account access",
      "Priority customer support",
      "Free wire transfers",
      "Overdraft protection",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Business",
    price: "$29/mo",
    description: "Complete solution for businesses of all sizes",
    features: [
      "Everything in Premium",
      "Multi-user access",
      "Payroll services",
      "Merchant account",
      "Business analytics dashboard",
      "Dedicated account manager",
      "API access",
      "Bulk payment processing",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
]

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection variant="fade-up" className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Features & Services
              </h1>
              <p className="mt-6 text-pretty text-lg text-white/80">
                Discover our comprehensive suite of banking products and services designed 
                to help you achieve your financial goals at every stage of life.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <Link href="/register">Open Account</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20" asChild>
                  <Link href="/contact">Talk to an Advisor</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Personal Banking Section */}
        <section id="personal" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection variant="fade-up" className="mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Personal Banking</p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Banking That Works for You
              </h2>
              <p className="mt-4 max-w-3xl text-pretty text-lg text-muted-foreground">
                Our personal banking solutions are designed to simplify your financial life with 
                intuitive tools, competitive rates, and exceptional service.
              </p>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2">
              {personalBankingFeatures.map((feature, i) => (
                <AnimatedSection key={feature.title} variant="fade-up" delay={i * 100}>
                <Card className="border-border/50 transition-all hover:shadow-lg h-full">
                  <CardHeader>
                    <div className="mb-2 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Business Banking Section */}
        <section id="business" className="scroll-mt-20 bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection variant="fade-up" className="mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Business Banking</p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Power Your Business Growth
              </h2>
              <p className="mt-4 max-w-3xl text-pretty text-lg text-muted-foreground">
                From startups to enterprises, our business banking solutions provide the tools 
                and support you need to manage cash flow, accept payments, and scale operations.
              </p>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2">
              {businessBankingFeatures.map((feature, i) => (
                <AnimatedSection key={feature.title} variant="fade-up" delay={i * 100}>
                <Card className="border-border/50 bg-card transition-all hover:shadow-lg h-full">
                  <CardHeader>
                    <div className="mb-2 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Loans Section */}
        <section id="loans" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Loans & Credit</p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Flexible Financing Solutions
              </h2>
              <p className="mt-4 max-w-3xl text-pretty text-lg text-muted-foreground">
                Whether you are buying a home, financing a car, or need funds for personal projects, 
                our competitive loan products offer flexible terms and quick approvals.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {loanProducts.map((loan) => (
                <Card key={loan.title} className="border-border/50 transition-all hover:shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="mb-2 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                      <loan.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{loan.title}</CardTitle>
                    <p className="text-2xl font-bold text-primary">{loan.rate}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{loan.description}</p>
                    <ul className="space-y-2">
                      {loan.features.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-4 w-full" variant="outline" asChild>
                      <Link href="/contact">Apply Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section id="investment" className="scroll-mt-20 bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Investment Services</p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Grow Your Wealth with Confidence
              </h2>
              <p className="mt-4 max-w-3xl text-pretty text-lg text-muted-foreground">
                Build long-term wealth with our comprehensive investment solutions, 
                from self-directed trading to fully managed portfolios.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {investmentServices.map((service) => (
                <Card key={service.title} className="border-border/50 bg-card transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Features Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Digital Banking</p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Banking at Your Fingertips
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-muted-foreground">
                Experience seamless digital banking with our award-winning mobile app and online platform.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {digitalFeatures.map((feature) => (
                <Card key={feature.title} className="border-border/50 transition-all hover:border-primary/30 hover:shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="shrink-0 rounded-xl bg-primary/10 p-3 text-primary">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="bg-sidebar py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="text-sidebar-foreground">
                <p className="text-sm font-semibold uppercase tracking-wider text-sidebar-primary">Security First</p>
                <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                  Your Security is Our Top Priority
                </h2>
                <p className="mt-4 text-pretty text-lg text-sidebar-foreground/70">
                  We employ industry-leading security measures to protect your accounts, 
                  personal information, and financial data at all times.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {securityFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3">
                      <div className="shrink-0 rounded-lg bg-sidebar-accent p-2 text-sidebar-primary">
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sidebar-foreground">{feature.title}</h3>
                        <p className="text-sm text-sidebar-foreground/70">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-sidebar-primary/20 to-sidebar-accent p-8">
                  <div className="flex h-full items-center justify-center">
                    <Shield className="h-48 w-48 text-sidebar-primary opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Account Plans</p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Choose the Right Plan for You
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-muted-foreground">
                Whether you are an individual or a business, we have a plan that fits your needs.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {accountPlans.map((plan) => (
                <Card 
                  key={plan.name} 
                  className={`relative overflow-hidden border-2 transition-all hover:shadow-lg ${
                    plan.highlighted 
                      ? "border-primary shadow-lg" 
                      : "border-border/50"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Free" && <span className="text-muted-foreground">/month</span>}
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`mt-8 w-full ${plan.highlighted ? "" : "variant-outline"}`}
                      variant={plan.highlighted ? "default" : "outline"}
                      asChild
                    >
                      <Link href="/register">{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-white/80">
              Join millions of satisfied customers who trust TerraCrest Union for their banking needs.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/register">
                  Open Free Account <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
