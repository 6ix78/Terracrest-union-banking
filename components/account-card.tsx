import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { type Account, formatCurrency } from '@/lib/bank-data'
import { cn } from '@/lib/utils'
import { CreditCard, Wallet, PiggyBank, TrendingUp } from 'lucide-react'

const accountIcons = {
  checking: Wallet,
  savings: PiggyBank,
  credit: CreditCard,
  investment: TrendingUp,
}

const accountColors = {
  checking: 'bg-primary/10 text-primary',
  savings: 'bg-chart-2/20 text-chart-2',
  credit: 'bg-destructive/10 text-destructive',
  investment: 'bg-chart-3/20 text-chart-3',
}

interface AccountCardProps {
  account: Account
  compact?: boolean
}

export function AccountCard({ account, compact = false }: AccountCardProps) {
  const Icon = accountIcons[account.type]
  const colorClass = accountColors[account.type]

  if (compact) {
    return (
      <Card className="transition-shadow hover:shadow-md">
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className={cn('flex h-10 w-10 items-center justify-center rounded-lg', colorClass)}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{account.name}</p>
              <p className="text-xs text-muted-foreground">{account.accountNumber}</p>
            </div>
          </div>
          <p className={cn('text-sm font-semibold', account.balance < 0 ? 'text-destructive' : 'text-foreground')}>
            {formatCurrency(account.balance)}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {account.type.charAt(0).toUpperCase() + account.type.slice(1)}
        </CardTitle>
        <div className={cn('flex h-9 w-9 items-center justify-center rounded-lg', colorClass)}>
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{formatCurrency(account.balance)}</div>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{account.name}</p>
          <p className="text-xs text-muted-foreground">{account.accountNumber}</p>
        </div>
      </CardContent>
    </Card>
  )
}
