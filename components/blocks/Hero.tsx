import { Rocket } from 'lucide-react';

export default function Hero(){
  return (
    <section id="hero" className="pt-20 scroll-mt-24 pb-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Automation that scales engineering impact</h1>
        <p className="text-lg text-slate-700 mb-6">Lhotse helps teams ship faster by automating repetitive engineering workflows.</p>
        <div className="flex justify-center gap-4">
          <a href="#calculator" className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-primary text-white hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/30"><Rocket className="h-5 w-5"/>Try the Calculator</a>
          <a href="#enquiry-wizard" className="px-6 py-3 rounded-md border border-slate-200 text-slate-900">Book a Discovery Call</a>
        </div>
      </div>
    </section>
  );
}
