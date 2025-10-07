import React from 'react'
import BettingCalculator from './components/BettingCalculator.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-amber-200 text-stone-900 font-bold rounded-2xl shadow-xl p-6 border border-amber-300">
        <h1 className="text-2xl font-bold text-amber-900 text-center mb-4">Betting Calculator</h1>
        <BettingCalculator />
      </div>
    </div>
  )
}
