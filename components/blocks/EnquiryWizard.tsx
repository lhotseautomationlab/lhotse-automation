"use client";
import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function EnquiryWizard(){
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <section id="enquiry-wizard" className="py-16 md:py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-heading font-semibold mb-4 inline-flex items-center gap-3"><Mail className="h-5 w-5 text-slate-900"/>Book a Discovery Call</h2>
        <div className="p-6 bg-white rounded shadow-sm">
          {step === 0 && (
            <div>
              <p className="mb-4">Tell us who you are</p>
              <label className="block mb-3">
                <span className="sr-only">Name</span>
                <input id="wizard-name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="w-full mb-3 p-3 border rounded h-10" />
              </label>
              <label className="block mb-3">
                <span className="sr-only">Email</span>
                <input id="wizard-email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full mb-3 p-3 border rounded h-10" />
              </label>
              <div className="flex justify-end">
                <button onClick={()=>setStep(1)} className="px-4 h-10 rounded bg-primary text-white">Next</button>
              </div>
            </div>
          )}
          {step === 1 && (
            <div>
              <p className="mb-4">Thanks {name || 'there'} — we will reach out at {email || 'your email'}.</p>
              <div className="flex justify-between">
                <button onClick={()=>setStep(0)} className="px-4 h-10 rounded border">Back</button>
                <button onClick={()=>setStep(2)} className="px-4 h-10 rounded bg-primary text-white">Confirm</button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <p className="mb-4">All set — we'll email you to schedule the call.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
