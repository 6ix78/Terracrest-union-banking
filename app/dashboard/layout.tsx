import { BankSidebar } from '@/components/bank-sidebar'
import { MobileHeader } from '@/components/mobile-header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <BankSidebar />
      <MobileHeader />
      <main className="lg:pl-64">
        <div className="mx-auto max-w-6xl px-4 py-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </main>
    </div>
  )
}
