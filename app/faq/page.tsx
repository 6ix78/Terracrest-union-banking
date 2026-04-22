"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  CreditCard,
  Shield,
  Smartphone,
  ArrowRightLeft,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react"
import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"

const faqCategories = [
  { id: "accounts", label: "Accounts", icon: CreditCard },
  { id: "security", label: "Security", icon: Shield },
  { id: "mobile", label: "Mobile Banking", icon: Smartphone },
  { id: "transfers", label: "Transfers", icon: ArrowRightLeft },
  { id: "general", label: "General", icon: HelpCircle },
]

const faqs = {
  accounts: [
    {
      question: "How do I open a new account with TerraCrest Union?",
      answer: "Opening an account is easy! You can apply online through our website by clicking 'Open Account' and following the step-by-step process. You'll need a valid government-issued ID, proof of address, and your Social Security number. The entire process takes about 10-15 minutes, and most accounts are approved instantly."
    },
    {
      question: "What types of accounts does TerraCrest Union offer?",
      answer: "We offer a comprehensive range of accounts including: Personal Checking Accounts, High-Yield Savings Accounts, Money Market Accounts, Certificates of Deposit (CDs), Business Checking and Savings Accounts, and Investment Accounts. Each account type comes with different features and benefits tailored to your financial needs."
    },
    {
      question: "What is the minimum balance required to open an account?",
      answer: "Our Basic Checking account has no minimum balance requirement. For our Premium accounts, a minimum opening deposit of $100 is required. Savings accounts require a minimum of $25 to open. Money Market accounts require $1,000, and CDs start at $500 minimum deposit."
    },
    {
      question: "How can I close my account?",
      answer: "To close your account, you can visit any branch location, call our customer service at 1-800-TERRA-CU, or submit a request through online banking. Please ensure all pending transactions are cleared and any automatic payments are transferred before closing. Any remaining balance will be transferred to your designated account or sent as a check."
    },
    {
      question: "Are there any monthly maintenance fees?",
      answer: "Our Basic accounts have no monthly fees. Premium accounts have a $12 monthly fee which can be waived by maintaining a minimum daily balance of $1,500 or by setting up direct deposit. Student accounts are always fee-free for those aged 17-24 with valid student ID."
    },
  ],
  security: [
    {
      question: "How does TerraCrest Union protect my account?",
      answer: "We employ multiple layers of security including: 256-bit SSL encryption for all transactions, two-factor authentication (2FA), real-time fraud monitoring, biometric login options, automatic session timeout, and 24/7 account monitoring. Your deposits are also FDIC insured up to $250,000."
    },
    {
      question: "What should I do if I suspect fraudulent activity?",
      answer: "Immediately contact our fraud hotline at 1-800-FRAUD-CU (available 24/7). You can also freeze your card instantly through our mobile app or online banking. We'll investigate the activity and issue a new card if necessary. You're protected by our zero-liability fraud protection policy."
    },
    {
      question: "How do I set up two-factor authentication?",
      answer: "Log into your online banking, go to Settings > Security > Two-Factor Authentication. You can choose to receive verification codes via SMS, email, or through an authenticator app. We recommend using an authenticator app for the highest level of security."
    },
    {
      question: "What is your fraud protection policy?",
      answer: "TerraCrest Union offers zero-liability fraud protection. This means you won't be held responsible for unauthorized transactions if you report them promptly. For debit cards, report within 2 business days for full protection. For credit cards, you're protected under federal law with a maximum liability of $50."
    },
    {
      question: "How can I create a strong password?",
      answer: "We recommend passwords that are at least 12 characters long, include uppercase and lowercase letters, numbers, and special characters. Avoid using personal information like birthdays or names. Consider using a password manager. We also support passkey authentication for passwordless login."
    },
  ],
  mobile: [
    {
      question: "How do I download the TerraCrest Union mobile app?",
      answer: "Our mobile app is available on both iOS and Android. Search for 'TerraCrest Union' in the App Store or Google Play Store. The app is free to download. Once installed, log in with your existing online banking credentials or enroll for new access."
    },
    {
      question: "What features are available on the mobile app?",
      answer: "Our mobile app includes: account balance and transaction history, mobile check deposit, fund transfers, bill pay, card controls (lock/unlock, set limits), ATM locator, fingerprint and face recognition login, push notifications for transactions, and 24/7 customer support chat."
    },
    {
      question: "How do I deposit checks using mobile deposit?",
      answer: "Open the app, select 'Deposit' from the menu, choose the account, enter the check amount, then photograph the front and back of the check. Ensure the check is endorsed with 'For mobile deposit only at TerraCrest Union' and your signature. Funds are typically available within 1-2 business days."
    },
    {
      question: "Is mobile banking secure?",
      answer: "Yes, our mobile app uses the same encryption as our online banking. Additional security features include biometric authentication, automatic logout, device verification, and the ability to instantly disable mobile access if your phone is lost or stolen."
    },
    {
      question: "What should I do if I lose my phone?",
      answer: "Immediately contact us to disable mobile banking access. You can also log into online banking from any computer and go to Settings > Devices to remove the lost device. We recommend using your phone's remote wipe feature and updating your banking passwords."
    },
  ],
  transfers: [
    {
      question: "How do I transfer money between accounts?",
      answer: "Log into online or mobile banking, select 'Transfer', choose your source and destination accounts, enter the amount, and confirm. Internal transfers between your TerraCrest Union accounts are instant. You can also set up recurring transfers for regular savings."
    },
    {
      question: "What are the transfer limits?",
      answer: "Daily limits vary by transfer type: Internal transfers up to $50,000/day, External transfers up to $10,000/day (can be increased upon request), Wire transfers up to $100,000/day, and Zelle transfers up to $2,500/day. Business accounts have higher limits."
    },
    {
      question: "How long do external transfers take?",
      answer: "External ACH transfers typically take 1-3 business days. Wire transfers are usually completed same-day if initiated before 4 PM EST. International wire transfers may take 3-5 business days depending on the destination country and intermediary banks."
    },
    {
      question: "Can I cancel a transfer?",
      answer: "Internal transfers can be cancelled if they're scheduled for a future date. For immediate transfers, contact customer service immediately. External transfers can often be cancelled if they haven't been processed yet. Wire transfers cannot be cancelled once initiated."
    },
    {
      question: "Are there fees for transfers?",
      answer: "Internal transfers are free. External ACH transfers are free for up to 6 per month, then $3 each. Domestic wire transfers are $25 outgoing and free incoming. International wire transfers are $45 outgoing. Premium account holders receive reduced or waived wire fees."
    },
  ],
  general: [
    {
      question: "What are TerraCrest Union's business hours?",
      answer: "Our branches are typically open Monday-Friday 9 AM to 5 PM, and Saturday 9 AM to 1 PM. Hours may vary by location. Our online and mobile banking services are available 24/7, and our customer service line is available Monday-Saturday 8 AM to 8 PM EST."
    },
    {
      question: "How do I find the nearest ATM or branch?",
      answer: "Use our ATM/Branch locator on our website or mobile app. Enter your zip code or enable location services for nearby results. TerraCrest Union has over 500 branches and 2,000 fee-free ATMs nationwide. We're also part of the Allpoint network with 55,000+ surcharge-free ATMs."
    },
    {
      question: "How do I update my contact information?",
      answer: "You can update your address, phone number, and email through online banking under Settings > Profile. For legal name changes, please visit a branch with supporting documentation (marriage certificate, court order, etc.). Keep your information current to receive important account notifications."
    },
    {
      question: "Does TerraCrest Union offer direct deposit?",
      answer: "Yes! Direct deposit is free and allows you to receive your paycheck, government benefits, or other recurring payments up to 2 days early. Get your routing and account numbers from online banking and provide them to your employer or benefits provider."
    },
    {
      question: "How do I order checks?",
      answer: "Log into online banking and select 'Services' > 'Order Checks'. Choose your check style and quantity. Standard delivery is free, expedited shipping is available for an additional fee. You can also order checks by calling customer service or visiting a branch."
    },
  ],
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("accounts")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = searchQuery
    ? Object.values(faqs)
        .flat()
        .filter(
          (faq) =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
    : faqs[activeCategory as keyof typeof faqs]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fade-up" className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Help Center
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions about our banking services, accounts, and features.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            {!searchQuery && (
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-2">
                  <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                        activeCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-card hover:bg-muted text-foreground"
                      }`}
                    >
                      <category.icon className="w-5 h-5" />
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ List */}
            <div className={searchQuery ? "lg:col-span-4" : "lg:col-span-3"}>
              {searchQuery && (
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    Showing {filteredFaqs.length} results for &quot;{searchQuery}&quot;
                  </p>
                </div>
              )}

              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-4">
                    We couldn&apos;t find any FAQs matching your search.
                  </p>
                  <Button variant="outline" onClick={() => setSearchQuery("")}>
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection variant="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our support team is here to help. Choose your preferred way to reach us.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <AnimatedSection variant="fade-up" delay={0}>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with our support team in real-time
                </p>
                <Button variant="outline" className="w-full">Start Chat</Button>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={100}>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Speak with a representative
                </p>
                <Button variant="outline" className="w-full">1-800-TERRA-CU</Button>
              </CardContent>
            </Card>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={200}>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a response within 24 hours
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Send Email</Link>
                </Button>
              </CardContent>
            </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
