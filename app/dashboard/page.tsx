import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AccountCard } from '@/components/account-card'
import { TransactionList } from '@/components/transaction-list'
import { QuickActions } from '@/components/quick-actions'
import { SpendingChart } from '@/components/spending-chart'
import { accounts, transactions, formatCurrency } from '@/lib/bank-data'
import { ArrowRight, TrendingUp, Bell } from 'lucide-react'

export default function DashboardPage() {
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0)
  const recentTransactions = transactions.filter(t => t.accountId === 'acc-1').slice(0, 5)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Welcome back, James</h1>
          <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your accounts today.</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Bell className="h-4 w-4" />
          3 Notifications
        </Button>
      </div>

      {/* Total Balance Card */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-primary-foreground/80">Total Balance</p>
              <p className="text-3xl font-bold">{formatCurrency(totalBalance)}</p>
              <div className="mt-2 flex items-center gap-1 text-sm text-primary-foreground/80">
                <TrendingUp className="h-4 w-4" />
                <span>+2.5% from last month</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href="/dashboard/transfer">
                <Button variant="secondary" className="gap-2">
                  Send Money
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <QuickActions />

      {/* Accounts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>

      {/* Charts and Transactions */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Balance Trend */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-semibold">Balance Trend</CardTitle>
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
              Last 6 months
            </Button>
          </CardHeader>
          <CardContent>
            <SpendingChart />
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base font-semibold">Recent Transactions</CardTitle>
            <Link href="/dashboard/transactions">
              <Button variant="ghost" size="sm" className="gap-1 text-xs text-muted-foreground">
                View all
                <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="px-2">
            <TransactionList transactions={recentTransactions} limit={5} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
