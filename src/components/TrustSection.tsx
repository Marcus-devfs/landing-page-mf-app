export function TrustSection() {
    return (
        <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-red-600 transform skew-x-12 translate-x-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                        Nascemos de quem entende de <span className="text-red-500">Marcenaria.</span>
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-12">
                        A M&F Planejados atua há mais de 20 anos no mercado, entregando sonhos em forma de móveis.
                        Criamos o Conecta Marceneiro porque sentimos na pele as dores do mercado: a dificuldade de encontrar bons parceiros e a insegurança dos clientes.
                    </p>

                    <div className="flex flex-wrap gap-12">
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">20+</div>
                            <div className="text-gray-400">Anos de Mercado</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">5k+</div>
                            <div className="text-gray-400">Projetos Realizados</div>
                        </div>
                    </div>

                    <div className="mt-12 pt-12 border-t border-gray-800">
                        <p className="text-gray-400 italic">
                            "Nossa missão é profissionalizar o mercado de marcenaria no Brasil, garantindo dignidade para quem trabalha e segurança para quem contrata."
                        </p>
                        <p className="text-white mt-4 font-bold">– Marcos Silva, Fundador M&F Planejados</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
