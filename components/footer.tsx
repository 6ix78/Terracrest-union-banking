import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Blog", href: "/blog" },
  ],
  services: [
    { label: "Personal Banking", href: "/features#personal" },
    { label: "Business Banking", href: "/features#business" },
    { label: "Loans", href: "/features#loans" },
    { label: "Investments", href: "/features#investment" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faq" },
    { label: "Security", href: "/security" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Disclosures", href: "/disclosures" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="TerraCrest Union"
                width={180}
                height={45}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-sidebar-foreground/70">
              Your trusted partner in financial success. Seamless. Fast. Secure banking solutions for everyone.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-full bg-sidebar-accent p-2 text-sidebar-foreground/70 transition-colors hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 transition-colors hover:text-sidebar-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 transition-colors hover:text-sidebar-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 transition-colors hover:text-sidebar-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-sidebar-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>123 Financial District, New York, NY 10004</span>
              </li>
              <li>
                <a
                  href="tel:+1-800-555-0123"
                  className="flex items-center gap-3 text-sm text-sidebar-foreground/70 transition-colors hover:text-sidebar-foreground"
                >
                  <Phone className="h-4 w-4" />
                  +1 (800) 555-0123
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@terracrestunion.com"
                  className="flex items-center gap-3 text-sm text-sidebar-foreground/70 transition-colors hover:text-sidebar-foreground"
                >
                  <Mail className="h-4 w-4" />
                  support@terracrestunion.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-sidebar-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-sidebar-foreground/60">
            &copy; {new Date().getFullYear()} TerraCrest Union. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-sidebar-foreground/60 transition-colors hover:text-sidebar-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FDIC Notice */}
      <div className="bg-sidebar-accent/50 py-4">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs text-sidebar-foreground/50">
            TerraCrest Union is a Member FDIC. Equal Housing Lender. NMLS# 123456. 
            Banking products and services are subject to bank approval.
          </p>
        </div>
      </div>
    </footer>
  )
}
