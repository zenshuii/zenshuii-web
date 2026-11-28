import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPageLayout } from '@/components/LegalPageLayout';
import { company } from '@/data/company';
import { createPageMetadata } from '@/utils/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Legal',
  description: 'Company registration and contact details for Zenshuii Ltd.',
  path: '/legal',
});

export default function LegalPage() {
  return (
    <LegalPageLayout title="Legal information">
      <p>
        This website, zenshuii.com, is operated by {company.name}, an
        independent creative studio.
      </p>
      <h2>Company details</h2>
      <dl>
        <div>
          <dt>Registered company name</dt>
          <dd>{company.name}</dd>
        </div>
        <div>
          <dt>Place of registration</dt>
          <dd>{company.jurisdiction}</dd>
        </div>
        <div>
          <dt>Company No.</dt>
          <dd>{company.registrationNumber}</dd>
        </div>
        <div>
          <dt>Registered office</dt>
          <dd>{company.registeredOffice}.</dd>
        </div>
      </dl>
      <h2>Contact</h2>
      <p>
        For business enquiries or questions about this website, email{' '}
        <a href={`mailto:${company.email}`}>{company.email}</a>. You can also
        write to our registered office above.
      </p>
      <h2>Privacy</h2>
      <p>
        Read our <Link href="/privacy">privacy notice</Link> for information
        about how we use personal information when you visit this website or
        contact us.
      </p>
    </LegalPageLayout>
  );
}
