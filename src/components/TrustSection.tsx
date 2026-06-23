import { ShieldCheck, Zap, Handshake, Award } from 'lucide-react';

export function TrustSection() {
  return (
    <section className="py-24 lg:py-32 bg-white" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">
              Nossa história
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Criado por quem vive{' '}
              <span className="gradient-text">marcenaria de verdade.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              A M&F Planejados atua há mais de 20 anos entregando móveis planejados.
              Criamos o Conecta Marceneiro porque conhecemos as duas pontas: a dificuldade
              de encontrar profissionais confiáveis e a insegurança de quem contrata.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { value: '20+', label: 'Anos de mercado', highlight: false },
                { value: '5k+', label: 'Projetos entregues', highlight: false },
                { value: '90%', label: 'Vai ao profissional', highlight: true },
                { value: '100%', label: 'Pagamento garantido', highlight: false },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl p-5 ${stat.highlight ? 'bg-red-50 border border-red-100' : 'bg-gray-50'}`}
                >
                  <div
                    className={`font-display text-3xl font-extrabold mb-1 ${stat.highlight ? 'text-brand-600' : 'text-gray-900'}`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-brand-600 pl-6">
              <p className="text-gray-700 leading-relaxed mb-3 italic">
                &ldquo;Nossa missão é profissionalizar a marcenaria no Brasil — com dignidade
                para quem trabalha e segurança para quem contrata.&rdquo;
              </p>
              <footer>
                <span className="font-bold text-gray-900">Marcos Silva</span>
                <span className="text-gray-400"> — Fundador, M&F Planejados</span>
              </footer>
            </blockquote>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-900 text-white rounded-3xl p-8">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6 text-red-300" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Segurança em primeiro lugar</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Profissionais verificados, orçamentos e pagamentos dentro da plataforma.
                O valor fica retido até a entrega ser aprovada — ninguém sai perdendo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-600 text-white rounded-3xl p-6">
                <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold mb-1">Rápido</h3>
                <p className="text-red-100 text-sm">Orçamentos em até 24h</p>
              </div>
              <div className="bg-gray-100 rounded-3xl p-6">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <Handshake className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-1">Transparente</h3>
                <p className="text-gray-500 text-sm">Sem taxa escondida</p>
              </div>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-3xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <Award className="w-5 h-5 text-brand-600" />
              </div>
              <div>
                <h3 className="font-display font-bold text-gray-900 mb-1">Reputação real</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Avaliações só de serviços concluídos na plataforma. Sem nota comprada, sem perfil vazio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
