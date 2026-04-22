import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Send, QrCode, Receipt, Plus } from 'lucide-react'

const actions = [
  { name: 'Transfer', href: '/dashboard/transfer', icon: Send, description: 'Send money' },
  { name: 'Pay Bills', href: '/dashboard/bills', icon: Receipt, description: 'Pay utilities' },
  { name: 'Deposit', href: '/dashboard/deposit', icon: Plus, description: 'Add funds' },
  { name: 'Scan QR', href: '/dashboard/scan', icon: QrCode, description: 'Quick pay' },
]

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {actions.map((action) => (
        <Link key={action.name} href={action.href}>
          <Button
            variant="outline"
            className="h-auto w-full flex-col gap-2 py-4 hover:bg-primary hover:text-primary-foreground"
          >
            <action.icon className="h-5 w-5" />
            <div className="text-center">
              <p className="text-sm font-medium">{action.name}</p>
              <p className="text-xs opacity-70">{action.description}</p>
            </div>
          </Button>
        </Link>
      ))}
    </div>
  )
}
