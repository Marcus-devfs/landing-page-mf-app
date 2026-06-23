import {
  Camera,
  FileText,
  ShieldCheck,
  Bell,
  Headphones,
  Star,
  MapPin,
  Wallet,
  Route,
  UserCheck,
} from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';

const clientFeatures = [
  {
    icon: Camera,
    color: 'bg-blue-50 text-blue-600',
    title: 'Projeto com fotos',
    description:
      'Mostre exatamente o que precisa com imagens e descrição detalhada. O profissional entende antes de orçar.',
  },
  {
    icon: FileText,
    color: 'bg-green-50 text-green-600',
    title: 'Orçamentos na plataforma',
    description:
      'Receba e compare propostas com valor, prazo e materiais — sem combinar valores por fora.',
  },
  {
    icon: Star,
    color: 'bg-yellow-50 text-yellow-600',
    title: 'Mural do profissional',
    description:
      'Avaliações, comentários e histórico de serviços de quem você vai contratar. Decida com informação.',
  },
  {
    icon: ShieldCheck,
    color: 'bg-red-50 text-red-600',
    title: 'Pagamento protegido',
    description:
      'PIX ou cartão. O valor fica retido e só é liberado quando você aprovar a entrega.',
  },
  {
    icon: Route,
    color: 'bg-purple-50 text-purple-600',
    title: 'Acompanhamento em tempo real',
    description:
      'Saiba quando o profissional está a caminho, em execução e quando o serviço foi concluído.',
  },
  {
    icon: Headphones,
    color: 'bg-orange-50 text-orange-600',
    title: 'Suporte integrado',
    description:
      'Problema no serviço? Abra um chamado direto no app e fale com nosso time.',
  },
];

const proFeatures = [
  {
    icon: MapPin,
    color: 'bg-blue-50 text-blue-600',
    title: 'Demandas na sua região',
    description:
      'Configure raio de atuação e especialidades. Receba só o que faz sentido para você.',
  },
  {
    icon: Bell,
    color: 'bg-green-50 text-green-600',
    title: 'Alertas instantâneos',
    description:
      'Seja avisado assim que um serviço compatível for publicado perto de você.',
  },
  {
    icon: FileText,
    color: 'bg-purple-50 text-purple-600',
    title: 'Orçamentos profissionais',
    description:
      'Envie propostas completas pelo app. Cliente sério, processo organizado.',
  },
  {
    icon: Wallet,
    color: 'bg-red-50 text-red-600',
    title: 'Recebimento garantido',
    description:
      '90% do valor vai direto para você. Sem risco de calote — a plataforma segura o pagamento.',
  },
  {
    icon: UserCheck,
    color: 'bg-yellow-50 text-yellow-600',
    title: 'Perfil verificado',
    description:
      'Seu mural com especialidades, avaliações e portfólio — sua vitrine digital na plataforma.',
  },
  {
    icon: ShieldCheck,
    color: 'bg-orange-50 text-orange-600',
    title: 'Reputação que cresce',
    description:
      'Cada serviço concluído fortalece seu perfil e traz mais clientes qualificados.',
  },
];

function FeatureCard({
  icon: Icon,
  color,
  title,
  description,
  dark = false,
}: {
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`card-hover rounded-2xl p-6 border ${
        dark
          ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
          : 'bg-white border-gray-100 shadow-sm'
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className={`font-display font-bold mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
        {description}
      </p>
    </div>
  );
}

export function FeatureSection() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-white" id="clientes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <span className="inline-block px-4 py-1.5 bg-red-100 text-brand-700 font-bold rounded-full text-sm mb-6">
                PARA QUEM CONTRATA
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Marcenaria de qualidade,{' '}
                <span className="gradient-text">sem surpresa no final.</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                Chega de marceneiro que some, atraso sem explicação e pagamento sem garantia.
                No Conecta Marceneiro, você compara, contrata e paga com proteção.
              </p>
              <ul className="space-y-3">
                {[
                  'Orçamentos só dentro da plataforma',
                  'Profissionais verificados com mural público',
                  'Pagamento retido até sua aprovação',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-green-600 text-xs">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center lg:justify-end">
              <PhoneFrame
                src="/images-app/IMG_5719.PNG"
                alt="Mural do profissional com avaliações no app"
                widthClass="w-[260px] sm:w-[280px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {clientFeatures.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gray-900" id="profissionais">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <PhoneFrame
                src="/images-app/IMG_5712.PNG"
                alt="Painel de ganhos do profissional no app"
                widthClass="w-[260px] sm:w-[280px]"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-red-500/20 text-red-400 font-bold rounded-full text-sm mb-6">
                PARA MARCENEIROS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Clientes qualificados e{' '}
                <span className="text-red-400">pagamento garantido.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Você foca no ofício. A plataforma traz demanda, organiza o orçamento,
                protege o recebimento e constrói sua reputação a cada entrega.
              </p>
              <ul className="space-y-3">
                {[
                  '90% do valor vai direto para você',
                  'Orçamentos e pagamentos 100% na plataforma',
                  'Mural profissional com avaliações reais',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 font-medium text-sm">
                    <span className="w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-red-400 text-xs">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {proFeatures.map((f, i) => (
              <FeatureCard key={i} {...f} dark />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
