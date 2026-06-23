interface LegalSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 pb-10 mb-10 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
      <h2 className="font-display text-xl sm:text-2xl font-extrabold text-gray-900 mb-5">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

export function LegalSubheading({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display text-base font-bold text-gray-800 mt-6 mb-2">{children}</h3>;
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-0 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalCallout({
  variant = 'info',
  children,
}: {
  variant?: 'info' | 'contact' | 'warning';
  children: React.ReactNode;
}) {
  const styles = {
    info: 'bg-gray-50 border-gray-200 text-gray-700',
    contact: 'bg-brand-50 border-brand-100 text-gray-700',
    warning: 'bg-amber-50 border-amber-200 text-gray-700',
  };

  return (
    <div className={`rounded-2xl border p-5 sm:p-6 ${styles[variant]}`}>{children}</div>
  );
}

export function LegalTable({
  headers,
  rows,
}: {
  headers: [string, string];
  rows: [string, string][];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-3 font-bold text-gray-900 border-b border-gray-200">{headers[0]}</th>
            <th className="text-left p-3 font-bold text-gray-900 border-b border-gray-200">{headers[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b], i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
              <td className="p-3 border-b border-gray-100 align-top">{a}</td>
              <td className="p-3 border-b border-gray-100 text-gray-500 align-top">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
