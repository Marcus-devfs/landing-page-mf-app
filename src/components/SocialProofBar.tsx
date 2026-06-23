export function SocialProofBar() {
  const stats = [
    { value: '20+', label: 'Anos de experiência M&F' },
    { value: '5.000+', label: 'Projetos entregues' },
    { value: '100%', label: 'Pagamento protegido' },
    { value: '4.9★', label: 'Satisfação média' },
  ];

  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left lg:pl-6 lg:border-l lg:border-gray-100 first:lg:border-l-0 first:lg:pl-0">
              <div className="font-display text-3xl lg:text-4xl font-extrabold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
