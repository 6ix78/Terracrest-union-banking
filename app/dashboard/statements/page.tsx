import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { accounts } from '@/lib/bank-data'
import { FileText, Download, Calendar } from 'lucide-react'

const statements = [
  { id: '1', month: 'April 2026', accountId: 'acc-1', date: '2026-04-01', size: '245 KB' },
  { id: '2', month: 'March 2026', accountId: 'acc-1', date: '2026-03-01', size: '312 KB' },
  { id: '3', month: 'February 2026', accountId: 'acc-1', date: '2026-02-01', size: '287 KB' },
  { id: '4', month: 'January 2026', accountId: 'acc-1', date: '2026-01-01', size: '298 KB' },
  { id: '5', month: 'December 2025', accountId: 'acc-1', date: '2025-12-01', size: '342 KB' },
  { id: '6', month: 'April 2026', accountId: 'acc-2', date: '2026-04-01', size: '156 KB' },
  { id: '7', month: 'March 2026', accountId: 'acc-2', date: '2026-03-01', size: '178 KB' },
  { id: '8', month: 'April 2026', accountId: 'acc-3', date: '2026-04-01', size: '423 KB' },
  { id: '9', month: 'March 2026', accountId: 'acc-3', date: '2026-03-01', size: '389 KB' },
]

export default function StatementsPage() {
  const getAccountName = (accountId: string) => {
    const account = accounts.find(a => a.id === accountId)
    return account?.name || 'Unknown Account'
  }

  const groupedStatements = accounts.map((account) => ({
    account,
    statements: statements.filter((s) => s.accountId === account.id),
  })).filter((group) => group.statements.length > 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Statements</h1>
          <p className="text-muted-foreground">Download and view your account statements.</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Calendar className="h-4 w-4" />
          Request Statement
        </Button>
      </div>

      {/* Statements by Account */}
      {groupedStatements.map(({ account, statements: accountStatements }) => (
        <Card key={account.id}>
          <CardHeader>
            <CardTitle className="text-base font-semibold">{account.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {accountStatements.map((statement) => (
                <div
                  key={statement.id}
                  className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{statement.month}</p>
                      <p className="text-sm text-muted-foreground">{statement.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* E-Statement Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">E-Statement Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            You are currently enrolled in paperless statements. Your statements are available for download above and will be retained for 7 years.
          </p>
          <div className="mt-4">
            <Button variant="outline" size="sm">
              Manage Preferences
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
