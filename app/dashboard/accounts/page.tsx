import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { accounts, transactions, formatCurrency } from '@/lib/bank-data'
import { TransactionList } from '@/components/transaction-list'
import { cn } from '@/lib/utils'
import { CreditCard, Wallet, PiggyBank, TrendingUp, Plus, MoreVertical } from 'lucide-react'

const accountIcons = {
  checking: Wallet,
  savings: PiggyBank,
  credit: CreditCard,
  investment: TrendingUp,
}

const accountColors = {
  checking: 'from-primary to-primary/80',
  savings: 'from-chart-2 to-chart-2/80',
  credit: 'from-destructive to-destructive/80',
  investment: 'from-chart-3 to-chart-3/80',
}

export default function AccountsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Accounts</h1>
          <p className="text-muted-foreground">Manage and view all your accounts in one place.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Open New Account
        </Button>
      </div>

      {/* Account Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {accounts.map((account) => {
          const Icon = accountIcons[account.type]
          const colorClass = accountColors[account.type]
          const accountTransactions = transactions.filter(t => t.accountId === account.id)

          return (
            <Card key={account.id} className="overflow-hidden">
              <div className={cn('bg-gradient-to-r p-6 text-white', colorClass)}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-white/80">{account.type.charAt(0).toUpperCase() + account.type.slice(1)}</p>
                    <p className="mt-1 text-lg font-semibold">{account.name}</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-white/80">Available Balance</p>
                  <p className="text-3xl font-bold">{formatCurrency(Math.abs(account.balance))}</p>
                  {account.type === 'credit' && (
                    <p className="mt-1 text-sm text-white/80">Credit Used</p>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-white/80">Account {account.accountNumber}</p>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-sm text-muted-foreground">Recent Activity</span>
                  <span className="text-xs text-muted-foreground">{accountTransactions.length} transactions</span>
                </div>
                {accountTransactions.length > 0 ? (
                  <TransactionList transactions={accountTransactions} limit={3} />
                ) : (
                  <p className="py-4 text-center text-sm text-muted-foreground">No recent transactions</p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Account Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">Account Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {accounts.map((account) => (
              <div key={account.id} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-lg',
                    account.type === 'checking' && 'bg-primary/10 text-primary',
                    account.type === 'savings' && 'bg-chart-2/20 text-chart-2',
                    account.type === 'credit' && 'bg-destructive/10 text-destructive',
                    account.type === 'investment' && 'bg-chart-3/20 text-chart-3',
                  )}>
                    {(() => {
                      const Icon = accountIcons[account.type]
                      return <Icon className="h-5 w-5" />
                    })()}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{account.name}</p>
                    <p className="text-sm text-muted-foreground">{account.accountNumber}</p>
                  </div>
                </div>
                <p className={cn('font-semibold', account.balance < 0 ? 'text-destructive' : 'text-foreground')}>
                  {formatCurrency(account.balance)}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
