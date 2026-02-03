import Link from 'next/link';
import { Hammer } from 'lucide-react';


export function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-2">
                        <div className="bg-red-600 p-2 rounded-lg">
                            <Hammer className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl tracking-tight text-gray-900 leading-none">Conecta</span>
                            <span className="font-bold text-xl tracking-tight text-red-600 leading-none">Marceneiro</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#clientes" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                            Para Clientes
                        </Link>
                        <Link href="#profissionais" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                            Para Profissionais
                        </Link>
                        <Link href="#sobre" className="text-gray-600 hover:text-red-600 transition-colors font-medium">
                            Sobre a M&F
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="app-mf://auth/login" className="hidden md:block px-4 py-2 text-red-600 font-semibold hover:bg-red-50 rounded-lg transition-colors">
                            Login
                        </a>
                        <button className="bg-red-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-red-200 hover:bg-red-700 hover:shadow-red-300 transition-all transform hover:-translate-y-0.5">
                            Baixar App
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
