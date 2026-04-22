"use client"

import Link from "next/link"
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Send, 
  CreditCard,
  PiggyBank,
  TrendingUp,
  ArrowRight,
  Eye,
  EyeOff,
  MoreHorizontal,
  Plus,
  Wallet
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  accounts, 
  transactions, 
  savingsGoals, 
  monthlySpending,
  formatCurrency, 
  formatDate,
  formatTime 
} from "@/lib/mock-data"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const quickActions = [
  { icon: Send, label: "Transfer", href: "/dashboard/transfer" },
  { icon: CreditCard, label: "Pay Bills", href: "/dashboard/bills" },
  { icon: PiggyBank, label: "Save", href: "/dashboard/savings" },
  { icon: TrendingUp, label: "Invest", href: "/dashboard/investments" },
]

export default function DashboardPage() {
  const [showBalance, setShowBalance] = useState(true)
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0)
  const recentTransactions = transactions.slice(0, 5)

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back, John</h1>
          <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your accounts today.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard/statements">View Statements</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard/transfer">
              <Send className="mr-2 h-4 w-4" /> Transfer
            </Link>
          </Button>
        </div>
      </div>

      {/* Total Balance Card */}
      <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-primary-foreground/70">Total Balance</p>
              <div className="mt-1 flex items-center gap-3">
                <p className="text-4xl font-bold">
                  {showBalance ? formatCurrency(totalBalance) : "••••••••"}
                </p>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="rounded-full p-1 hover:bg-white/10"
                >
                  {showBalance ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <p className="mt-2 flex items-center gap-1 text-sm text-primary-foreground/70">
                <ArrowUpRight className="h-4 w-4 text-green-300" />
                <span className="text-green-300">+2.5%</span>
                <span>from last month</span>
              </p>
            </div>
            <div className="hidden rounded-full bg-white/10 p-4 sm:block">
              <Wallet className="h-10 w-10" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {quickActions.map((action) => (
          <Link key={action.label} href={action.href}>
            <Card className="group cursor-pointer transition-all hover:border-primary/50 hover:shadow-md">
              <CardContent className="flex flex-col items-center p-4 text-center">
                <div className="rounded-full bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <action.icon className="h-5 w-5" />
                </div>
                <span className="mt-2 text-sm font-medium">{action.label}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Accounts Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Account Cards */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Your Accounts</CardTitle>
                <CardDescription>Overview of all your accounts</CardDescription>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/accounts">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accounts.map((account) => (
                  <div
                    key={account.id}
                    className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`rounded-full p-2 ${
                        account.type === "checking" 
                          ? "bg-primary/10 text-primary" 
                          : account.type === "savings"
                          ? "bg-accent/10 text-accent"
                          : "bg-secondary/10 text-secondary"
                      }`}>
                        {account.type === "checking" ? (
                          <CreditCard className="h-5 w-5" />
                        ) : account.type === "savings" ? (
                          <PiggyBank className="h-5 w-5" />
                        ) : (
                          <TrendingUp className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{account.name}</p>
                        <p className="text-sm text-muted-foreground">{account.number}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        {showBalance ? formatCurrency(account.balance) : "••••••"}
                      </p>
                      {account.apy && (
                        <p className="text-xs text-muted-foreground">{account.apy}% APY</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Spending Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Spending</CardTitle>
              <CardDescription>Your spending over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlySpending}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                  <Tooltip 
                    formatter={(value: number) => [formatCurrency(value), "Spending"]}
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Recent Transactions */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Transactions</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/transactions">View All</Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((txn) => (
                  <div key={txn.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-full p-2 ${
                        txn.amount > 0 
                          ? "bg-green-100 text-green-600" 
                          : "bg-red-100 text-red-600"
                      }`}>
                        {txn.amount > 0 ? (
                          <ArrowDownRight className="h-4 w-4" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{txn.description}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(txn.date)}
                        </p>
                      </div>
                    </div>
                    <p className={`text-sm font-semibold ${
                      txn.amount > 0 ? "text-green-600" : "text-foreground"
                    }`}>
                      {txn.amount > 0 ? "+" : ""}{formatCurrency(txn.amount)}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Savings Goals */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Savings Goals</CardTitle>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/dashboard/savings">
                  <Plus className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {savingsGoals.map((goal) => {
                  const progress = (goal.current / goal.target) * 100
                  return (
                    <div key={goal.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{goal.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatCurrency(goal.current)} / {formatCurrency(goal.target)}
                        </p>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
