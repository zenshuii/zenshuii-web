'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const linkClassName =
  'inline-flex min-h-11 items-center rounded-sm px-2 transition-colors hover:text-(--color-accent) aria-[current=page]:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:outline-none';

export function FooterLegalLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Legal links" className="flex shrink-0 items-center gap-2">
      <Link
        href="/privacy"
        aria-current={pathname === '/privacy' ? 'page' : undefined}
        className={linkClassName}>
        Privacy
      </Link>
      <span aria-hidden="true">&middot;</span>
      <Link
        href="/legal"
        aria-current={pathname === '/legal' ? 'page' : undefined}
        className={linkClassName}>
        Legal
      </Link>
    </nav>
  );
}
