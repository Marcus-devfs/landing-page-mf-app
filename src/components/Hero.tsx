import { ArrowRight, ShieldCheck, Star, Users } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-50 via-gray-50 to-white opacity-70"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 font-medium text-sm mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Uma iniciativa M&F Planejados - 20 anos de tradição
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-8 leading-[1.1]">
                        A excelência da <span className="text-red-600">marcenaria</span> conectada ao digital.
                    </h1>

                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        A plataforma definitiva que une quem precisa de móveis sob medida a profissionais verificados. Segurança, qualidade e pagamento garantido.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                        <a
                            href="app-mf://auth/signup?type=client"
                            className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-gray-200"
                        >
                            Quero Contratar
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="app-mf://auth/signup?type=professional"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-bold hover:border-red-600 hover:text-red-600 transition-all flex items-center justify-center gap-2"
                        >
                            Sou Profissional
                        </a>
                    </div>
                </div>

                {/* Stats / Trust Signals */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 border-t border-gray-100 pt-12">
                    <div className="flex flex-col items-center p-4">
                        <div className="bg-red-50 p-3 rounded-full mb-3">
                            <ShieldCheck className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">Pagamento Seguro</h3>
                        <p className="text-gray-500 text-sm text-center">Seu dinheiro protegido até a entrega</p>
                    </div>
                    <div className="flex flex-col items-center p-4 border-l-0 md:border-l border-gray-100">
                        <div className="bg-red-50 p-3 rounded-full mb-3">
                            <Users className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">Profissionais Verificados</h3>
                        <p className="text-gray-500 text-sm text-center">Curadoria M&F Planejados</p>
                    </div>
                    <div className="flex flex-col items-center p-4 border-l-0 md:border-l border-gray-100">
                        <div className="bg-red-50 p-3 rounded-full mb-3">
                            <Star className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">Qualidade Garantida</h3>
                        <p className="text-gray-500 text-sm text-center">Avaliação constante de serviços</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
