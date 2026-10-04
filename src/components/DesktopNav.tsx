'use client';

import { navLinks } from '@/data/navLinks';
import { isActiveLink, isAnyChildActive } from '@/utils/navHelpers';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';

export function DesktopNav() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const appsDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const submenuId = useId();

  const clearCloseTimer = () => {
    if (dropdownTimeout.current !== null) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }
  };

  const closeDropdown = () => {
    clearCloseTimer();
    setDropdownOpen(null);
  };

  const openDropdown = (label: string) => {
    clearCloseTimer();
    setDropdownOpen(label);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current !== null)
        clearTimeout(dropdownTimeout.current);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: PointerEvent) {
      if (
        dropdownOpen === 'Apps' &&
        appsDropdownRef.current &&
        !appsDropdownRef.current.contains(event.target as Node)
      ) {
        if (dropdownTimeout.current !== null) {
          clearTimeout(dropdownTimeout.current);
          dropdownTimeout.current = null;
        }
        setDropdownOpen(null);
      }
    }

    if (dropdownOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="hidden items-center gap-7 md:flex">
      {navLinks.map((link) =>
        !link.children ? (
          <Link
            key={link.href}
            href={link.href}
            className={`relative rounded-sm text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-(--color-accent-a60) after:transition-transform after:duration-300 after:content-[''] hover:text-(--color-accent) hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none ${
              isActiveLink(pathname, link.href)
                ? 'text-(--color-accent) after:scale-x-100'
                : 'text-(--color-on-surface)'
            }`}>
            {link.label}
          </Link>
        ) : (
          <div
            ref={appsDropdownRef}
            className="relative"
            key={link.label}
            onPointerEnter={(event) => {
              if (event.pointerType !== 'touch') openDropdown(link.label);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === 'touch') return;
              clearCloseTimer();
              if (event.currentTarget.contains(document.activeElement)) return;
              dropdownTimeout.current = setTimeout(closeDropdown, 150);
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget))
                closeDropdown();
            }}
            onKeyDown={(event) => {
              if (event.key === 'Escape' && dropdownOpen === link.label) {
                event.preventDefault();
                closeDropdown();
                dropdownButtonRef.current?.focus();
              }
            }}>
            <div className="group relative flex items-center gap-0.5">
              <Link
                href={link.href}
                className={`relative rounded-sm text-sm font-medium transition-colors duration-200 group-hover:text-(--color-accent) after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-(--color-accent-a60) after:transition-transform after:duration-300 after:content-[''] group-hover:after:scale-x-100 hover:text-(--color-accent) hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none ${
                  dropdownOpen === link.label ||
                  isActiveLink(pathname, link.href) ||
                  isAnyChildActive(link, pathname)
                    ? 'text-(--color-accent) after:scale-x-100'
                    : 'text-(--color-on-surface)'
                }`}
                onFocus={() => openDropdown(link.label)}
                onClick={closeDropdown}>
                {link.label}
              </Link>
              <button
                ref={dropdownButtonRef}
                type="button"
                className="flex items-center rounded-sm p-1 focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-surface-2) focus-visible:outline-none"
                aria-label={`Toggle ${link.label} menu`}
                aria-expanded={dropdownOpen === link.label}
                aria-controls={submenuId}
                onClick={() => {
                  clearCloseTimer();
                  setDropdownOpen(
                    dropdownOpen === link.label ? null : link.label,
                  );
                }}>
                <span
                  className={`inline-block transition-transform duration-200 ${
                    dropdownOpen === link.label ? 'rotate-180' : ''
                  } ${
                    dropdownOpen === link.label ||
                    isActiveLink(pathname, link.href) ||
                    isAnyChildActive(link, pathname)
                      ? 'text-(--color-accent)'
                      : 'text-(--color-on-surface)'
                  } `}>
                  <ChevronDown size={18} />
                </span>
              </button>
            </div>
            {/* Dropdown menu */}
            <div
              id={submenuId}
              className={`absolute top-full right-0 z-20 min-w-48 pt-4 transition-opacity duration-150 motion-reduce:transition-none ${dropdownOpen === link.label ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
              aria-hidden={dropdownOpen !== link.label}
              inert={dropdownOpen !== link.label}
              aria-label={`${link.label} submenu`}>
              <div className="rounded-2xl border border-(--color-border-strong) bg-(--color-surface-1) p-1.5 shadow-(--shadow-card)">
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`block w-full rounded-xl px-3 py-2.5 text-sm transition-colors duration-200 hover:bg-(--color-accent-a10) hover:text-(--color-accent) focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:outline-none ${
                      isActiveLink(pathname, child.href)
                        ? 'font-semibold text-(--color-accent)'
                        : 'text-(--color-on-surface)'
                    }`}
                    onFocus={() => openDropdown(link.label)}
                    onClick={closeDropdown}>
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
