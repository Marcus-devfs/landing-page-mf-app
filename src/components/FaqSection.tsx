'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'O app é gratuito?',
    a: 'Sim. Baixar e criar conta é grátis. Você só paga quando fecha um serviço — e o pagamento acontece com proteção dentro da plataforma.',
  },
  {
    q: 'Como funciona o pagamento protegido?',
    a: 'Ao aceitar um orçamento, você paga via PIX ou cartão. O valor fica retido na plataforma e só é liberado ao profissional depois que você aprovar a entrega do serviço.',
  },
  {
    q: 'Posso negociar valor direto com o marceneiro?',
    a: 'Os orçamentos e pagamentos acontecem dentro da plataforma. Isso garante proteção para você e para o profissional, além de histórico e avaliações reais.',
  },
  {
    q: 'Como escolho o profissional certo?',
    a: 'Compare orçamentos recebidos e acesse o mural de cada profissional: avaliações, comentários de clientes anteriores, quantidade de serviços e especialidades.',
  },
  {
    q: 'Quanto o profissional recebe?',
    a: 'O marceneiro recebe 90% do valor do serviço. A plataforma retém 10% para manter a operação, o pagamento seguro e o suporte.',
  },
  {
    q: 'Em quais cidades o app funciona?',
    a: 'Estamos expandindo gradualmente. Baixe o app, informe sua localização e veja os profissionais disponíveis na sua região.',
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">
            Dúvidas frequentes
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Perguntas que recebemos
          </h2>
          <p className="text-gray-500">
            Tudo o que você precisa saber antes de baixar o app.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-display font-bold text-gray-900 text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 -mt-1">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
