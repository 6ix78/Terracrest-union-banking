import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: April 22, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-6">Agreement to Terms</h2>
              <p className="text-muted-foreground mb-6">
                By accessing or using TerraCrest Union&apos;s services, including our website, mobile applications, 
                and banking services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our Services.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Eligibility</h2>
              <p className="text-muted-foreground mb-4">
                To use our Services, you must:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Be at least 18 years of age (or the age of majority in your jurisdiction)</li>
                <li>Be a legal resident of the United States</li>
                <li>Have the legal capacity to enter into a binding agreement</li>
                <li>Not be prohibited from using banking services under applicable laws</li>
                <li>Provide accurate and complete information during registration</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Account Registration and Security</h2>
              <p className="text-muted-foreground mb-4">
                When you create an account with us, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password and security credentials confidential</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Banking Services</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Account Services</h3>
              <p className="text-muted-foreground mb-6">
                Our banking services include, but are not limited to, checking accounts, savings accounts, 
                money market accounts, certificates of deposit, loans, and investment services. Each service 
                is subject to specific terms and conditions provided at the time of enrollment.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">Transactions</h3>
              <p className="text-muted-foreground mb-6">
                You authorize us to process transactions you initiate through our Services. You are responsible 
                for ensuring sufficient funds are available for transactions. We reserve the right to decline 
                transactions that violate these terms or applicable laws.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">Fees and Charges</h3>
              <p className="text-muted-foreground mb-6">
                Certain Services may be subject to fees as outlined in our Fee Schedule. We will provide notice 
                of any fee changes as required by law. You agree to pay all applicable fees associated with your 
                accounts and services.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Electronic Communications</h2>
              <p className="text-muted-foreground mb-6">
                By using our Services, you consent to receive electronic communications from us. These may include 
                account statements, notices, disclosures, and other information. You agree that electronic 
                communications satisfy any legal requirement for written communications.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Prohibited Activities</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Use our Services for any illegal purpose or in violation of any laws</li>
                <li>Engage in fraudulent, deceptive, or misleading activities</li>
                <li>Attempt to gain unauthorized access to our systems or other accounts</li>
                <li>Interfere with or disrupt our Services or servers</li>
                <li>Use our Services for money laundering or terrorist financing</li>
                <li>Circumvent any security measures or access controls</li>
                <li>Use automated systems to access our Services without permission</li>
                <li>Impersonate any person or entity</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Intellectual Property</h2>
              <p className="text-muted-foreground mb-6">
                All content, features, and functionality of our Services, including but not limited to text, 
                graphics, logos, icons, images, and software, are owned by TerraCrest Union or our licensors 
                and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-6">
                To the maximum extent permitted by law, TerraCrest Union shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages arising from your use of our Services. 
                Our total liability shall not exceed the fees paid by you in the twelve months preceding the claim.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Indemnification</h2>
              <p className="text-muted-foreground mb-6">
                You agree to indemnify and hold harmless TerraCrest Union, its officers, directors, employees, 
                and agents from any claims, damages, losses, or expenses arising from your use of our Services 
                or violation of these Terms.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Dispute Resolution</h2>
              <p className="text-muted-foreground mb-6">
                Any disputes arising from these Terms or your use of our Services shall be resolved through 
                binding arbitration in accordance with the rules of the American Arbitration Association. 
                You waive any right to participate in class action lawsuits or class-wide arbitration.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Termination</h2>
              <p className="text-muted-foreground mb-6">
                We may suspend or terminate your access to our Services at any time, with or without cause, 
                and with or without notice. Upon termination, your right to use the Services will immediately 
                cease. Provisions that by their nature should survive termination will remain in effect.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Governing Law</h2>
              <p className="text-muted-foreground mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the State of 
                New York, without regard to its conflict of law provisions. Any legal action must be brought 
                in the federal or state courts located in New York County, New York.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Changes to Terms</h2>
              <p className="text-muted-foreground mb-6">
                We reserve the right to modify these Terms at any time. We will provide notice of material 
                changes through our Services or by other means. Your continued use of our Services after 
                such modifications constitutes acceptance of the updated Terms.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms, please contact us at:
              </p>
              <div className="bg-muted/50 rounded-xl p-6">
                <p className="text-foreground font-semibold">TerraCrest Union - Legal Department</p>
                <p className="text-muted-foreground">1234 Financial District</p>
                <p className="text-muted-foreground">New York, NY 10004</p>
                <p className="text-muted-foreground">Email: legal@terracrestunion.com</p>
                <p className="text-muted-foreground">Phone: 1-800-TERRA-CU</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
