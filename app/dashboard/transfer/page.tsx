'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { accounts, formatCurrency } from '@/lib/bank-data'
import { cn } from '@/lib/utils'
import {
  ArrowRight,
  CheckCircle2,
  User,
  Building2,
  CreditCard,
  Wallet,
  PiggyBank,
  TrendingUp,
} from 'lucide-react'

const accountIcons = {
  checking: Wallet,
  savings: PiggyBank,
  credit: CreditCard,
  investment: TrendingUp,
}

const transferTypes = [
  { id: 'own', name: 'My Accounts', icon: ArrowRight, description: 'Transfer between your accounts' },
  { id: 'someone', name: 'Someone Else', icon: User, description: 'Send to another person' },
  { id: 'external', name: 'External Bank', icon: Building2, description: 'Transfer to another bank' },
]

const recentRecipients = [
  { id: '1', name: 'Sarah Johnson', accountNumber: '****7842', bank: 'Chase' },
  { id: '2', name: 'Michael Chen', accountNumber: '****3915', bank: 'Bank of America' },
  { id: '3', name: 'Emma Wilson', accountNumber: '****6284', bank: 'Wells Fargo' },
]

export default function TransferPage() {
  const [transferType, setTransferType] = useState('own')
  const [fromAccount, setFromAccount] = useState('')
  const [toAccount, setToAccount] = useState('')
  const [amount, setAmount] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      setAmount('')
      setFromAccount('')
      setToAccount('')
    }, 3000)
  }

  const availableFromAccounts = accounts.filter(a => a.type !== 'credit' && a.balance > 0)
  const availableToAccounts = accounts.filter(a => a.id !== fromAccount)

  if (isSuccess) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-chart-2/20">
              <CheckCircle2 className="h-8 w-8 text-chart-2" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Transfer Successful!</h2>
            <p className="mt-2 text-muted-foreground">
              Your transfer of {formatCurrency(parseFloat(amount))} has been initiated.
            </p>
            <Button className="mt-6" onClick={() => setIsSuccess(false)}>
              Make Another Transfer
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Transfer Money</h1>
        <p className="text-muted-foreground">Send money to your accounts or other people.</p>
      </div>

      {/* Transfer Type Selection */}
      <div className="grid gap-4 md:grid-cols-3">
        {transferTypes.map((type) => (
          <Card
            key={type.id}
            className={cn(
              'cursor-pointer transition-all hover:shadow-md',
              transferType === type.id && 'ring-2 ring-primary'
            )}
            onClick={() => setTransferType(type.id)}
          >
            <CardContent className="flex items-center gap-4 p-4">
              <div className={cn(
                'flex h-12 w-12 items-center justify-center rounded-lg',
                transferType === type.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              )}>
                <type.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-foreground">{type.name}</p>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Transfer Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Transfer Details</CardTitle>
            <CardDescription>Fill in the details to complete your transfer.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTransfer} className="space-y-6">
              {/* From Account */}
              <div className="space-y-3">
                <Label>From Account</Label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {availableFromAccounts.map((account) => {
                    const Icon = accountIcons[account.type]
                    return (
                      <div
                        key={account.id}
                        className={cn(
                          'flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all hover:bg-muted/50',
                          fromAccount === account.id && 'border-primary bg-primary/5'
                        )}
                        onClick={() => setFromAccount(account.id)}
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{account.name}</p>
                          <p className="text-xs text-muted-foreground">{formatCurrency(account.balance)}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* To Account (for own transfers) */}
              {transferType === 'own' && (
                <div className="space-y-3">
                  <Label>To Account</Label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {availableToAccounts.map((account) => {
                      const Icon = accountIcons[account.type]
                      return (
                        <div
                          key={account.id}
                          className={cn(
                            'flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all hover:bg-muted/50',
                            toAccount === account.id && 'border-primary bg-primary/5'
                          )}
                          onClick={() => setToAccount(account.id)}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">{account.name}</p>
                            <p className="text-xs text-muted-foreground">{account.accountNumber}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Recipient Details (for external transfers) */}
              {transferType !== 'own' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipient">Recipient Name</Label>
                    <Input id="recipient" placeholder="Enter recipient name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account Number</Label>
                    <Input id="accountNumber" placeholder="Enter account number" />
                  </div>
                  {transferType === 'external' && (
                    <div className="space-y-2">
                      <Label htmlFor="routingNumber">Routing Number</Label>
                      <Input id="routingNumber" placeholder="Enter routing number" />
                    </div>
                  )}
                </div>
              )}

              {/* Amount */}
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-7 text-lg"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>

              {/* Memo */}
              <div className="space-y-2">
                <Label htmlFor="memo">Memo (Optional)</Label>
                <Input id="memo" placeholder="Add a note" />
              </div>

              <Button type="submit" className="w-full gap-2" disabled={!fromAccount || !amount}>
                Transfer Funds
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Recent Recipients */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">Recent Recipients</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentRecipients.map((recipient) => (
              <div
                key={recipient.id}
                className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {recipient.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{recipient.name}</p>
                  <p className="text-xs text-muted-foreground">{recipient.bank} • {recipient.accountNumber}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
