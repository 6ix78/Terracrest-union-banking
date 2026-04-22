import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  FileQuestion,
  CreditCard,
  ArrowLeftRight,
  Shield,
  Smartphone,
  ChevronRight,
} from 'lucide-react'

const faqCategories = [
  { icon: CreditCard, name: 'Accounts', count: 12 },
  { icon: ArrowLeftRight, name: 'Transfers', count: 8 },
  { icon: Shield, name: 'Security', count: 15 },
  { icon: Smartphone, name: 'Mobile App', count: 10 },
]

const popularQuestions = [
  { question: 'How do I reset my password?', category: 'Security' },
  { question: 'What are the transfer limits?', category: 'Transfers' },
  { question: 'How do I set up direct deposit?', category: 'Accounts' },
  { question: 'How do I enable two-factor authentication?', category: 'Security' },
  { question: 'Can I link external accounts?', category: 'Accounts' },
]

export default function HelpPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Help Center</h1>
        <p className="mt-2 text-muted-foreground">Find answers to your questions or get in touch with support.</p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for help articles..."
              className="h-12 pl-10 text-base"
            />
          </div>
        </CardContent>
      </Card>

      {/* Contact Options */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Live Chat</h3>
            <p className="mt-1 text-sm text-muted-foreground">Chat with our support team</p>
            <Button className="mt-4 w-full">Start Chat</Button>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Call Us</h3>
            <p className="mt-1 text-sm text-muted-foreground">1-800-TERRA-CU</p>
            <Button variant="outline" className="mt-4 w-full">Call Now</Button>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Email Support</h3>
            <p className="mt-1 text-sm text-muted-foreground">support@terracrest.com</p>
            <Button variant="outline" className="mt-4 w-full">Send Email</Button>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base font-semibold">
            <FileQuestion className="h-5 w-5 text-primary" />
            Browse by Topic
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {faqCategories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="h-auto justify-start gap-3 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="font-medium">{category.name}</p>
                  <p className="text-xs text-muted-foreground">{category.count} articles</p>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Questions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {popularQuestions.map((item) => (
            <Button
              key={item.question}
              variant="ghost"
              className="h-auto w-full justify-between p-4 text-left"
            >
              <div>
                <p className="font-medium text-foreground">{item.question}</p>
                <p className="text-sm text-muted-foreground">{item.category}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Support Hours */}
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="font-semibold text-foreground">Support Hours</h3>
            <p className="mt-2 text-muted-foreground">
              Monday - Friday: 8:00 AM - 8:00 PM EST<br />
              Saturday: 9:00 AM - 5:00 PM EST<br />
              Sunday: Closed
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              For urgent matters outside business hours, please use our automated phone system or secure messaging.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
