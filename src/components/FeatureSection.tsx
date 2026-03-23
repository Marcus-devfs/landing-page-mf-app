import {
    Camera,
    MessageSquare,
    CreditCard,
    Bell,
    Headphones,
    Star,
    MapPin,
    FileText,
    ShieldCheck,
    Wallet,
} from 'lucide-react';

const clientFeatures = [
    {
        icon: Camera,
        color: 'bg-blue-50 text-blue-600',
        title: 'Serviços com Fotos',
        description: 'Descreva seu projeto com imagens para que o profissional entenda exatamente o que precisa ser feito.',
    },
    {
        icon: FileText,
        color: 'bg-green-50 text-green-600',
        title: 'Orçamentos Detalhados',
        description: 'Receba propostas com valor, prazo e descrição completa dos materiais — tudo transparente.',
    },
    {
        icon: MessageSquare,
        color: 'bg-purple-50 text-purple-600',
        title: 'Chat em Tempo Real',
        description: 'Converse diretamente com o marceneiro antes, durante e após o serviço. Sem intermediários.',
    },
    {
        icon: CreditCard,
        color: 'bg-red-50 text-red-600',
        title: 'PIX & Cartão',
        description: 'Pague do jeito que preferir. O valor fica bloqueado e só é liberado após você confirmar.',
    },
    {
        icon: Star,
        color: 'bg-yellow-50 text-yellow-600',
        title: 'Avaliações Reais',
        description: 'Veja o histórico e as notas de cada profissional, baseado em serviços reais concluídos.',
    },
    {
        icon: Headphones,
        color: 'bg-orange-50 text-orange-600',
        title: 'Suporte Integrado',
        description: 'Abra um chamado diretamente no app e fale com nosso time sem sair da plataforma.',
    },
];

const proFeatures = [
    {
        icon: MapPin,
        color: 'bg-blue-50 text-blue-600',
        title: 'Serviços Perto de Você',
        description: 'Configure seu raio de atuação e receba apenas demandas que fazem sentido para sua rotina.',
    },
    {
        icon: Bell,
        color: 'bg-green-50 text-green-600',
        title: 'Notificações Instantâneas',
        description: 'Seja o primeiro a saber quando um novo serviço compatível com suas especialidades é publicado.',
    },
    {
        icon: FileText,
        color: 'bg-purple-50 text-purple-600',
        title: 'Orçamentos Profissionais',
        description: 'Monte propostas completas com valor, prazo e materiais. Transmita credibilidade ao cliente.',
    },
    {
        icon: Wallet,
        color: 'bg-red-50 text-red-600',
        title: 'Recebimento Garantido',
        description: '90% do valor vai direto para você, sem risco de calote. Pague em dia, sempre.',
    },
    {
        icon: ShieldCheck,
        color: 'bg-yellow-50 text-yellow-600',
        title: 'Perfil Verificado',
        description: 'Seu perfil com especialidades, avaliações e histórico de serviços concluídos — sua vitrine digital.',
    },
    {
        icon: MessageSquare,
        color: 'bg-orange-50 text-orange-600',
        title: 'Chat com o Cliente',
        description: 'Comunicação direta e registrada com o cliente em tempo real, tudo dentro da plataforma.',
    },
];

function FeatureCard({ icon: Icon, color, title, description }: {
    icon: any;
    color: string;
    title: string;
    description: string;
}) {
    return (
        <div className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>
    );
}

export function FeatureSection() {
    return (
        <>
            {/* For Clients */}
            <section className="py-28 bg-white" id="clientes">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 font-bold rounded-full text-sm mb-6">
                                PARA CLIENTES
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                                Seu projeto entregue,{' '}
                                <span className="text-red-600">sem dores de cabeça.</span>
                            </h2>
                            <p className="text-xl text-gray-500 leading-relaxed">
                                Esqueça atrasos, calotes e profissionais desaparecidos. Com o Conecta Marceneiro, você tem controle total do início ao fim.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8">
                            <div className="space-y-4">
                                {/* Quote card mockup */}
                                <div className="bg-white rounded-2xl p-4 shadow-sm">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-bold text-gray-600">C</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">Carlos Marceneiro</p>
                                            <div className="flex gap-0.5">
                                                {[1,2,3,4,5].map(i => (
                                                    <span key={i} className="text-yellow-400 text-xs">★</span>
                                                ))}
                                            </div>
                                        </div>
                                        <span className="ml-auto text-xs bg-green-100 text-green-700 font-bold px-2 py-1 rounded-full">Verificado</span>
                                    </div>
                                    <div className="border-t border-gray-50 pt-3">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-xs text-gray-400">Orçamento</p>
                                                <p className="text-lg font-black text-gray-900">R$ 4.800</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400">Prazo</p>
                                                <p className="text-sm font-bold text-gray-900">5 dias úteis</p>
                                            </div>
                                            <button className="px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-xl">
                                                Aceitar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Payment security card */}
                                <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4">
                                    <div className="bg-green-100 p-3 rounded-xl">
                                        <ShieldCheck className="w-5 h-5 text-green-700" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Pagamento protegido</p>
                                        <p className="text-xs text-gray-400">Liberado só após sua aprovação</p>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <p className="text-xs text-gray-400">Valor retido</p>
                                        <p className="text-sm font-black text-green-600">R$ 4.800</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {clientFeatures.map((f, i) => (
                            <FeatureCard key={i} {...f} />
                        ))}
                    </div>
                </div>
            </section>

            {/* For Professionals */}
            <section className="py-28 bg-gray-900" id="profissionais">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="order-2 lg:order-1">
                            {/* Earnings mockup */}
                            <div className="bg-gray-800 rounded-3xl p-8 space-y-4">
                                <div className="bg-gray-700 rounded-2xl p-5">
                                    <p className="text-gray-400 text-sm mb-1">Saldo disponível</p>
                                    <p className="text-4xl font-black text-white">R$ 12.400</p>
                                    <div className="flex items-center gap-1 mt-2">
                                        <span className="text-green-400 text-sm font-bold">↑ 38%</span>
                                        <span className="text-gray-400 text-xs">vs. mês anterior</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gray-700 rounded-2xl p-4">
                                        <p className="text-gray-400 text-xs mb-1">Serviços concluídos</p>
                                        <p className="text-2xl font-black text-white">24</p>
                                        <p className="text-xs text-green-400 font-semibold mt-1">este mês</p>
                                    </div>
                                    <div className="bg-gray-700 rounded-2xl p-4">
                                        <p className="text-gray-400 text-xs mb-1">Avaliação média</p>
                                        <p className="text-2xl font-black text-white">4.9</p>
                                        <div className="flex gap-0.5 mt-1">
                                            {[1,2,3,4,5].map(i => (
                                                <span key={i} className="text-yellow-400 text-xs">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 flex items-center gap-3">
                                    <Wallet className="w-5 h-5 text-green-400 shrink-0" />
                                    <div>
                                        <p className="text-white text-sm font-bold">Saque disponível</p>
                                        <p className="text-gray-400 text-xs">Cai na sua conta em até 1 dia útil</p>
                                    </div>
                                    <button className="ml-auto px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-lg">
                                        Sacar
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="inline-block px-4 py-1.5 bg-red-500/20 text-red-400 font-bold rounded-full text-sm mb-6">
                                PARA MARCENEIROS
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                                Clientes sérios e{' '}
                                <span className="text-red-400">recebimento certo.</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                Você cuida do que sabe fazer. Nós trazemos os clientes, gerenciamos o pagamento e garantimos que você receba 90% do valor combinado.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {proFeatures.map((f, i) => (
                            <div key={i} className="group bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 hover:bg-gray-750 transition-all">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                                    <f.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
