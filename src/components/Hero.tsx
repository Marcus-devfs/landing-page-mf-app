import { ArrowRight, ShieldCheck, Star, Zap, Users } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
            {/* Background decorations */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-50 rounded-full blur-3xl opacity-80 -translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 font-semibold text-sm mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            M&F Planejados — 20 anos de tradição
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.08] mb-6">
                            O marceneiro certo,{' '}
                            <span className="text-red-600">na hora certa.</span>
                        </h1>

                        <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                            Conecta Marceneiro une clientes que exigem qualidade a profissionais verificados — com orçamentos, chat, pagamento seguro e acompanhamento tudo no mesmo lugar.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
                            <a
                                href="#download"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-base shadow-lg shadow-red-200 hover:bg-red-700 hover:shadow-red-300 transition-all hover:-translate-y-0.5"
                            >
                                Quero Contratar
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="#profissionais"
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-bold text-base hover:border-gray-900 transition-all"
                            >
                                Sou Profissional
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-2.5">
                                <div className="bg-green-100 p-1.5 rounded-full">
                                    <ShieldCheck className="w-4 h-4 text-green-700" />
                                </div>
                                <span className="text-sm font-semibold text-gray-700">Pagamento Seguro</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="bg-blue-100 p-1.5 rounded-full">
                                    <Users className="w-4 h-4 text-blue-700" />
                                </div>
                                <span className="text-sm font-semibold text-gray-700">Profissionais Verificados</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="bg-yellow-100 p-1.5 rounded-full">
                                    <Star className="w-4 h-4 text-yellow-700" />
                                </div>
                                <span className="text-sm font-semibold text-gray-700">Avaliações Reais</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="bg-purple-100 p-1.5 rounded-full">
                                    <Zap className="w-4 h-4 text-purple-700" />
                                </div>
                                <span className="text-sm font-semibold text-gray-700">Orçamentos em Minutos</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Phone Mockup */}
                    <div className="hidden lg:flex justify-center">
                        <div className="relative">
                            {/* Glow behind phone */}
                            <div className="absolute inset-0 bg-red-400 rounded-[3rem] blur-3xl opacity-10 scale-90" />

                            {/* Phone frame */}
                            <div className="relative mx-auto bg-gray-900 border-[10px] border-gray-900 rounded-[3rem] h-[640px] w-[310px] shadow-2xl shadow-gray-900/20">
                                {/* Side buttons */}
                                <div className="h-8 w-[3px] bg-gray-700 absolute -left-[13px] top-20 rounded-l-lg" />
                                <div className="h-12 w-[3px] bg-gray-700 absolute -left-[13px] top-32 rounded-l-lg" />
                                <div className="h-12 w-[3px] bg-gray-700 absolute -left-[13px] top-48 rounded-l-lg" />
                                <div className="h-16 w-[3px] bg-gray-700 absolute -right-[13px] top-36 rounded-r-lg" />

                                {/* Screen */}
                                <div className="rounded-[2.5rem] overflow-hidden w-full h-full bg-gray-50">
                                    {/* Status bar */}
                                    <div className="bg-white px-6 pt-3 pb-2 flex justify-between items-center">
                                        <span className="text-xs font-bold text-gray-900">9:41</span>
                                        <div className="flex items-center gap-1">
                                            <div className="w-4 h-2 bg-gray-900 rounded-sm" />
                                            <div className="w-2 h-2 bg-gray-900 rounded-full" />
                                        </div>
                                    </div>

                                    {/* App Header */}
                                    <div className="bg-white px-5 pb-4 border-b border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-gray-400">Olá, Maria 👋</p>
                                                <p className="text-sm font-bold text-gray-900">Meus Serviços</p>
                                            </div>
                                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                                <span className="text-xs font-bold text-red-600">M</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Cards */}
                                    <div className="px-4 pt-4 space-y-3">
                                        {/* Card 1 — In Progress */}
                                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <p className="text-xs font-bold text-gray-900">Armário Embutido</p>
                                                    <p className="text-[10px] text-gray-400 mt-0.5">Carlos Marceneiro</p>
                                                </div>
                                                <span className="text-[9px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded-full">Em Progresso</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-gray-100 rounded-full mt-3">
                                                <div className="h-full w-2/3 bg-blue-500 rounded-full" />
                                            </div>
                                            <p className="text-[10px] text-gray-400 mt-1.5">66% concluído</p>
                                        </div>

                                        {/* Card 2 — Quote received */}
                                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                                            <div className="flex items-start justify-between mb-1">
                                                <div>
                                                    <p className="text-xs font-bold text-gray-900">Cozinha Planejada</p>
                                                    <p className="text-[10px] text-gray-400 mt-0.5">2 orçamentos recebidos</p>
                                                </div>
                                                <span className="text-[9px] font-bold bg-green-50 text-green-600 px-2 py-1 rounded-full">Novo</span>
                                            </div>
                                            <div className="flex gap-2 mt-3">
                                                <div className="flex-1 bg-gray-50 rounded-xl p-2 text-center">
                                                    <p className="text-[9px] text-gray-400">Menor</p>
                                                    <p className="text-xs font-bold text-gray-900">R$ 4.200</p>
                                                </div>
                                                <div className="flex-1 bg-red-50 rounded-xl p-2 text-center border border-red-100">
                                                    <p className="text-[9px] text-red-500">Melhor avaliado</p>
                                                    <p className="text-xs font-bold text-red-600">R$ 5.100</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Chat preview */}
                                        <div className="bg-gray-900 rounded-2xl p-4">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                                                    <span className="text-[9px] font-bold text-white">C</span>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold text-white">Carlos Marceneiro</p>
                                                    <div className="flex items-center gap-1">
                                                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                                                        <p className="text-[9px] text-gray-400">Online agora</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-800 rounded-xl px-3 py-2 mb-2">
                                                <p className="text-[10px] text-gray-300">O armário vai ficar pronto até sexta! 🪵</p>
                                            </div>
                                            <div className="bg-red-600 rounded-xl px-3 py-2 ml-auto w-fit">
                                                <p className="text-[10px] text-white">Ótimo, obrigada! 😊</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-gray-100">
                    <div className="text-center">
                        <div className="text-3xl font-black text-gray-900 mb-1">20+</div>
                        <div className="text-sm text-gray-500">Anos de experiência</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-black text-gray-900 mb-1">5k+</div>
                        <div className="text-sm text-gray-500">Projetos entregues</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-black text-gray-900 mb-1">100%</div>
                        <div className="text-sm text-gray-500">Pagamento garantido</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-black text-red-600 mb-1">4.9★</div>
                        <div className="text-sm text-gray-500">Avaliação média</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
