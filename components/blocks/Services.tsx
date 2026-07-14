import { Settings, Code, Monitor } from 'lucide-react';

export default function Services(){
  const items = [
    { title: 'Platform Automation', desc: 'CI/CD, infra-as-code, pipeline automation', icon: Settings },
    { title: 'Developer Experience', desc: 'Tooling, scaffolding, developer portals', icon: Code },
    { title: 'Observability', desc: 'Automated alerting, dashboards, cost controls', icon: Monitor }
  ];
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-heading font-semibold mb-6">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it)=> (
            <div key={it.title} className="p-6 bg-white rounded shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <it.icon className="h-6 w-6 text-primary" />
                <h3 className="font-semibold">{it.title}</h3>
              </div>
              <p className="text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
