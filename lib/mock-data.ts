export const user = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@email.com",
  phone: "+1 (555) 123-4567",
  avatar: null,
  accountType: "Premium",
  memberSince: "2020-03-15",
}

export const accounts = [
  {
    id: "acc_1",
    name: "Primary Checking",
    type: "checking",
    number: "****4582",
    balance: 45230.5,
    available: 45230.5,
    currency: "USD",
    status: "active",
  },
  {
    id: "acc_2",
    name: "High-Yield Savings",
    type: "savings",
    number: "****7891",
    balance: 79333.25,
    available: 79333.25,
    currency: "USD",
    status: "active",
    apy: 4.5,
  },
  {
    id: "acc_3",
    name: "Investment Account",
    type: "investment",
    number: "****3456",
    balance: 125000.0,
    available: 125000.0,
    currency: "USD",
    status: "active",
  },
]

export const cards = [
  {
    id: "card_1",
    name: "TerraCrest Premium",
    type: "credit",
    number: "****4582",
    expiry: "12/28",
    holder: "JOHN DOE",
    limit: 25000,
    used: 3250.75,
    status: "active",
    color: "primary",
  },
  {
    id: "card_2",
    name: "TerraCrest Debit",
    type: "debit",
    number: "****7891",
    expiry: "08/27",
    holder: "JOHN DOE",
    linkedAccount: "acc_1",
    status: "active",
    color: "secondary",
  },
  {
    id: "card_3",
    name: "Virtual Card",
    type: "virtual",
    number: "****9012",
    expiry: "06/26",
    holder: "JOHN DOE",
    limit: 5000,
    used: 850.0,
    status: "active",
    color: "accent",
  },
]

export const transactions = [
  {
    id: "txn_1",
    type: "debit",
    category: "shopping",
    description: "Amazon.com",
    amount: -156.99,
    date: "2024-01-15T10:30:00Z",
    status: "completed",
    accountId: "acc_1",
  },
  {
    id: "txn_2",
    type: "credit",
    category: "income",
    description: "Salary Deposit",
    amount: 5500.0,
    date: "2024-01-15T08:00:00Z",
    status: "completed",
    accountId: "acc_1",
  },
  {
    id: "txn_3",
    type: "debit",
    category: "food",
    description: "Starbucks",
    amount: -8.75,
    date: "2024-01-14T15:45:00Z",
    status: "completed",
    accountId: "acc_1",
  },
  {
    id: "txn_4",
    type: "debit",
    category: "utilities",
    description: "Electric Bill - ConEd",
    amount: -145.5,
    date: "2024-01-14T12:00:00Z",
    status: "completed",
    accountId: "acc_1",
  },
  {
    id: "txn_5",
    type: "debit",
    category: "transport",
    description: "Uber Trip",
    amount: -24.5,
    date: "2024-01-13T20:30:00Z",
    status: "completed",
    accountId: "acc_1",
  },
  {
    id: "txn_6",
    type: "transfer",
    category: "transfer",
    description: "Transfer to Savings",
    amount: -1000.0,
    date: "2024-01-13T10:00:00Z",
    status: "completed",
    accountId: "acc_1",
  },
  {
    id: "txn_7",
    type: "credit",
    category: "transfer",
    description: "Transfer from Checking",
    amount: 1000.0,
    date: "2024-01-13T10:00:00Z",
    status: "completed",
    accountId: "acc_2",
  },
  {
    id: "txn_8",
    type: "debit",
    category: "entertainment",
    description: "Netflix Subscription",
    amount: -15.99,
    date: "2024-01-12T00:00:00Z",
    status: "completed",
    accountId: "acc_1",
  },
  {
    id: "txn_9",
    type: "debit",
    category: "shopping",
    description: "Apple Store",
    amount: -999.0,
    date: "2024-01-11T14:20:00Z",
    status: "completed",
    accountId: "acc_1",
  },
  {
    id: "txn_10",
    type: "debit",
    category: "food",
    description: "Whole Foods Market",
    amount: -187.32,
    date: "2024-01-10T18:45:00Z",
    status: "completed",
    accountId: "acc_1",
  },
]

export const beneficiaries = [
  {
    id: "ben_1",
    name: "Jane Doe",
    email: "jane.doe@email.com",
    bank: "Chase Bank",
    accountNumber: "****5678",
    type: "personal",
  },
  {
    id: "ben_2",
    name: "ABC Company LLC",
    email: "payments@abccompany.com",
    bank: "Bank of America",
    accountNumber: "****9012",
    type: "business",
  },
  {
    id: "ben_3",
    name: "Michael Smith",
    email: "m.smith@email.com",
    bank: "Wells Fargo",
    accountNumber: "****3456",
    type: "personal",
  },
]

export const savingsGoals = [
  {
    id: "goal_1",
    name: "Emergency Fund",
    target: 30000,
    current: 22500,
    deadline: "2024-12-31",
    icon: "shield",
  },
  {
    id: "goal_2",
    name: "Vacation",
    target: 5000,
    current: 3200,
    deadline: "2024-06-30",
    icon: "plane",
  },
  {
    id: "goal_3",
    name: "New Car",
    target: 40000,
    current: 15000,
    deadline: "2025-06-30",
    icon: "car",
  },
]

export const bills = [
  {
    id: "bill_1",
    name: "Electric Bill",
    provider: "ConEd",
    amount: 145.5,
    dueDate: "2024-01-20",
    status: "pending",
    autopay: true,
  },
  {
    id: "bill_2",
    name: "Internet",
    provider: "Verizon Fios",
    amount: 89.99,
    dueDate: "2024-01-22",
    status: "pending",
    autopay: true,
  },
  {
    id: "bill_3",
    name: "Rent",
    provider: "Property Management Co.",
    amount: 2500.0,
    dueDate: "2024-02-01",
    status: "upcoming",
    autopay: false,
  },
  {
    id: "bill_4",
    name: "Phone Bill",
    provider: "AT&T",
    amount: 75.0,
    dueDate: "2024-01-25",
    status: "pending",
    autopay: true,
  },
]

export const loans = [
  {
    id: "loan_1",
    name: "Home Mortgage",
    type: "mortgage",
    principal: 350000,
    balance: 285000,
    rate: 5.99,
    monthlyPayment: 2098.43,
    nextDue: "2024-02-01",
    status: "active",
  },
  {
    id: "loan_2",
    name: "Auto Loan",
    type: "auto",
    principal: 35000,
    balance: 18500,
    rate: 4.49,
    monthlyPayment: 650.0,
    nextDue: "2024-01-28",
    status: "active",
  },
]

export const investments = [
  {
    id: "inv_1",
    name: "Growth Portfolio",
    type: "portfolio",
    value: 85000,
    gain: 12500,
    gainPercent: 17.24,
  },
  {
    id: "inv_2",
    name: "Retirement Fund",
    type: "retirement",
    value: 125000,
    gain: 35000,
    gainPercent: 38.89,
  },
  {
    id: "inv_3",
    name: "Tech Stocks",
    type: "stocks",
    value: 32000,
    gain: -2500,
    gainPercent: -7.25,
  },
]

export const monthlySpending = [
  { month: "Aug", amount: 4200 },
  { month: "Sep", amount: 3800 },
  { month: "Oct", amount: 4500 },
  { month: "Nov", amount: 5200 },
  { month: "Dec", amount: 6100 },
  { month: "Jan", amount: 3950 },
]

export const spendingByCategory = [
  { category: "Shopping", amount: 1250, color: "hsl(var(--chart-1))" },
  { category: "Food & Dining", amount: 850, color: "hsl(var(--chart-2))" },
  { category: "Utilities", amount: 450, color: "hsl(var(--chart-3))" },
  { category: "Transport", amount: 320, color: "hsl(var(--chart-4))" },
  { category: "Entertainment", amount: 280, color: "hsl(var(--chart-5))" },
]

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export function formatTime(dateString: string): string {
  return new Date(dateString).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  })
}
