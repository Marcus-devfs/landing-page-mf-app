'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Star, MapPin, CreditCard } from 'lucide-react';
import { PhoneFrame } from './PhoneFrame';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-24 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 font-semibold text-sm mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              Uma iniciativa M&F Planejados · 20 anos de tradição
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Seu móvel sob medida,{' '}
              <span className="text-red-200">com quem entende.</span>
            </h1>

            <p className="text-lg sm:text-xl text-red-100/90 leading-relaxed mb-10 max-w-xl">
              Publique seu projeto, receba orçamentos de marceneiros verificados perto de você,
              pague com segurança na plataforma e acompanhe cada etapa pelo app.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href="#download"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-700 rounded-2xl font-bold text-base shadow-xl shadow-black/20 hover:bg-red-50 transition-all hover:-translate-y-0.5"
              >
                Quero Contratar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#profissionais"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/25 rounded-2xl font-bold text-base hover:bg-white/15 backdrop-blur-sm transition-all"
              >
                Sou Marceneiro
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: ShieldCheck, label: 'Pagamento protegido' },
                { icon: Star, label: 'Avaliações reais' },
                { icon: MapPin, label: 'Profissionais próximos' },
                { icon: CreditCard, label: 'PIX e cartão' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-3 border border-white/10"
                >
                  <Icon className="w-4 h-4 text-red-200 shrink-0" />
                  <span className="text-xs font-semibold text-white/90 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:flex justify-center"
          >
            <PhoneFrame
              src="/images-app/IMG_5716.PNG"
              alt="Tela inicial do Conecta Marceneiro"
              priority
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex lg:hidden justify-center mt-12"
        >
          <PhoneFrame
            src="/images-app/IMG_5716.PNG"
            alt="Tela inicial do Conecta Marceneiro"
            priority
            widthClass="w-[220px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
