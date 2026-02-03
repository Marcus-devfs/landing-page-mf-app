import { Hammer, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-red-600 p-2 rounded-lg">
                                <Hammer className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl tracking-tight text-gray-900 leading-none">Conecta</span>
                                <span className="font-bold text-xl tracking-tight text-red-600 leading-none">Marceneiro</span>
                            </div>
                        </div>
                        <p className="text-gray-500 mb-8 max-w-sm">
                            A plataforma que une segurança, qualidade e os melhores profissionais do mercado. Uma iniciativa M&F Planejados.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                                {/* Apple Logo Placeholder */}
                                <span className="text-xl"></span>
                                <div className="flex flex-col items-start px-1">
                                    <span className="text-[10px] leading-none text-gray-300">Baixar na</span>
                                    <span className="font-bold text-sm leading-none">App Store</span>
                                </div>
                            </button>
                            <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                                {/* Play Store Logo Placeholder */}
                                <span className="text-xl">▶</span>
                                <div className="flex flex-col items-start px-1">
                                    <span className="text-[10px] leading-none text-gray-300">DISPONÍVEL NO</span>
                                    <span className="font-bold text-sm leading-none">Google Play</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Plataforma</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-500 hover:text-red-600 transition-colors">Para Clientes</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-red-600 transition-colors">Para Profissionais</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-red-600 transition-colors">Preços</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-red-600 transition-colors">Segurança</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-500 hover:text-red-600 transition-colors">Termos de Uso</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-red-600 transition-colors">Privacidade</Link></li>
                            <li><Link href="#" className="text-gray-500 hover:text-red-600 transition-colors">Sobre a M&F</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Conecta Marceneiro. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Instagram className="w-5 h-5" /></Link>
                        <Link href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Facebook className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
