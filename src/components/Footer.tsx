import { Hammer, Instagram, Facebook, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2.5 mb-5">
                            <div className="bg-red-600 p-2 rounded-lg shadow-sm">
                                <Hammer className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-display font-extrabold text-[17px] tracking-tight text-gray-900">Conecta</span>
                                <span className="font-display font-extrabold text-[17px] tracking-tight text-brand-600">Marceneiro</span>
                            </div>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                            A plataforma que conecta clientes exigentes aos melhores marceneiros do Brasil. Uma iniciativa M&F Planejados — 20 anos de tradição.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#download"
                                className="flex items-center gap-2.5 bg-gray-900 text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                                <div>
                                    <div className="text-[10px] text-gray-400 leading-none">Baixar na</div>
                                    <div className="text-sm font-bold leading-none">App Store</div>
                                </div>
                            </a>
                            <a
                                href="#download"
                                className="flex items-center gap-2.5 bg-gray-900 text-white px-4 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
                                    <path d="M3.18 23.76c.3.17.64.22.99.14l12.44-7.19-2.63-2.63-10.8 9.68zM.44 2.07C.17 2.4 0 2.88 0 3.5v17c0 .62.17 1.1.44 1.43l.08.07 9.52-9.52v-.22L.52 2.01l-.08.06zM19.44 10.65l-2.67-1.54-2.95 2.95 2.95 2.95 2.68-1.55c.77-.44.77-1.37-.01-1.81zM4.17.24L16.61 7.43l-2.63 2.63L3.18.38C3.5.2 3.86.15 4.17.24z"/>
                                </svg>
                                <div>
                                    <div className="text-[10px] text-gray-400 leading-none">Disponível no</div>
                                    <div className="text-sm font-bold leading-none">Google Play</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-5 text-sm uppercase tracking-wider">Plataforma</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/#clientes" className="text-gray-500 hover:text-brand-600 transition-colors text-sm">
                                    Para Clientes
                                </Link>
                            </li>
                            <li>
                                <Link href="/#profissionais" className="text-gray-500 hover:text-brand-600 transition-colors text-sm">
                                    Para Profissionais
                                </Link>
                            </li>
                            <li>
                                <Link href="/#como-funciona" className="text-gray-500 hover:text-brand-600 transition-colors text-sm">
                                    Como Funciona
                                </Link>
                            </li>
                            <li>
                                <Link href="/#sobre" className="text-gray-500 hover:text-brand-600 transition-colors text-sm">
                                    Sobre a M&F
                                </Link>
                            </li>
                            <li>
                                <Link href="/#faq" className="text-gray-500 hover:text-brand-600 transition-colors text-sm">
                                    Perguntas Frequentes
                                </Link>
                            </li>
                            <li>
                                <Link href="/#download" className="text-gray-500 hover:text-brand-600 transition-colors text-sm">
                                    Baixar o App
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-5 text-sm uppercase tracking-wider">Legal & Suporte</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacidade" className="text-gray-500 hover:text-brand-600 transition-colors text-sm">
                                    Política de Privacidade
                                </Link>
                            </li>
                            <li>
                                <Link href="/termos" className="text-gray-500 hover:text-brand-600 transition-colors text-sm">
                                    Termos de Uso
                                </Link>
                            </li>
                            <li>
                                <a href="mailto:contato@conectamarceneiro.com.br" className="text-gray-500 hover:text-brand-600 transition-colors text-sm flex items-center gap-1.5">
                                    <Mail className="w-3.5 h-3.5" />
                                    Fale Conosco
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Conecta Marceneiro. Todos os direitos reservados. Uma iniciativa M&F Planejados.
                    </p>
                    <div className="flex items-center gap-5">
                        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-brand-600 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-brand-600 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="mailto:contato@conectamarceneiro.com.br" aria-label="Email" className="text-gray-400 hover:text-brand-600 transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
