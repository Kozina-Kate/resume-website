'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import { AnimatedLogo } from '@/components/animated-logo';

const navigationItems = [
  { href: '#skills', label: 'Навыки' },
  { href: '#experience', label: 'Опыт' },
  { href: '#projects', label: 'Пет-проекты' },
  { href: '#recommendations', label: 'Отзывы' },
  { href: '#education', label: 'Образование' },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeMenuOnEscape);
    return () => window.removeEventListener('keydown', closeMenuOnEscape);
  }, []);

  return (
    <header className={`site-header${isMenuOpen ? ' site-header-menu-open' : ''}`}>
      <AnimatedLogo />

      <nav className="desktop-navigation" aria-label={'Навигация по\u00A0странице'}>
        {navigationItems.map((item) => (
          <a href={item.href} key={item.href}>{item.label}</a>
        ))}
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {isMenuOpen && (
        <nav
          className="mobile-navigation"
          id="mobile-navigation"
          aria-label="Мобильная навигация"
        >
          {navigationItems.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
