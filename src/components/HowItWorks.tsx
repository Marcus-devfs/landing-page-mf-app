'use client';

import { useState } from 'react';
import { Camera, FileText, MessageSquare, CreditCard, MapPin, Bell, ClipboardList, Star } from 'lucide-react';

const clientSteps = [
    {
        number: '01',
        icon: Camera,
        color: 'bg-blue-100 text-blue-700',
        title: 'Descreva seu projeto',
        description: 'Publique o que precisa com fotos, categoria e localização. Leva menos de 2 minutos.',
    },
    {
        number: '02',
        icon: FileText,
        color: 'bg-green-100 text-green-700',
        title: 'Receba orçamentos',
        description: 'Profissionais verificados próximos a você enviam propostas detalhadas com prazo e valor.',
    },
    {
        number: '03',
        icon: MessageSquare,
        color: 'bg-purple-100 text-purple-700',
        title: 'Converse e escolha',
        description: 'Chat em tempo real com o profissional para alinhar detalhes antes de confirmar.',
    },
    {
        number: '04',
        icon: CreditCard,
        color: 'bg-red-100 text-red-700',
        title: 'Pague com segurança',
        description: 'PIX ou cartão de crédito. O valor fica retido e só é liberado após sua aprovação.',
    },
];

const proSteps = [
    {
        number: '01',
        icon: MapPin,
        color: 'bg-orange-100 text-orange-700',
        title: 'Monte seu perfil',
        description: 'Defina suas especialidades, raio de atuação e experiência. Profissionais verificados têm mais credibilidade.',
    },
    {
        number: '02',
        icon: Bell,
        color: 'bg-blue-100 text-blue-700',
        title: 'Receba demandas',
        description: 'Notificações em tempo real de serviços próximos que combinam com o que você faz.',
    },
    {
        number: '03',
        icon: ClipboardList,
        color: 'bg-green-100 text-green-700',
        title: 'Envie seu orçamento',
        description: 'Proposta profissional com valor, prazo e materiais. Tudo pelo app, em segundos.',
    },
    {
        number: '04',
        icon: Star,
        color: 'bg-yellow-100 text-yellow-700',
        title: 'Execute e receba',
        description: '90% do valor vai direto para você. A plataforma garante o pagamento e você acumula avaliações.',
    },
];

export function HowItWorks() {
    const [active, setActive] = useState<'client' | 'pro'>('client');
    const steps = active === 'client' ? clientSteps : proSteps;

    return (
        <section className="py-28 bg-gray-50" id="como-funciona">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-3">Como funciona</p>
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                        Simples para todos os lados
                    </h2>
                    <p className="text-lg text-gray-500">
                        Seja contratando ou prestando serviço, o processo é rápido, transparente e seguro.
                    </p>
                </div>

                {/* Tab Toggle */}
                <div className="flex justify-center mb-14">
                    <div className="inline-flex bg-white rounded-xl p-1.5 shadow-sm border border-gray-200 gap-1">
                        <button
                            onClick={() => setActive('client')}
                            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                                active === 'client'
                                    ? 'bg-gray-900 text-white shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900'
                            }`}
                        >
                            Para Clientes
                        </button>
                        <button
                            onClick={() => setActive('pro')}
                            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                                active === 'pro'
                                    ? 'bg-red-600 text-white shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900'
                            }`}
                        >
                            Para Profissionais
                        </button>
                    </div>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Connector line — desktop only */}
                    <div className="hidden lg:block absolute top-10 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gray-200 -z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            {/* Step number bubble */}
                            <div className="relative z-10 flex items-center gap-3 mb-5">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${step.color}`}>
                                    <step.icon className="w-5 h-5" />
                                </div>
                                <span className="text-3xl font-black text-gray-100">{step.number}</span>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    {active === 'client' ? (
                        <a
                            href="#download"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-gray-200"
                        >
                            Contratar um Profissional
                        </a>
                    ) : (
                        <a
                            href="#download"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-200"
                        >
                            Começar como Profissional
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}
