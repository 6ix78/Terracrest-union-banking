import { type Transaction, formatCurrency, formatDate } from '@/lib/bank-data'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import {
  ShoppingBag,
  Coffee,
  Zap,
  Film,
  Car,
  ArrowDownLeft,
  ArrowUpRight,
  Percent,
  MoreHorizontal,
} from 'lucide-react'

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Groceries: ShoppingBag,
  Dining: Coffee,
  Utilities: Zap,
  Entertainment: Film,
  Transportation: Car,
  Income: ArrowDownLeft,
  Transfer: ArrowUpRight,
  Interest: Percent,
  Shopping: ShoppingBag,
}

interface TransactionListProps {
  transactions: Transaction[]
  showAccount?: boolean
  limit?: number
}

export function TransactionList({ transactions, showAccount = false, limit }: TransactionListProps) {
  const displayTransactions = limit ? transactions.slice(0, limit) : transactions

  return (
    <div className="space-y-1">
      {displayTransactions.map((transaction) => {
        const Icon = categoryIcons[transaction.category] || MoreHorizontal
        const isPositive = transaction.amount > 0

        return (
          <div
            key={transaction.id}
            className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                'flex h-10 w-10 items-center justify-center rounded-lg',
                isPositive ? 'bg-chart-2/20 text-chart-2' : 'bg-muted text-muted-foreground'
              )}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{transaction.description}</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">{formatDate(transaction.date)}</p>
                  {transaction.status === 'pending' && (
                    <Badge variant="outline" className="text-xs px-1.5 py-0">
                      Pending
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className={cn(
                'text-sm font-semibold',
                isPositive ? 'text-chart-2' : 'text-foreground'
              )}>
                {isPositive ? '+' : ''}{formatCurrency(transaction.amount)}
              </p>
              <p className="text-xs text-muted-foreground">{transaction.category}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
