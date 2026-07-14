"use client";
import { useState } from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';

export default function Calculator(){
  const [hours, setHours] = useState(100);
  const [rate, setRate] = useState(120);
  const result = Math.round(hours * rate);
  return (
    <section id="calculator" className="py-16 md:py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-heading font-semibold mb-6 inline-flex items-center gap-3"><CalculatorIcon className="h-5 w-5 text-slate-900"/>Calculator</h2>
        <div className="grid grid-cols-1 gap-6">
          <label className="flex flex-col">
            <span className="text-sm text-slate-700">Estimated hours</span>
            <input id="hours" aria-label="Estimated hours" className="h-10" type="range" min={10} max={1000} value={hours} onChange={(e)=>setHours(Number(e.target.value))} />
            <div className="text-sm">{hours} hrs</div>
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-slate-700">Hourly rate (USD)</span>
            <input id="rate" aria-label="Hourly rate" className="h-10" type="range" min={20} max={400} value={rate} onChange={(e)=>setRate(Number(e.target.value))} />
            <div className="text-sm">${rate}/hr</div>
          </label>
        </div>
        <div className="mt-6 p-6 rounded bg-accent/10 border-l-4 border-accent">
          <div className="text-sm text-slate-600">Estimated engagement cost</div>
          <div className="text-2xl font-semibold text-accent mt-1">${result.toLocaleString()}</div>
        </div>
      </div>
    </section>
  );
}
