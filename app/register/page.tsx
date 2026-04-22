"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Shield, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const steps = [
  { id: 1, name: "Personal Info" },
  { id: 2, name: "Contact Details" },
  { id: 3, name: "Account Setup" },
  { id: 4, name: "Verification" },
]

const accountTypes = [
  {
    id: "personal",
    name: "Personal Account",
    description: "For individuals and everyday banking needs",
  },
  {
    id: "business",
    name: "Business Account",
    description: "For businesses of all sizes",
  },
  {
    id: "joint",
    name: "Joint Account",
    description: "Shared account for couples or partners",
  },
]

export default function RegisterPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [accountType, setAccountType] = useState("personal")

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 4) {
      handleNext()
      return
    }
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="flex flex-1 flex-col px-4 py-8 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-lg">
          <div className="mb-8">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="TerraCrest Union"
                width={200}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <h1 className="mt-8 text-2xl font-bold tracking-tight">
              Open Your Account
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Join millions of customers who trust TerraCrest Union
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors ${
                      step.id < currentStep
                        ? "border-primary bg-primary text-primary-foreground"
                        : step.id === currentStep
                        ? "border-primary text-primary"
                        : "border-muted text-muted-foreground"
                    }`}
                  >
                    {step.id < currentStep ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`mx-2 h-0.5 w-8 sm:w-12 lg:w-16 transition-colors ${
                        step.id < currentStep ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              {steps.map((step) => (
                <span key={step.id} className="w-10 text-center sm:w-auto">
                  {step.name}
                </span>
              ))}
            </div>
          </div>

          <Card className="border-border/50">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Info */}
                {currentStep === 1 && (
                  <div className="space-y-5">
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
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ssn">Social Security Number</Label>
                      <Input id="ssn" placeholder="XXX-XX-XXXX" required />
                      <p className="text-xs text-muted-foreground">
                        Required for identity verification. Your SSN is encrypted and secure.
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Details */}
                {currentStep === 2 && (
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" placeholder="123 Main Street" required />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="New York" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="State" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ny">New York</SelectItem>
                            <SelectItem value="ca">California</SelectItem>
                            <SelectItem value="tx">Texas</SelectItem>
                            <SelectItem value="fl">Florida</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" placeholder="10001" required />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Account Setup */}
                {currentStep === 3 && (
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <Label>Account Type</Label>
                      <div className="space-y-3">
                        {accountTypes.map((type) => (
                          <div
                            key={type.id}
                            className={`cursor-pointer rounded-lg border-2 p-4 transition-colors ${
                              accountType === type.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => setAccountType(type.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">{type.name}</p>
                                <p className="text-sm text-muted-foreground">{type.description}</p>
                              </div>
                              <div
                                className={`h-5 w-5 rounded-full border-2 ${
                                  accountType === type.id
                                    ? "border-primary bg-primary"
                                    : "border-muted"
                                }`}
                              >
                                {accountType === type.id && (
                                  <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Choose Username</Label>
                      <Input id="username" placeholder="johndoe123" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Create Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          required
                          className="pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Must be at least 8 characters with uppercase, lowercase, number, and symbol.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Verification */}
                {currentStep === 4 && (
                  <div className="space-y-5">
                    <div className="rounded-lg bg-primary/5 p-4">
                      <h3 className="font-semibold">Almost Done!</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Please review and agree to our terms to complete your registration.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="text-sm font-normal leading-relaxed">
                          I agree to the{" "}
                          <Link href="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox id="electronic" required />
                        <Label htmlFor="electronic" className="text-sm font-normal leading-relaxed">
                          I consent to receive electronic communications and disclosures
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox id="marketing" />
                        <Label htmlFor="marketing" className="text-sm font-normal leading-relaxed">
                          I would like to receive promotional offers and updates (optional)
                        </Label>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-muted/30 p-4">
                      <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div className="text-xs text-muted-foreground">
                        <p className="font-medium text-foreground">Your information is secure</p>
                        <p className="mt-1">
                          We use bank-grade encryption to protect your personal and financial 
                          information. Your data will never be shared without your consent.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-8 flex gap-3">
                  {currentStep > 1 && (
                    <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                  )}
                  <Button type="submit" className="flex-1" disabled={isLoading}>
                    {isLoading ? (
                      "Creating Account..."
                    ) : currentStep === 4 ? (
                      "Create Account"
                    ) : (
                      <>
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Background */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="flex h-full flex-col items-center justify-center p-12 text-white">
            <div className="max-w-md text-center">
              <h2 className="text-3xl font-bold">Start Your Journey</h2>
              <p className="mt-4 text-lg text-white/80">
                Opening an account takes less than 5 minutes. Get access to 
                all our banking features instantly.
              </p>
              <div className="mt-12 space-y-4 text-left">
                {[
                  "No monthly maintenance fees",
                  "FDIC insured up to $250,000",
                  "Free nationwide ATM access",
                  "24/7 customer support",
                  "Award-winning mobile app",
                  "Instant account funding",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
