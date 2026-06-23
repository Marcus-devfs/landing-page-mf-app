import Link from 'next/link';
import { Hammer, ArrowLeft, Shield, FileText } from 'lucide-react';
import { Footer } from '../Footer';

export interface LegalTocItem {
  id: string;
  label: string;
}

interface LegalPageShellProps {
  title: string;
  description: string;
  updatedAt: string;
  badge: string;
  badgeIcon?: 'shield' | 'file';
  toc: LegalTocItem[];
  relatedHref: string;
  relatedLabel: string;
  children: React.ReactNode;
}

export function LegalPageShell({
  title,
  description,
  updatedAt,
  badge,
  badgeIcon = 'shield',
  toc,
  relatedHref,
  relatedLabel,
  children,
}: LegalPageShellProps) {
  const BadgeIcon = badgeIcon === 'file' ? FileText : Shield;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="hero-gradient text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14">
          <div className="flex items-center justify-between mb-10">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="bg-white/15 backdrop-blur p-2 rounded-xl border border-white/20">
                <Hammer className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-[17px] tracking-tight">Conecta</span>
                <span className="font-display font-extrabold text-[17px] tracking-tight text-red-200">
                  Marceneiro
                </span>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao site
            </Link>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold mb-5">
              <BadgeIcon className="w-3.5 h-3.5" />
              {badge}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-red-100/90 text-base sm:text-lg leading-relaxed mb-4">{description}</p>
            <p className="text-white/60 text-sm">Última atualização: {updatedAt}</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-20">
        <div className="grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-12 items-start">
          <aside className="lg:sticky lg:top-6 space-y-4">
            <nav className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Neste documento</p>
              <ul className="space-y-1">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg px-2 py-1.5 transition-colors leading-snug"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href={relatedHref}
              className="flex items-center gap-3 bg-white rounded-2xl border border-gray-200 shadow-sm p-4 hover:border-brand-200 hover:shadow-md transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                {badgeIcon === 'file' ? (
                  <Shield className="w-4 h-4 text-brand-600" />
                ) : (
                  <FileText className="w-4 h-4 text-brand-600" />
                )}
              </div>
              <div>
                <p className="text-xs text-gray-400">Documento relacionado</p>
                <p className="text-sm font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                  {relatedLabel}
                </p>
              </div>
            </Link>
          </aside>

          <main className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-10 legal-prose">
            {children}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
