import type { ReactNode } from 'react';

type LegalPageLayoutProps = {
  title: string;
  children: ReactNode;
};

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <section className="relative flex-1 overflow-hidden bg-(--color-surface-2) px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24 lg:px-12">
      <div
        aria-hidden="true"
        className="page-glow pointer-events-none absolute"
      />
      <div className="relative mx-auto max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-(--color-accent) uppercase">
          Zenshuii Ltd
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-(--color-on-surface) sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 text-sm text-(--color-text-muted)">
          Last updated: <time dateTime="2026-11-25">25 November 2026</time>
        </p>
        <div className="legal-copy mt-10 rounded-(--radius-panel) border border-(--color-border-strong) bg-(--color-surface-1) p-6 sm:p-10">
          {children}
        </div>
      </div>
    </section>
  );
}
