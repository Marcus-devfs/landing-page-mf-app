import { CheckCircle2, Wallet, Clock, Search } from 'lucide-react';

export function FeatureSection() {
    return (
        <section className="py-24 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* For Clients */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-32" id="clientes">
                    <div className="flex-1 order-2 lg:order-1">
                        {/* Placeholder for App Screen Image */}
                        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800 relative">
                                {/* Mock UI Content */}
                                <div className="absolute top-0 w-full h-full bg-gray-50 flex flex-col pt-12 px-4">
                                    <div className="h-40 bg-red-500 rounded-2xl mb-4 w-full animate-pulse opacity-20"></div>
                                    <div className="h-20 bg-white rounded-xl mb-3 shadow-sm p-3">
                                        <div className="h-2 w-1/3 bg-gray-200 rounded mb-2"></div>
                                        <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                                    </div>
                                    <div className="h-20 bg-white rounded-xl mb-3 shadow-sm p-3 border-l-4 border-green-500">
                                        <div className="h-2 w-1/3 bg-gray-200 rounded mb-2"></div>
                                        <div className="h-2 w-2/3 bg-gray-100 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 order-1 lg:order-2">
                        <div className="inline-block px-4 py-1.5 bg-red-100 text-red-700 font-bold rounded-full text-sm mb-6">
                            PARA CLIENTES
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Seu projeto entregue, <br />
                            <span className="text-red-600">sem dores de cabeça.</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Esqueça os atrasos e a falta de profissionalismo. Aqui você encontra marceneiros avaliados e conta com a garantia M&F.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-2 rounded-lg mt-1">
                                    <CheckCircle2 className="w-5 h-5 text-green-700" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Profissionais Verificados</h3>
                                    <p className="text-gray-500">Documentação e antecedentes checados rigorosamente.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-2 rounded-lg mt-1">
                                    <Wallet className="w-5 h-5 text-blue-700" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Pagamento Retido (Escrow)</h3>
                                    <p className="text-gray-500">O valor só é liberado ao profissional após a confirmação da etapa.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-2 rounded-lg mt-1">
                                    <Search className="w-5 h-5 text-purple-700" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Acompanhamento Real</h3>
                                    <p className="text-gray-500">Fotos e atualizações do progresso do seu móvel direto no app.</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="app-mf://auth/signup?type=client"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 mt-8"
                        >
                            Contratar Profissional
                        </a>
                    </div>
                </div>

                {/* For Professionals */}
                <div className="flex flex-col lg:flex-row items-center gap-16" id="profissionais">
                    <div className="flex-1">
                        <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 font-bold rounded-full text-sm mb-6">
                            PARA MARCENEIROS
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Clientes qualificados e <br />
                            <span className="text-red-600">recebimento garantido.</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Foque no que você faz de melhor: móveis incríveis. Nós cuidamos de trazer clientes sérios e garantir que você receba pelo seu trabalho.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-100 p-2 rounded-lg mt-1">
                                    <CheckCircle2 className="w-5 h-5 text-yellow-700" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Sem "Leilão" de Preço</h3>
                                    <p className="text-gray-500">Clientes buscam qualidade, não apenas o menor preço.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-2 rounded-lg mt-1">
                                    <Wallet className="w-5 h-5 text-green-700" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Antecipação de Material</h3>
                                    <p className="text-gray-500">Fluxos de pagamento pensados para você comprar material sem sufoco.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-2 rounded-lg mt-1">
                                    <Clock className="w-5 h-5 text-blue-700" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Gestão Simplificada</h3>
                                    <p className="text-gray-500">Envie orçamentos profissionais em PDF com 2 cliques.</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="app-mf://auth/signup?type=professional"
                            className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200 mt-8"
                        >
                            Sou Profissional
                        </a>
                    </div>

                    <div className="flex-1">
                        {/* Placeholder for App Screen Image - Pro View */}
                        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800 relative">
                                {/* Mock UI Content */}
                                <div className="absolute top-0 w-full h-full bg-gray-900 flex flex-col pt-12 px-4">
                                    <div className="flex justify-between mb-6">
                                        <div className="h-8 w-24 bg-gray-700 rounded-lg"></div>
                                        <div className="h-8 w-8 bg-red-600 rounded-full"></div>
                                    </div>
                                    <div className="h-32 bg-gray-800 rounded-2xl mb-4 w-full border border-gray-700 p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="h-4 w-20 bg-gray-600 rounded"></div>
                                            <div className="h-6 w-24 bg-green-500/20 text-green-500 text-xs flex items-center justify-center rounded-full">Aprovado</div>
                                        </div>
                                        <div className="h-6 w-32 bg-gray-500 rounded mb-2"></div>
                                        <div className="mt-4 h-2 w-full bg-gray-700 rounded overflow-hidden">
                                            <div className="h-full w-2/3 bg-green-500"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
