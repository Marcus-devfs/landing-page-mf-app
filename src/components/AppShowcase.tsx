'use client';

import { useState } from 'react';
import { PhoneFrame } from './PhoneFrame';

const clientScreens = [
  {
    src: '/images-app/IMG_5716.PNG',
    title: 'Tela inicial',
    description: 'Encontre profissionais e acompanhe seus serviços',
  },
  {
    src: '/images-app/IMG_5717.PNG',
    title: 'Novo pedido',
    description: 'Publique seu projeto com fotos em minutos',
  },
  {
    src: '/images-app/IMG_5719.PNG',
    title: 'Mural do profissional',
    description: 'Avaliações e histórico antes de contratar',
  },
  {
    src: '/images-app/IMG_5718.PNG',
    title: 'Meus pagamentos',
    description: 'Pagamento protegido dentro da plataforma',
  },
];

const proScreens = [
  {
    src: '/images-app/IMG_5708.PNG',
    title: 'Serviços disponíveis',
    description: 'Demandas perto de você com filtros',
  },
  {
    src: '/images-app/IMG_5715.PNG',
    title: 'Enviar orçamento',
    description: 'Proposta profissional direto pelo app',
  },
  {
    src: '/images-app/IMG_5712.PNG',
    title: 'Meus ganhos',
    description: 'Acompanhe receitas e transações',
  },
  {
    src: '/images-app/IMG_5709.PNG',
    title: 'Detalhes do serviço',
    description: 'Todas as informações do cliente e local',
  },
];

export function AppShowcase() {
  const [active, setActive] = useState<'client' | 'pro'>('client');
  const screens = active === 'client' ? clientScreens : proScreens;

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden" id="app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">
            Veja o app
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Interface pensada para{' '}
            <span className="gradient-text">facilitar o dia a dia</span>
          </h2>
          <p className="text-lg text-gray-500">
            Telas reais do Conecta Marceneiro — simples, bonitas e funcionais para clientes e profissionais.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-2xl p-1.5 gap-1">
            <button
              onClick={() => setActive('client')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                active === 'client'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Visão do Cliente
            </button>
            <button
              onClick={() => setActive('pro')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                active === 'pro'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Visão do Profissional
            </button>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0">
          {screens.map((screen) => (
            <div
              key={screen.src}
              className="flex-shrink-0 w-[220px] sm:w-auto snap-center group"
            >
              <PhoneFrame
                src={screen.src}
                alt={screen.title}
                widthClass="w-[220px] sm:w-full"
              />
              <div className="mt-5 text-center sm:text-left px-1">
                <h3 className="font-display font-bold text-gray-900 mb-1">{screen.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
