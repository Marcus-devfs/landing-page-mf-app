export function CtaSection() {
    return (
        <section className="py-28 bg-gray-900 relative overflow-hidden" id="download">
            {/* Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 rounded-full blur-3xl opacity-10 -translate-x-1/3 translate-y-1/3" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <p className="text-sm font-bold text-red-400 uppercase tracking-widest mb-4">Disponível em breve</p>
                <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
                    Baixe o app e comece{' '}
                    <span className="text-red-400">hoje mesmo.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Grátis para baixar. Sem mensalidade. Pague apenas quando fechar um serviço.
                </p>

                {/* Store Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <a
                        href="#"
                        className="flex items-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all shadow-lg w-full sm:w-auto justify-center"
                    >
                        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <div className="text-left">
                            <span className="block text-xs text-gray-500">Baixar na</span>
                            <span className="block text-base font-black">App Store</span>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-3 bg-white text-gray-900 px-6 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all shadow-lg w-full sm:w-auto justify-center"
                    >
                        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                            <path d="M3.18 23.76c.3.17.64.22.99.14l12.44-7.19-2.63-2.63-10.8 9.68zM.44 2.07C.17 2.4 0 2.88 0 3.5v17c0 .62.17 1.1.44 1.43l.08.07 9.52-9.52v-.22L.52 2.01l-.08.06zM19.44 10.65l-2.67-1.54-2.95 2.95 2.95 2.95 2.68-1.55c.77-.44.77-1.37-.01-1.81zM4.17.24L16.61 7.43l-2.63 2.63L3.18.38C3.5.2 3.86.15 4.17.24z"/>
                        </svg>
                        <div className="text-left">
                            <span className="block text-xs text-gray-500">Disponível no</span>
                            <span className="block text-base font-black">Google Play</span>
                        </div>
                    </a>
                </div>

                {/* Feature badges */}
                <div className="flex flex-wrap justify-center gap-4">
                    {['Gratuito para baixar', 'Sem mensalidade', 'Pagamento seguro', 'Suporte integrado'].map((badge) => (
                        <span key={badge} className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 text-white/80 text-sm font-medium rounded-full border border-white/10">
                            <span className="text-green-400">✓</span>
                            {badge}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
