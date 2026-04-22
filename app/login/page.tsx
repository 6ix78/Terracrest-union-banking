"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Shield, Lock, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1500))
    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
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
              Sign in to your account
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Access your accounts, manage transfers, and more.
            </p>
          </div>

          <Card className="border-border/50">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="username">Username or Email</Label>
                  <Input 
                    id="username" 
                    placeholder="Enter your username" 
                    required 
                    autoComplete="username"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link 
                      href="/forgot-password" 
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      required
                      autoComplete="current-password"
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
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm font-normal">
                      Remember this device
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button variant="outline" type="button">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Biometric
                  </Button>
                  <Button variant="outline" type="button">
                    <Lock className="mr-2 h-4 w-4" />
                    Passkey
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-medium text-primary hover:underline">
              Open an account
            </Link>
          </p>

          {/* Security Notice */}
          <div className="mt-8 flex items-start gap-3 rounded-lg border border-border/50 bg-muted/30 p-4">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div className="text-xs text-muted-foreground">
              <p className="font-medium text-foreground">Your security matters</p>
              <p className="mt-1">
                This is a secure, encrypted connection. Never share your login 
                credentials with anyone. TerraCrest Union will never ask for your 
                password via email or phone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Background */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="flex h-full flex-col items-center justify-center p-12 text-white">
            <div className="max-w-md text-center">
              <h2 className="text-3xl font-bold">Welcome Back</h2>
              <p className="mt-4 text-lg text-white/80">
                Access your accounts, view transactions, and manage your finances 
                securely from anywhere in the world.
              </p>
              <div className="mt-12 grid gap-6">
                <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="rounded-full bg-white/20 p-3">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Bank-Grade Security</p>
                    <p className="text-sm text-white/70">256-bit encryption on all transactions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="rounded-full bg-white/20 p-3">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Biometric Login</p>
                    <p className="text-sm text-white/70">Quick access with fingerprint or face ID</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="rounded-full bg-white/20 p-3">
                    <Lock className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Multi-Factor Auth</p>
                    <p className="text-sm text-white/70">Extra layer of protection for your accounts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
