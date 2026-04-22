import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
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
          <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-6">Introduction</h2>
              <p className="text-muted-foreground mb-6">
                TerraCrest Union (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you use our banking 
                services, website, and mobile applications.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Name, address, email address, and phone number</li>
                <li>Social Security number and date of birth</li>
                <li>Government-issued identification documents</li>
                <li>Employment and income information</li>
                <li>Account numbers and financial information</li>
                <li>Transaction history and account activity</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-4">Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                When you access our services, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Device information (type, operating system, unique identifiers)</li>
                <li>IP address and location data</li>
                <li>Browser type and settings</li>
                <li>Usage data and browsing history on our platforms</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Provide, maintain, and improve our banking services</li>
                <li>Process transactions and send related information</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Communicate with you about products, services, and promotions</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Personalize and improve your experience</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li><strong>Service Providers:</strong> With third parties who perform services on our behalf</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>With Your Consent:</strong> When you have given us permission to share</li>
                <li><strong>Affiliates:</strong> With our affiliated companies for internal business purposes</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Data Security</h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>256-bit SSL encryption for data transmission</li>
                <li>Multi-factor authentication</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Employee training on data protection</li>
                <li>Physical security controls at our facilities</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
                <li><strong>Do Not Track:</strong> We honor Do Not Track browser settings</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-6">
                We use cookies and similar tracking technologies to collect information about your browsing activities. 
                You can control cookies through your browser settings. However, disabling cookies may limit your ability 
                to use some features of our services.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Children&apos;s Privacy</h2>
              <p className="text-muted-foreground mb-6">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
                information from children under 13. If we learn we have collected information from a child under 13, 
                we will delete that information.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Changes to This Policy</h2>
              <p className="text-muted-foreground mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this 
                Privacy Policy periodically.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-muted/50 rounded-xl p-6">
                <p className="text-foreground font-semibold">TerraCrest Union - Privacy Office</p>
                <p className="text-muted-foreground">1234 Financial District</p>
                <p className="text-muted-foreground">New York, NY 10004</p>
                <p className="text-muted-foreground">Email: privacy@terracrestunion.com</p>
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
