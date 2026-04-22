'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { transactions, accounts, formatCurrency, formatDate } from '@/lib/bank-data'
import { cn } from '@/lib/utils'
import {
  Search,
  Filter,
  Download,
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

const categories = ['All', 'Groceries', 'Dining', 'Utilities', 'Entertainment', 'Transportation', 'Income', 'Transfer', 'Shopping']

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || transaction.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getAccountName = (accountId: string) => {
    const account = accounts.find(a => a.id === accountId)
    return account?.name || 'Unknown'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Transactions</h1>
          <p className="text-muted-foreground">View and search all your transactions.</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 5).map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transactions List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-base font-semibold">
            <span>All Transactions</span>
            <span className="text-sm font-normal text-muted-foreground">
              {filteredTransactions.length} transactions
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {filteredTransactions.map((transaction) => {
              const Icon = categoryIcons[transaction.category] || MoreHorizontal
              const isPositive = transaction.amount > 0

              return (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between rounded-lg p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-lg',
                      isPositive ? 'bg-chart-2/20 text-chart-2' : 'bg-muted text-muted-foreground'
                    )}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{transaction.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{formatDate(transaction.date)}</span>
                        <span>•</span>
                        <span>{getAccountName(transaction.accountId)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={cn(
                      'font-semibold',
                      isPositive ? 'text-chart-2' : 'text-foreground'
                    )}>
                      {isPositive ? '+' : ''}{formatCurrency(transaction.amount)}
                    </p>
                    <div className="flex items-center justify-end gap-2">
                      <Badge variant="outline" className="text-xs">
                        {transaction.category}
                      </Badge>
                      {transaction.status === 'pending' && (
                        <Badge variant="secondary" className="text-xs">
                          Pending
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
