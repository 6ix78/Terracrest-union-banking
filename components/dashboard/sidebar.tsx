"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  CreditCard, 
  ArrowLeftRight, 
  FileText, 
  PiggyBank,
  Send,
  Receipt,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  User,
  TrendingUp,
  Wallet,
  History,
  Shield,
  Landmark
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const mainNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Accounts",
    href: "/dashboard/accounts",
    icon: Wallet,
  },
  {
    title: "Cards",
    href: "/dashboard/cards",
    icon: CreditCard,
  },
  {
    title: "Transactions",
    href: "/dashboard/transactions",
    icon: History,
  },
]

const transferNavItems = [
  {
    title: "Transfer Money",
    href: "/dashboard/transfer",
    icon: Send,
  },
  {
    title: "Pay Bills",
    href: "/dashboard/bills",
    icon: Receipt,
  },
  {
    title: "Beneficiaries",
    href: "/dashboard/beneficiaries",
    icon: User,
  },
]

const financeNavItems = [
  {
    title: "Savings Goals",
    href: "/dashboard/savings",
    icon: PiggyBank,
  },
  {
    title: "Investments",
    href: "/dashboard/investments",
    icon: TrendingUp,
  },
  {
    title: "Loans",
    href: "/dashboard/loans",
    icon: Landmark,
  },
]

const accountNavItems = [
  {
    title: "Statements",
    href: "/dashboard/statements",
    icon: FileText,
  },
  {
    title: "Security",
    href: "/dashboard/security",
    icon: Shield,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Help & Support",
    href: "/dashboard/help",
    icon: HelpCircle,
  },
]

interface NavItemProps {
  item: {
    title: string
    href: string
    icon: React.ElementType
  }
  pathname: string
}

function NavItem({ item, pathname }: NavItemProps) {
  const isActive = pathname === item.href
  
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
        isActive
          ? "bg-sidebar-primary text-sidebar-primary-foreground"
          : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
      )}
    >
      <item.icon className="h-5 w-5" />
      {item.title}
    </Link>
  )
}

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="TerraCrest Union"
            width={150}
            height={40}
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-4 py-6">
        <div className="space-y-6">
          {/* Main Navigation */}
          <div>
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50">
              Overview
            </p>
            <nav className="space-y-1">
              {mainNavItems.map((item) => (
                <NavItem key={item.href} item={item} pathname={pathname} />
              ))}
            </nav>
          </div>

          <Separator className="bg-sidebar-border" />

          {/* Transfers */}
          <div>
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50">
              Transfers
            </p>
            <nav className="space-y-1">
              {transferNavItems.map((item) => (
                <NavItem key={item.href} item={item} pathname={pathname} />
              ))}
            </nav>
          </div>

          <Separator className="bg-sidebar-border" />

          {/* Finance */}
          <div>
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50">
              Finance
            </p>
            <nav className="space-y-1">
              {financeNavItems.map((item) => (
                <NavItem key={item.href} item={item} pathname={pathname} />
              ))}
            </nav>
          </div>

          <Separator className="bg-sidebar-border" />

          {/* Account */}
          <div>
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50">
              Account
            </p>
            <nav className="space-y-1">
              {accountNavItems.map((item) => (
                <NavItem key={item.href} item={item} pathname={pathname} />
              ))}
            </nav>
          </div>
        </div>
      </ScrollArea>

      {/* User Section */}
      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sidebar-primary text-sm font-semibold text-sidebar-primary-foreground">
            JD
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-medium text-sidebar-foreground">John Doe</p>
            <p className="truncate text-xs text-sidebar-foreground/60">Premium Account</p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          className="mt-2 w-full justify-start text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
          asChild
        >
          <Link href="/login">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Link>
        </Button>
      </div>
    </aside>
  )
}
