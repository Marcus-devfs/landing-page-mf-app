import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Paula M.',
    role: 'Cliente · São Paulo',
    rating: 5,
    text: 'Precisava de um armário sob medida e recebi 3 orçamentos em menos de 24h. Escolhi pelo mural de avaliações e o pagamento só saiu quando aprovei o resultado.',
  },
  {
    name: 'Carlos Henrique',
    role: 'Marceneiro · Campinas',
    rating: 5,
    text: 'Antes perdia tempo com cliente que some depois do orçamento. Aqui recebo demanda séria, mando proposta pelo app e o pagamento cai certinho.',
  },
  {
    name: 'Roberto e Fernanda',
    role: 'Clientes · Guarulhos',
    rating: 5,
    text: 'Reformamos a cozinha inteira. Conseguimos comparar prazos e valores na plataforma, acompanhar o serviço pelo app e pagar com tranquilidade.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Quem usa, recomenda
          </h2>
          <p className="text-lg text-gray-500">
            Clientes e profissionais que já confiam na plataforma para contratar e trabalhar com segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col"
            >
              <Quote className="w-8 h-8 text-red-200 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-display font-bold text-gray-900">{t.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
