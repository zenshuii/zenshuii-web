import Link from 'next/link';
import { FooterLegalLinks } from '@/components/FooterLegalLinks';
import { company } from '@/data/company';
import {
  TbMail,
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandYoutube,
} from 'react-icons/tb';

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-(--color-border) bg-(--color-surface-1) px-5 pt-5 pb-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <nav
          className="flex justify-center gap-2 pb-5 sm:justify-end"
          aria-label="Social links">
          <Link
            href="mailto:sim@zenshuii.com"
            aria-label="Email"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full text-(--color-on-surface) transition-colors duration-150 hover:bg-(--color-surface-raised) hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none">
            <TbMail
              size={24}
              strokeWidth={1.5}
              className="opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:text-(--color-accent) group-hover:opacity-100"
            />
          </Link>
          <Link
            href="https://instagram.com/zenshuii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full text-(--color-on-surface) transition-colors duration-150 hover:bg-(--color-surface-raised) hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none">
            <TbBrandInstagram
              size={24}
              strokeWidth={1.5}
              className="opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:text-(--color-accent) group-hover:opacity-100"
            />
          </Link>
          <Link
            href="https://www.facebook.com/zenshuiistudios"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full text-(--color-on-surface) transition-colors duration-150 hover:bg-(--color-surface-raised) hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none">
            <TbBrandFacebook
              size={24}
              strokeWidth={1.5}
              className="opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:text-(--color-accent) group-hover:opacity-100"
            />
          </Link>
          <Link
            href="https://youtube.com/@zenshuiistudios"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full text-(--color-on-surface) transition-colors duration-150 hover:bg-(--color-surface-raised) hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-1) focus-visible:outline-none">
            <TbBrandYoutube
              size={24}
              strokeWidth={1.5}
              className="opacity-80 transition-transform duration-200 group-hover:scale-110 group-hover:text-(--color-accent) group-hover:opacity-100"
            />
          </Link>
        </nav>
        <div className="flex flex-col items-center justify-between gap-1 border-t border-(--color-border) pt-4 text-center text-sm leading-relaxed text-(--color-text-muted) sm:flex-row sm:gap-6 sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <FooterLegalLinks />
        </div>
      </div>
    </footer>
  );
}
