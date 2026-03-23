export function TrustSection() {
    return (
        <section className="py-28 bg-white" id="sobre">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Numbers */}
                    <div>
                        <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-3">Nossa História</p>
                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            Nascemos de quem entende{' '}
                            <span className="text-red-600">de marcenaria.</span>
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed mb-10">
                            A M&F Planejados atua há mais de 20 anos no mercado, entregando sonhos em forma de móveis.
                            Criamos o Conecta Marceneiro porque vivemos na pele as dores do setor: a dificuldade de encontrar bons parceiros e a insegurança dos clientes.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <div className="text-4xl font-black text-gray-900 mb-1">20+</div>
                                <div className="text-sm text-gray-500">Anos de mercado</div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <div className="text-4xl font-black text-gray-900 mb-1">5k+</div>
                                <div className="text-sm text-gray-500">Projetos entregues</div>
                            </div>
                            <div className="bg-red-50 rounded-2xl p-6">
                                <div className="text-4xl font-black text-red-600 mb-1">90%</div>
                                <div className="text-sm text-gray-500">Do valor vai ao profissional</div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-6">
                                <div className="text-4xl font-black text-gray-900 mb-1">100%</div>
                                <div className="text-sm text-gray-500">Pagamento garantido</div>
                            </div>
                        </div>

                        <blockquote className="border-l-4 border-red-600 pl-6">
                            <p className="text-gray-700 italic leading-relaxed mb-3">
                                "Nossa missão é profissionalizar o mercado de marcenaria no Brasil, garantindo dignidade para quem trabalha e segurança para quem contrata."
                            </p>
                            <footer>
                                <span className="font-bold text-gray-900">Marcos Silva</span>
                                <span className="text-gray-400"> — Fundador, M&F Planejados</span>
                            </footer>
                        </blockquote>
                    </div>

                    {/* Right: Values */}
                    <div className="space-y-4">
                        <div className="bg-gray-900 text-white rounded-3xl p-8">
                            <div className="text-5xl mb-4">🔒</div>
                            <h3 className="text-xl font-bold mb-2">Segurança primeiro</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Todos os profissionais passam por verificação de documentos e antecedentes. O pagamento fica retido até a entrega. Ninguém sai perdendo.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-red-600 text-white rounded-3xl p-6">
                                <div className="text-4xl mb-3">⚡</div>
                                <h3 className="font-bold mb-1">Rápido</h3>
                                <p className="text-red-100 text-sm">Orçamentos em menos de 24h</p>
                            </div>
                            <div className="bg-gray-100 rounded-3xl p-6">
                                <div className="text-4xl mb-3">🤝</div>
                                <h3 className="font-bold text-gray-900 mb-1">Transparente</h3>
                                <p className="text-gray-500 text-sm">Sem taxa escondida para ninguém</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
