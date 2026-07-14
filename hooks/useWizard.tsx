"use client";
import { useState } from 'react';

export default function useWizard(initial = 0) {
  const [step, setStep] = useState(initial);
  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(0, s - 1));
  return { step, setStep, next, back };
}
