'use client';

import { useState } from 'react';
import {
  Camera,
  FileText,
  CheckCircle2,
  CreditCard,
  MapPin,
  Bell,
  ClipboardList,
  Wallet,
} from 'lucide-react';

const clientSteps = [
  {
    number: '01',
    icon: Camera,
    color: 'bg-blue-100 text-blue-700',
    title: 'Publique seu projeto',
    description:
      'Descreva o móvel ou serviço, anexe fotos e informe a localização. Leva menos de 2 minutos.',
  },
  {
    number: '02',
    icon: FileText,
    color: 'bg-green-100 text-green-700',
    title: 'Compare orçamentos',
    description:
      'Marceneiros verificados da sua região enviam propostas com valor, prazo e detalhes — tudo na plataforma.',
  },
  {
    number: '03',
    icon: CheckCircle2,
    color: 'bg-purple-100 text-purple-700',
    title: 'Escolha com confiança',
    description:
      'Veja o mural de cada profissional: avaliações, serviços concluídos e histórico real antes de decidir.',
  },
  {
    number: '04',
    icon: CreditCard,
    color: 'bg-red-100 text-red-700',
    title: 'Pague com segurança',
    description:
      'PIX ou cartão. O valor fica retido e só é liberado ao profissional após você aprovar o serviço.',
  },
];

const proSteps = [
  {
    number: '01',
    icon: MapPin,
    color: 'bg-orange-100 text-orange-700',
    title: 'Monte seu mural',
    description:
      'Cadastre especialidades, raio de atuação e experiência. Seu perfil vira vitrine com avaliações reais.',
  },
  {
    number: '02',
    icon: Bell,
    color: 'bg-blue-100 text-blue-700',
    title: 'Receba demandas',
    description:
      'Notificações de serviços compatíveis com o que você faz, na sua região e no seu horário.',
  },
  {
    number: '03',
    icon: ClipboardList,
    color: 'bg-green-100 text-green-700',
    title: 'Envie orçamentos',
    description:
      'Proposta profissional com valor, prazo e materiais — direto pelo app, sem negociar por fora.',
  },
  {
    number: '04',
    icon: Wallet,
    color: 'bg-yellow-100 text-yellow-700',
    title: 'Execute e receba',
    description:
      '90% do valor vai para você. A plataforma garante o pagamento e você acumula reputação a cada entrega.',
  },
];

export function HowItWorks() {
  const [active, setActive] = useState<'client' | 'pro'>('client');
  const steps = active === 'client' ? clientSteps : proSteps;

  return (
    <section className="py-24 lg:py-32 bg-gray-50" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">
            Como funciona
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Simples para quem contrata e para quem trabalha
          </h2>
          <p className="text-lg text-gray-500">
            Tudo acontece dentro da plataforma — do pedido ao pagamento — com transparência para os dois lados.
          </p>
        </div>

        <div className="flex justify-center mb-14">
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-sm border border-gray-200 gap-1">
            <button
              onClick={() => setActive('client')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                active === 'client'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Para Clientes
            </button>
            <button
              onClick={() => setActive('pro')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                active === 'pro'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Para Profissionais
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card-hover relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${step.color}`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="font-display text-3xl font-extrabold text-gray-100">{step.number}</span>
              </div>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#download"
            className={`inline-flex items-center gap-2 px-8 py-4 font-bold rounded-2xl transition-all shadow-lg ${
              active === 'client'
                ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-gray-200'
                : 'bg-brand-600 text-white hover:bg-brand-700 shadow-red-200'
            }`}
          >
            {active === 'client' ? 'Contratar um Profissional' : 'Começar como Profissional'}
          </a>
        </div>
      </div>
    </section>
  );
}
