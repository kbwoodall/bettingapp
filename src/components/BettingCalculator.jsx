import React, { useMemo, useState } from 'react'

export default function BettingCalculator() {
  const [dollars, setDollars] = useState('')
  const [odds, setOdds] = useState('')

  const stake = parseFloat(dollars) || 0
  const line = parseFloat(odds)

  const winnings = useMemo(() => {
    if (isNaN(line)) return 0
    if (line > 0) {
      return stake * (line / 100)
    } else if (line < 0) {
      return stake * (100 / Math.abs(line))
    }
    return 0
  }, [stake, line])

  const totalPayout = stake + winnings

  const formatCurrency = (n) =>
    new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(n || 0)

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-green-900 mb-1" htmlFor="dollars">Dollar Amount</label>
        <input
          id="dollars"
          type="number"
          inputMode="decimal"
          min="0"
          step="0.01"
          value={dollars}
          onChange={(e) => setDollars(e.target.value)}
          placeholder="Enter stake (e.g., 25)"
          className="w-full rounded-xl border border-green-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 shadow-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-green-900 mb-1" htmlFor="odds">American Odds</label>
        <input
          id="odds"
          type="number"
          inputMode="numeric"
          step="1"
          value={odds}
          onChange={(e) => setOdds(e.target.value)}
          placeholder="Enter odds (e.g., -120 or 150)"
          className="w-full rounded-xl border border-green-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 shadow-sm"
        />
      </div>

      <div className="rounded-xl bg-green-50 border border-green-200 p-4">
        <div className="flex items-center justify-between">
          <span className="text-green-900 font-medium">Winnings</span>
          <span className="text-green-900 font-bold">{formatCurrency(winnings)}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-green-900">Total Payout</span>
          <span className="text-green-900 font-semibold">{formatCurrency(totalPayout)}</span>
        </div>
      </div>
    </div>
  )
}
