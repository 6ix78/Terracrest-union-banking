export interface Account {
  id: string
  name: string
  type: 'checking' | 'savings' | 'credit' | 'investment'
  balance: number
  accountNumber: string
  currency: string
}

export interface Transaction {
  id: string
  accountId: string
  description: string
  amount: number
  date: string
  category: string
  type: 'credit' | 'debit'
  status: 'completed' | 'pending' | 'failed'
}

export const accounts: Account[] = [
  {
    id: 'acc-1',
    name: 'Primary Checking',
    type: 'checking',
    balance: 12847.53,
    accountNumber: '****4821',
    currency: 'USD',
  },
  {
    id: 'acc-2',
    name: 'High-Yield Savings',
    type: 'savings',
    balance: 45230.00,
    accountNumber: '****7392',
    currency: 'USD',
  },
  {
    id: 'acc-3',
    name: 'TerraCrest Platinum Card',
    type: 'credit',
    balance: -2340.67,
    accountNumber: '****9156',
    currency: 'USD',
  },
  {
    id: 'acc-4',
    name: 'Investment Portfolio',
    type: 'investment',
    balance: 128450.89,
    accountNumber: '****3847',
    currency: 'USD',
  },
]

export const transactions: Transaction[] = [
  {
    id: 'txn-1',
    accountId: 'acc-1',
    description: 'Whole Foods Market',
    amount: -127.43,
    date: '2026-04-22',
    category: 'Groceries',
    type: 'debit',
    status: 'completed',
  },
  {
    id: 'txn-2',
    accountId: 'acc-1',
    description: 'Direct Deposit - Payroll',
    amount: 4250.00,
    date: '2026-04-20',
    category: 'Income',
    type: 'credit',
    status: 'completed',
  },
  {
    id: 'txn-3',
    accountId: 'acc-1',
    description: 'Netflix Subscription',
    amount: -15.99,
    date: '2026-04-19',
    category: 'Entertainment',
    type: 'debit',
    status: 'completed',
  },
  {
    id: 'txn-4',
    accountId: 'acc-1',
    description: 'Electric Company',
    amount: -142.30,
    date: '2026-04-18',
    category: 'Utilities',
    type: 'debit',
    status: 'completed',
  },
  {
    id: 'txn-5',
    accountId: 'acc-1',
    description: 'Transfer to Savings',
    amount: -500.00,
    date: '2026-04-17',
    category: 'Transfer',
    type: 'debit',
    status: 'completed',
  },
  {
    id: 'txn-6',
    accountId: 'acc-2',
    description: 'Transfer from Checking',
    amount: 500.00,
    date: '2026-04-17',
    category: 'Transfer',
    type: 'credit',
    status: 'completed',
  },
  {
    id: 'txn-7',
    accountId: 'acc-2',
    description: 'Interest Payment',
    amount: 38.42,
    date: '2026-04-15',
    category: 'Interest',
    type: 'credit',
    status: 'completed',
  },
  {
    id: 'txn-8',
    accountId: 'acc-3',
    description: 'Amazon.com',
    amount: -89.99,
    date: '2026-04-21',
    category: 'Shopping',
    type: 'debit',
    status: 'completed',
  },
  {
    id: 'txn-9',
    accountId: 'acc-3',
    description: 'Gas Station',
    amount: -52.40,
    date: '2026-04-20',
    category: 'Transportation',
    type: 'debit',
    status: 'completed',
  },
  {
    id: 'txn-10',
    accountId: 'acc-1',
    description: 'Pending - Restaurant',
    amount: -67.50,
    date: '2026-04-22',
    category: 'Dining',
    type: 'debit',
    status: 'pending',
  },
]

export const spendingByCategory = [
  { category: 'Groceries', amount: 487.23, color: 'var(--chart-1)' },
  { category: 'Utilities', amount: 312.45, color: 'var(--chart-2)' },
  { category: 'Entertainment', amount: 156.87, color: 'var(--chart-3)' },
  { category: 'Dining', amount: 234.50, color: 'var(--chart-4)' },
  { category: 'Transportation', amount: 198.30, color: 'var(--chart-5)' },
]

export const monthlyBalance = [
  { month: 'Nov', balance: 9200 },
  { month: 'Dec', balance: 11500 },
  { month: 'Jan', balance: 10800 },
  { month: 'Feb', balance: 12100 },
  { month: 'Mar', balance: 11400 },
  { month: 'Apr', balance: 12847 },
]

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
