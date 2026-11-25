import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPageLayout } from '@/components/LegalPageLayout';
import { company } from '@/data/company';
import { createPageMetadata } from '@/utils/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy',
  description: 'How Zenshuii Ltd uses personal information on zenshuii.com.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy notice">
      <p>
        This notice explains how {company.name} uses personal information when
        you visit zenshuii.com or contact us through the email links on this
        website.
      </p>
      <h2>Who is responsible</h2>
      <p>
        {company.name} is the controller for the personal information covered by
        this notice. Our registered office is {company.registeredOffice}. You
        can contact us at{' '}
        <a href={`mailto:${company.email}`}>{company.email}</a>. Our company
        registration details are on our <Link href="/legal">Legal page</Link>.
      </p>
      <h2>Information we use and why</h2>
      <p>
        If you email us, we receive your email address, your name if you provide
        it, and the contents of your message and any attachments. We use this
        information to respond to you and manage the enquiry or business
        relationship. Our lawful basis is our legitimate interest in responding
        to enquiries and running our business. Where you ask us to take steps
        towards a contract with you, we rely on taking those steps instead.
      </p>
      <p>
        Our hosting provider, Vercel, processes technical information such as IP
        addresses, request details, and diagnostic logs to deliver and protect
        the website. We rely on our legitimate interest in providing a secure,
        reliable website for this processing.
      </p>
      <h2>Analytics and cookies</h2>
      <p>
        We use Vercel Web Analytics to understand overall website usage, such as
        pages visited, referring websites, approximate location, browser, and
        device type. Vercel describes these statistics as anonymous and
        aggregated. Web Analytics does not use cookies. You can read more in{' '}
        <a href="https://vercel.com/docs/analytics/privacy-policy">
          Vercel&apos;s analytics privacy information
        </a>
        .
      </p>
      <p>
        This website does not use advertising cookies or provide user accounts.
      </p>
      <h2>Service providers and international processing</h2>
      <p>
        We use Vercel for website hosting and analytics, and email service
        providers to receive and respond to messages. We may also share
        information with professional advisers or authorities where necessary to
        meet legal obligations or establish, exercise, or defend legal claims.
      </p>
      <p>
        Service providers may process information outside the United Kingdom.
        Where a restricted transfer takes place, appropriate safeguards are
        required, such as UK adequacy regulations or approved contractual
        safeguards. Contact us for information about the safeguards relevant to
        your information. Vercel publishes its{' '}
        <a href="https://vercel.com/legal/dpa">data processing terms</a>.
      </p>
      <h2>How long we keep information</h2>
      <p>
        We keep enquiry correspondence for as long as needed to respond to the
        enquiry and manage any resulting relationship. We may retain relevant
        records for longer where needed for legal, accounting, or dispute
        purposes. The appropriate period depends on the enquiry, any ongoing
        relationship, and applicable record-keeping requirements. Hosting and
        analytics information is retained according to the relevant service
        settings and provider retention periods.
      </p>
      <h2>Your rights</h2>
      <p>
        Depending on the circumstances, you can ask to access, correct, or
        delete your personal information, restrict its use, or receive a
        portable copy. You can object to processing based on legitimate
        interests. Email <a href={`mailto:${company.email}`}>{company.email}</a>{' '}
        to exercise your rights or ask a question about this notice.
      </p>
      <p>
        You also have the right to complain to the{' '}
        <a href="https://ico.org.uk/make-a-complaint/">
          Information Commissioner&apos;s Office (ICO)
        </a>
        , the UK data protection regulator.
      </p>
      <h2>Other websites and products</h2>
      <p>
        This notice covers zenshuii.com. The Stoic waitlist has its own{' '}
        <a href="https://stoic-app.com/privacy.html">privacy notice</a>{' '}
        explaining how waitlist information is used. External websites and
        social platforms have their own privacy information.
      </p>
      <h2>Changes to this notice</h2>
      <p>
        We update this notice when our practices change. The date at the top
        shows when it was last updated.
      </p>
    </LegalPageLayout>
  );
}
