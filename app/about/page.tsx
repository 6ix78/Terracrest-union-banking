import Link from "next/link"
import Image from "next/image"
import { 
  Shield, 
  Users, 
  Award,
  ArrowRight,
  Target,
  Heart,
  Globe,
  Lightbulb,
  CheckCircle2,
  Building2,
  Landmark,
  TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | TerraCrest Union",
  description: "Learn about TerraCrest Union's mission, values, and commitment to providing exceptional banking services since 1952.",
}

const stats = [
  { value: "70+", label: "Years of Service" },
  { value: "2M+", label: "Happy Customers" },
  { value: "$50B+", label: "Assets Managed" },
  { value: "500+", label: "Expert Employees" },
]

const values = [
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We prioritize the safety of your assets and personal information with industry-leading security measures.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make is guided by what is best for our customers and their financial wellbeing.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously invest in technology to provide cutting-edge banking solutions that simplify your life.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Banking should be available to everyone, everywhere. We break down barriers to financial services.",
  },
]

const milestones = [
  {
    year: "1952",
    title: "Foundation",
    description: "TerraCrest Union was founded with a vision to provide accessible banking services to local communities.",
  },
  {
    year: "1978",
    title: "National Expansion",
    description: "Expanded operations across all 50 states, becoming a truly national financial institution.",
  },
  {
    year: "1995",
    title: "Digital Pioneer",
    description: "Launched one of the first online banking platforms, revolutionizing how customers manage their finances.",
  },
  {
    year: "2010",
    title: "Mobile Banking",
    description: "Introduced our award-winning mobile banking app, bringing banking to customers&apos; fingertips.",
  },
  {
    year: "2020",
    title: "Global Reach",
    description: "Expanded international services to 180+ countries, enabling seamless global transactions.",
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Implemented AI-powered financial tools for personalized banking experiences and fraud prevention.",
  },
]

const leadership = [
  {
    name: "Michael Chen",
    role: "Chief Executive Officer",
    bio: "25+ years in financial services, former VP at major investment banks.",
  },
  {
    name: "Sarah Williams",
    role: "Chief Financial Officer",
    bio: "Former Big Four partner, expert in regulatory compliance and risk management.",
  },
  {
    name: "David Rodriguez",
    role: "Chief Technology Officer",
    bio: "Tech innovator with background at leading fintech companies and Silicon Valley startups.",
  },
  {
    name: "Jennifer Park",
    role: "Chief Customer Officer",
    bio: "Customer experience expert dedicated to making banking accessible and enjoyable for all.",
  },
]

const awards = [
  "Best Digital Bank 2024 - FinTech Awards",
  "Top Customer Satisfaction - J.D. Power 2024",
  "Most Innovative Bank - Banking Technology Awards",
  "Best Mobile Banking App - App Store Finance",
  "Excellence in Security - Cyber Defense Magazine",
  "Best Workplace in Finance - Forbes 2024",
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection variant="fade-up" className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
                About TerraCrest Union
              </h1>
              <p className="mt-6 text-pretty text-lg text-white/80">
                For over 70 years, we have been committed to helping individuals and businesses 
                achieve their financial goals through innovative banking solutions and exceptional service.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border bg-card py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} variant="fade-up" delay={i * 80} className="text-center">
                  <p className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <AnimatedSection variant="slide-in-left">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Mission</p>
                <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                  Empowering Financial Success for Everyone
                </h2>
                <p className="mt-4 text-pretty text-lg text-muted-foreground">
                  At TerraCrest Union, our mission is to democratize banking and make financial 
                  services accessible, understandable, and beneficial for all. We believe that 
                  everyone deserves the tools and support to build a secure financial future.
                </p>
                <p className="mt-4 text-pretty text-muted-foreground">
                  We achieve this through continuous innovation, unwavering commitment to security, 
                  and a customer-first approach that puts your needs at the center of everything we do.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild>
                    <Link href="/features">Explore Our Services</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </AnimatedSection>
              <AnimatedSection variant="slide-in-right" className="relative">
                <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="flex h-full items-center justify-center p-8">
                    <Image
                      src="/logo.png"
                      alt="TerraCrest Union"
                      width={300}
                      height={300}
                      className="h-auto w-full max-w-xs"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection variant="fade-up" className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Values</p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                What We Stand For
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-muted-foreground">
                Our core values guide every interaction and decision, ensuring we deliver 
                the best possible experience to our customers.
              </p>
            </AnimatedSection>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, i) => (
                <AnimatedSection key={value.title} variant="fade-up" delay={i * 100}>
                  <Card className="border-border/50 text-center h-full">
                    <CardContent className="pt-6">
                      <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/10 p-4 text-primary">
                        <value.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-semibold">{value.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection variant="fade-up" className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Journey</p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                70+ Years of Excellence
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-muted-foreground">
                From our humble beginnings to becoming a leading digital bank, 
                explore the key milestones in our history.
              </p>
            </AnimatedSection>
            <div className="relative">
              <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border lg:block" />
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <AnimatedSection
                    key={milestone.year}
                    variant={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                    delay={0}
                    className={`relative flex flex-col gap-4 lg:flex-row lg:gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <Card className="inline-block border-border/50">
                        <CardContent className="p-6">
                          <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                          <h3 className="mt-2 text-lg font-semibold">{milestone.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-primary bg-card lg:block" />
                    <div className="flex-1" />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-muted/30 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection variant="fade-up" className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Leadership</p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Meet Our Executive Team
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-muted-foreground">
                Our experienced leadership team brings decades of expertise in banking, 
                technology, and customer service.
              </p>
            </AnimatedSection>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {leadership.map((leader, i) => (
                <AnimatedSection key={leader.name} variant="fade-up" delay={i * 100}>
                  <Card className="border-border/50 text-center h-full">
                    <CardContent className="pt-6">
                      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
                        {leader.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <h3 className="text-lg font-semibold">{leader.name}</h3>
                      <p className="text-sm font-medium text-primary">{leader.role}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{leader.bio}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <AnimatedSection variant="slide-in-left">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Recognition</p>
                <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                  Award-Winning Excellence
                </h2>
                <p className="mt-4 text-pretty text-lg text-muted-foreground">
                  Our commitment to innovation, security, and customer satisfaction has 
                  earned us recognition from industry leaders and publications worldwide.
                </p>
                <ul className="mt-8 space-y-4">
                  {awards.map((award) => (
                    <li key={award} className="flex items-center gap-3">
                      <Award className="h-5 w-5 shrink-0 text-accent" />
                      <span className="text-muted-foreground">{award}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection variant="slide-in-right" className="grid grid-cols-2 gap-4">
                <Card className="border-border/50 p-6 text-center">
                  <TrendingUp className="mx-auto h-10 w-10 text-primary" />
                  <p className="mt-2 text-2xl font-bold">98%</p>
                  <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                </Card>
                <Card className="border-border/50 p-6 text-center">
                  <Users className="mx-auto h-10 w-10 text-primary" />
                  <p className="mt-2 text-2xl font-bold">4.8/5</p>
                  <p className="text-sm text-muted-foreground">App Store Rating</p>
                </Card>
                <Card className="border-border/50 p-6 text-center">
                  <Shield className="mx-auto h-10 w-10 text-primary" />
                  <p className="mt-2 text-2xl font-bold">0</p>
                  <p className="text-sm text-muted-foreground">Security Breaches</p>
                </Card>
                <Card className="border-border/50 p-6 text-center">
                  <Landmark className="mx-auto h-10 w-10 text-primary" />
                  <p className="mt-2 text-2xl font-bold">A+</p>
                  <p className="text-sm text-muted-foreground">BBB Rating</p>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="bg-sidebar py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center text-sidebar-foreground">
              <p className="text-sm font-semibold uppercase tracking-wider text-sidebar-primary">Community Impact</p>
              <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
                Giving Back to Our Communities
              </h2>
              <p className="mt-4 text-pretty text-lg text-sidebar-foreground/70">
                We believe in the power of community. Through our foundation and volunteer programs, 
                we have invested over $100 million in financial literacy, affordable housing, 
                and small business development initiatives.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div className="rounded-xl bg-sidebar-accent p-6">
                  <p className="text-3xl font-bold text-sidebar-primary">$100M+</p>
                  <p className="mt-1 text-sm text-sidebar-foreground/70">Community Investment</p>
                </div>
                <div className="rounded-xl bg-sidebar-accent p-6">
                  <p className="text-3xl font-bold text-sidebar-primary">50K+</p>
                  <p className="mt-1 text-sm text-sidebar-foreground/70">Volunteer Hours</p>
                </div>
                <div className="rounded-xl bg-sidebar-accent p-6">
                  <p className="text-3xl font-bold text-sidebar-primary">1M+</p>
                  <p className="mt-1 text-sm text-sidebar-foreground/70">People Reached</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-8 text-center lg:p-16">
              <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
                Join the TerraCrest Union Family
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-white/80">
                Experience the difference of banking with a partner who truly cares about 
                your financial success. Open your account today.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link href="/register">
                    Open Free Account <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href="/contact">Contact Us</Link>
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
