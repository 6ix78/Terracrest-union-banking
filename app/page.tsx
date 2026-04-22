import Link from "next/link"
import Image from "next/image"
import { 
  Shield, 
  Smartphone, 
  CreditCard, 
  TrendingUp, 
  Globe, 
  Clock, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle2,
  Banknote,
  PiggyBank,
  Building2,
  Landmark,
  HeadphonesIcon,
  Lock,
  Zap,
  BarChart3,
  Send,
  Wallet,
  Star,
  Play,
  Percent,
  RefreshCw,
  FileText,
  Bell
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const stats = [
  { value: "2M+", label: "Active Customers" },
  { value: "$50B+", label: "Assets Managed" },
  { value: "99.9%", label: "Uptime Reliability" },
  { value: "24/7", label: "Customer Support" },
]

const coreFeatures = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "256-bit encryption and multi-factor authentication protect every transaction you make.",
  },
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description: "Manage your finances anytime, anywhere with our award-winning mobile application.",
  },
  {
    icon: CreditCard,
    title: "Smart Cards",
    description: "Contactless payments, instant notifications, and customizable spending limits.",
  },
  {
    icon: TrendingUp,
    title: "Investment Tools",
    description: "Build wealth with our intelligent investment portfolio management and analytics.",
  },
  {
    icon: Globe,
    title: "Global Transfers",
    description: "Send money worldwide with competitive rates and real-time tracking.",
  },
  {
    icon: Clock,
    title: "Instant Payments",
    description: "Real-time money transfers between accounts with zero waiting time.",
  },
]

const services = [
  {
    icon: Wallet,
    title: "Personal Checking",
    description: "Fee-free checking with unlimited transactions and ATM access worldwide.",
    features: ["No monthly fees", "Free ATM withdrawals", "Mobile check deposit"],
  },
  {
    icon: PiggyBank,
    title: "Savings Accounts",
    description: "High-yield savings accounts to help your money grow faster.",
    features: ["Competitive APY rates", "Auto-save features", "No minimum balance"],
  },
  {
    icon: Banknote,
    title: "Loans & Credit",
    description: "Flexible lending solutions for all your personal and business needs.",
    features: ["Low interest rates", "Quick approval", "Flexible terms"],
  },
  {
    icon: BarChart3,
    title: "Investments",
    description: "Grow your wealth with diversified investment options and expert guidance.",
    features: ["Managed portfolios", "Real-time tracking", "Expert advisors"],
  },
]

const whyChooseUs = [
  {
    icon: Lock,
    title: "Unmatched Security",
    description: "Your funds and data are protected by industry-leading security protocols and encryption.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience instant transfers, real-time notifications, and seamless transactions.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our dedicated team is always available to assist you with any questions or concerns.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized globally for excellence in digital banking and customer satisfaction.",
  },
]

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Small Business Owner",
    content: "TerraCrest Union transformed how I manage my business finances. The mobile app is incredibly intuitive, and their business banking features are exactly what I needed.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Investment Analyst",
    content: "The investment tools and portfolio management features are top-notch. I have seen significant growth in my savings since switching to TerraCrest Union.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Freelance Designer",
    content: "International transfers used to be a nightmare. Now with TerraCrest Union, I receive payments from global clients quickly and with minimal fees.",
    rating: 5,
  },
]

const partners = [
  { name: "Visa", logo: "VISA" },
  { name: "Mastercard", logo: "Mastercard" },
  { name: "Apple Pay", logo: "Apple Pay" },
  { name: "Google Pay", logo: "Google Pay" },
  { name: "SWIFT", logo: "SWIFT" },
]

const bankingSteps = [
  {
    step: "01",
    title: "Create Account",
    description: "Sign up in minutes with just your basic information. No paperwork needed.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Verify Identity",
    description: "Complete quick KYC verification to secure and activate your account.",
    icon: Shield,
  },
  {
    step: "03",
    title: "Fund Account",
    description: "Add funds via bank transfer, card, or direct deposit to get started.",
    icon: Wallet,
  },
  {
    step: "04",
    title: "Start Banking",
    description: "Enjoy seamless banking with all features unlocked and ready to use.",
    icon: Zap,
  },
]

const bankingBenefits = [
  {
    icon: Percent,
    title: "Best Interest Rates",
    value: "4.5% APY",
    description: "Earn more on your savings with our competitive rates",
  },
  {
    icon: RefreshCw,
    title: "Instant Transfers",
    value: "< 30 sec",
    description: "Lightning-fast transfers between accounts",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    value: "180+ Countries",
    description: "Send and receive money worldwide",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    value: "Real-time",
    description: "Stay informed with instant notifications",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary py-20 lg:py-32">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                  <Shield className="h-4 w-4" />
                  <span>Trusted by 2+ Million Customers Worldwide</span>
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Banking Made{" "}
                  <span className="text-accent">Seamless</span>,{" "}
                  <span className="text-accent">Fast</span> &{" "}
                  <span className="text-accent">Secure</span>
                </h1>
                <p className="mt-6 text-pretty text-lg text-white/80 sm:text-xl">
                  Experience the future of banking with TerraCrest Union. Manage your finances, 
                  grow your wealth, and achieve your financial goals with our innovative digital banking platform.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                    <Link href="/register">
                      Open Free Account <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20" asChild>
                    <Link href="/features">Explore Features</Link>
                  </Button>
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:justify-start">
                  {["No Hidden Fees", "FDIC Insured", "24/7 Support"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative mx-auto w-full max-w-lg">
                  <div className="absolute -left-4 -top-4 h-72 w-72 animate-pulse rounded-full bg-accent/30 blur-3xl" />
                  <div className="absolute -bottom-4 -right-4 h-72 w-72 animate-pulse rounded-full bg-white/20 blur-3xl" />
                  <Card className="relative border-0 bg-white/10 p-8 backdrop-blur-xl">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/60">Total Balance</p>
                        <p className="text-3xl font-bold text-white">$124,563.00</p>
                      </div>
                      <div className="rounded-full bg-accent/20 p-3">
                        <Wallet className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg bg-white/10 p-4">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-primary p-2">
                            <CreditCard className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">Checking Account</p>
                            <p className="text-xs text-white/60">****4582</p>
                          </div>
                        </div>
                        <p className="font-semibold text-white">$45,230.00</p>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-white/10 p-4">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-accent p-2">
                            <PiggyBank className="h-4 w-4 text-accent-foreground" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">Savings Account</p>
                            <p className="text-xs text-white/60">****7891</p>
                          </div>
                        </div>
                        <p className="font-semibold text-white">$79,333.00</p>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <Button className="flex-1 bg-white text-primary hover:bg-white/90" size="sm">
                        <Send className="mr-2 h-4 w-4" /> Transfer
                      </Button>
                      <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90" size="sm">
                        <Banknote className="mr-2 h-4 w-4" /> Deposit
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border bg-card py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banking Benefits Highlight */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {bankingBenefits.map((benefit) => (
                <Card key={benefit.title} className="group overflow-hidden border-border/50 transition-all hover:border-primary/30 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <p className="text-2xl font-bold text-primary">{benefit.value}</p>
                    <h3 className="mt-1 font-semibold">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Modern Banking for Modern Life
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Discover a new way to manage your money with features designed for the digital age.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {coreFeatures.map((feature) => (
                <Card key={feature.title} className="group border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/features">
                  View All Features <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Get Started</p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Open Your Account in 4 Easy Steps
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Getting started with TerraCrest Union is quick and simple. Follow these steps to begin your journey.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {bankingSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  {index < bankingSteps.length - 1 && (
                    <div className="absolute left-1/2 top-16 hidden h-0.5 w-full bg-gradient-to-r from-primary/50 to-transparent lg:block" />
                  )}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <span className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">Step {step.step}</span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/register">
                  Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="bg-muted/50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</p>
                <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                  Complete Banking Solutions for Every Need
                </h2>
                <p className="mt-4 text-pretty text-lg text-muted-foreground">
                  From everyday banking to long-term investments, we provide comprehensive 
                  financial services tailored to your unique goals and lifestyle.
                </p>
                <div className="mt-8 space-y-4">
                  {services.map((service) => (
                    <div key={service.title} className="group flex gap-4 rounded-xl bg-card p-4 transition-all hover:shadow-md">
                      <div className="shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{service.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <span key={feature} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                              <CheckCircle2 className="h-3 w-3" /> {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative lg:pl-8">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 blur-2xl" />
                  <Card className="relative overflow-hidden border-0 shadow-2xl">
                    <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-white/70">TerraCrest Union</p>
                          <p className="text-lg font-semibold">Premium Card</p>
                        </div>
                        <CreditCard className="h-10 w-10 text-white/80" />
                      </div>
                      <p className="mt-8 font-mono text-xl tracking-widest">**** **** **** 4582</p>
                      <div className="mt-4 flex justify-between text-sm">
                        <div>
                          <p className="text-white/60">Card Holder</p>
                          <p>JOHN DOE</p>
                        </div>
                        <div>
                          <p className="text-white/60">Expires</p>
                          <p>12/28</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Available Credit</p>
                          <p className="text-2xl font-bold text-primary">$25,000.00</p>
                        </div>
                        <Button size="sm" asChild>
                          <Link href="/register">Get Card</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <div className="grid gap-6 sm:grid-cols-2">
                  {whyChooseUs.map((item, index) => (
                    <Card key={item.title} className={`border-border/50 ${index % 2 === 1 ? "sm:translate-y-6" : ""}`}>
                      <CardContent className="p-6">
                        <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Built for Trust</p>
                <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                  Your Financial Security is Our Priority
                </h2>
                <p className="mt-4 text-pretty text-lg text-muted-foreground">
                  At TerraCrest Union, we combine cutting-edge technology with decades of 
                  financial expertise to deliver a banking experience you can trust.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "FDIC insured deposits up to $250,000",
                    "Real-time fraud monitoring and alerts",
                    "Biometric authentication options",
                    "End-to-end encrypted transactions",
                    "Regular third-party security audits",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video/Demo Section */}
        <section className="bg-sidebar py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="text-sidebar-foreground">
                <p className="text-sm font-semibold uppercase tracking-wider text-sidebar-primary">See It In Action</p>
                <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                  Experience the Future of Banking
                </h2>
                <p className="mt-4 text-pretty text-lg text-sidebar-foreground/70">
                  Watch how TerraCrest Union makes managing your money easier than ever. 
                  From instant transfers to smart savings, see all features in action.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Intuitive dashboard for complete financial overview",
                    "One-click transfers and bill payments",
                    "Smart budgeting tools and spending insights",
                    "Seamless integration with your favorite apps",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sidebar-foreground/80">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-sidebar-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button size="lg" className="bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90" asChild>
                    <Link href="/register">Start Free Trial</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-2xl bg-sidebar-accent shadow-2xl">
                  <div className="flex h-full items-center justify-center">
                    <button className="group flex h-20 w-20 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground shadow-lg transition-transform hover:scale-110">
                      <Play className="h-8 w-8 translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Trusted by Thousands of Happy Customers
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                See what our customers have to say about their experience with TerraCrest Union.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary">
              <div className="grid items-center gap-8 p-8 lg:grid-cols-2 lg:p-12">
                <div className="text-white">
                  <h2 className="text-balance text-3xl font-bold sm:text-4xl">
                    Banking at Your Fingertips
                  </h2>
                  <p className="mt-4 text-pretty text-lg text-white/80">
                    Download our mobile app and enjoy seamless banking wherever you go. 
                    Available on iOS and Android devices.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[
                      "Instant balance checks and transfers",
                      "Mobile check deposit",
                      "Bill pay and scheduled payments",
                      "Card controls and security",
                      "Real-time notifications",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-white/90">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                      App Store
                    </Button>
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.191l-2.302 2.302-8.634-8.835z"/>
                      </svg>
                      Google Play
                    </Button>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <div className="relative mx-auto flex max-w-xs justify-center">
                    <div className="relative z-10 rounded-[3rem] border-8 border-white/20 bg-sidebar p-2 shadow-2xl">
                      <div className="h-96 w-48 overflow-hidden rounded-[2.5rem] bg-card">
                        <div className="bg-primary p-4 text-white">
                          <div className="flex items-center gap-2">
                            <Image src="/logo.png" alt="TerraCrest" width={24} height={24} className="brightness-0 invert" />
                            <span className="text-sm font-semibold">TerraCrest</span>
                          </div>
                          <p className="mt-4 text-2xl font-bold">$124,563</p>
                          <p className="text-xs text-white/70">Total Balance</p>
                        </div>
                        <div className="space-y-3 p-4">
                          <div className="rounded-lg bg-muted p-3">
                            <p className="text-xs text-muted-foreground">Quick Transfer</p>
                            <div className="mt-2 flex gap-2">
                              {["J", "M", "S", "+"].map((letter) => (
                                <div key={letter} className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                                  {letter}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="rounded-lg bg-muted p-3">
                            <p className="text-xs text-muted-foreground">Recent</p>
                            <div className="mt-2 space-y-2">
                              <div className="flex items-center justify-between text-xs">
                                <span>Netflix</span>
                                <span className="text-destructive">-$15.99</span>
                              </div>
                              <div className="flex items-center justify-between text-xs">
                                <span>Deposit</span>
                                <span className="text-primary">+$2,500</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -right-8 top-12 -z-10 rounded-[3rem] border-8 border-white/10 bg-sidebar/50 p-2 opacity-50 blur-sm">
                      <div className="h-80 w-40 rounded-[2.5rem] bg-card/50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="border-y border-border bg-muted/30 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
              Trusted Payment Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {partners.map((partner) => (
                <div key={partner.name} className="text-xl font-bold text-muted-foreground/50">
                  {partner.logo}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-8 text-center lg:p-16">
              <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
                Ready to Experience Better Banking?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-white/80">
                Join over 2 million customers who trust TerraCrest Union for their banking needs. 
                Open your free account in minutes.
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
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> No credit check required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Free for personal use
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Security Badges */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Protected by</p>
                  <p className="font-semibold">256-bit SSL</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
                <Landmark className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Member</p>
                  <p className="font-semibold">FDIC Insured</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
                <Building2 className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Equal Housing</p>
                  <p className="font-semibold">Lender</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">BBB Rating</p>
                  <p className="font-semibold">A+ Accredited</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
