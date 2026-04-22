import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LoginForm } from '@/components/login-form'
import {
  Mountain,
  Shield,
  Smartphone,
  PiggyBank,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: '256-bit encryption and multi-factor authentication protect your accounts.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Banking',
    description: 'Access your accounts anytime, anywhere with our secure mobile app.',
  },
  {
    icon: PiggyBank,
    title: 'High-Yield Savings',
    description: 'Earn competitive interest rates with our savings accounts.',
  },
]

const benefits = [
  'No monthly maintenance fees',
  'Free ATM access nationwide',
  '24/7 customer support',
  'Instant money transfers',
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Mountain className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">TerraCrest</span>
              <span className="text-xs text-muted-foreground">Union Banking</span>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Personal
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Business
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Investments
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="hidden sm:block">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Button size="sm" className="gap-1">
              Open Account
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Shield className="h-4 w-4" />
                Trusted by over 2 million members
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Banking that grows with you
              </h1>
              <p className="max-w-lg text-pretty text-lg text-muted-foreground">
                Experience modern banking with TerraCrest Union. Secure, simple, and designed for your financial success.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Login Card */}
            <div className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Sign in to Online Banking</CardTitle>
                  <CardDescription>
                    Access your accounts securely
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <LoginForm />
                  <div className="mt-6 border-t border-border pt-6">
                    <p className="text-center text-sm text-muted-foreground">
                      New to TerraCrest Union?{' '}
                      <Link href="#" className="font-medium text-primary hover:underline">
                        Open an account
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why choose TerraCrest Union?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We combine cutting-edge technology with personalized service to help you achieve your financial goals.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to start your journey?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Join over 2 million members who trust TerraCrest Union with their finances.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="gap-2">
              Open an Account
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <Mountain className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold text-foreground">TerraCrest Union</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Building financial futures since 1952. Member FDIC.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Products</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Checking</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Savings</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Credit Cards</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Loans</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Company</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Press</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Legal</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Security</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Accessibility</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © 2026 TerraCrest Union. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
