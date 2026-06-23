'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Hammer, Menu, X } from 'lucide-react';

const links = [
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#app', label: 'O App' },
  { href: '#clientes', label: 'Para Clientes' },
  { href: '#profissionais', label: 'Para Profissionais' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#sobre', label: 'Sobre' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
    : 'bg-transparent';

  const linkClass = scrolled
    ? 'text-gray-600 hover:text-gray-900'
    : 'text-white/80 hover:text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-[72px]">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="bg-white/15 backdrop-blur p-2 rounded-xl border border-white/20 shadow-sm">
              <Hammer className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-display font-extrabold text-[17px] tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}
              >
                Conecta
              </span>
              <span className="font-display font-extrabold text-[17px] tracking-tight text-red-400">
                Marceneiro
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm font-medium ${linkClass}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#profissionais"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              Sou Profissional
            </a>
            <a
              href="#download"
              className="px-5 py-2.5 bg-white text-brand-700 text-sm font-bold rounded-full shadow-lg shadow-black/10 hover:bg-red-50 transition-all"
            >
              Baixar App
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <a
                href="#profissionais"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center py-3 border border-gray-200 text-gray-800 font-semibold rounded-xl"
              >
                Sou Profissional
              </a>
              <a
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center py-3 bg-brand-600 text-white font-bold rounded-xl shadow-md"
              >
                Baixar App Grátis
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
