'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Hammer, Menu, X } from 'lucide-react';

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="bg-red-600 p-2 rounded-lg shadow-sm">
                            <Hammer className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-black text-[17px] tracking-tight text-gray-900">Conecta</span>
                            <span className="font-black text-[17px] tracking-tight text-red-600">Marceneiro</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#como-funciona" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                            Como Funciona
                        </Link>
                        <Link href="#clientes" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                            Para Clientes
                        </Link>
                        <Link href="#profissionais" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                            Para Profissionais
                        </Link>
                        <Link href="#sobre" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                            Sobre
                        </Link>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="#download"
                            className="px-5 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            Baixar App
                        </a>
                        <a
                            href="#download"
                            className="px-5 py-2.5 bg-red-600 text-white text-sm font-bold rounded-full shadow-md shadow-red-200 hover:bg-red-700 hover:shadow-red-300 transition-all"
                        >
                            Começar Agora
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                        aria-label="Menu"
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="px-4 py-4 space-y-1">
                        <Link href="#como-funciona" onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                            Como Funciona
                        </Link>
                        <Link href="#clientes" onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                            Para Clientes
                        </Link>
                        <Link href="#profissionais" onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                            Para Profissionais
                        </Link>
                        <Link href="#sobre" onClick={() => setMenuOpen(false)} className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                            Sobre a M&F
                        </Link>
                        <div className="pt-3 border-t border-gray-100">
                            <a
                                href="#download"
                                onClick={() => setMenuOpen(false)}
                                className="block w-full text-center py-3 bg-red-600 text-white font-bold rounded-xl shadow-md shadow-red-200 hover:bg-red-700 transition-all"
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
