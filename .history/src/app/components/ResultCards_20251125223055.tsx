'use client'
import React from 'react'

interface StatRowProps {
    title: string;
    money: string;
    mined: string;
    powerCost: string;
    poolFee: string;
    positive?: boolean;
}

function StatRow({ title, money, mined, powerCost, poolFee, positive = true }: StatRowProps) {
    return (
        <div className="mb-3 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-all">
            <div className="p-4">
                {/* Label in corner */}
                <div className="flex justify-between items-start mb-4">
                    <div className={`text-xs font-semibold px-3 py-1 rounded-full ${positive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        Profit per {title.toLowerCase()}
                    </div>
                </div>

                {/* Three columns layout */}
                <div className="grid grid-cols-3 gap-4 items-center">
                    {/* Money Column */}
                    <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{money}</div>
                        <div className="text-xs text-gray-500">Pool Fee {poolFee}</div>
                    </div>

                    {/* Mined Column */}
                    <div className="text-center border-x border-gray-100 px-4">
                        <div className="text-sm font-semibold text-gray-900 mb-2">Mined/{title.toLowerCase()}</div>
                        <div className="text-lg font-bold text-gray-800">{mined}</div>
                    </div>

                    {/* Power Cost Column */}
                    <div className="text-center">
                        <div className="text-sm font-semibold text-gray-900 mb-2">Power cost/{title.toLowerCase()}</div>
                        <div className="text-lg font-bold text-gray-800">{powerCost}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ResultCards({ active }: { active: string }) {
    const positive = active !== 'etc'

    // Get currency symbol based on active tab
    const getCurrencySymbol = () => {
        switch (active.toLowerCase()) {
            case 'btc': return 'Ƀ'
            case 'etc': return 'Ξ'
            case 'xmr': return 'ɱ'
            case 'zec': return 'ⓩ'
            case 'dash': return 'Đ'
            case 'ltc': return 'Ł'
            case 'kas': return 'Ҝ'
            default: return 'Ƀ'
        }
    }

    const currencySymbol = getCurrencySymbol()

    return (
        <div>
            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className={`rounded-xl p-4 border ${positive ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <div className={`text-xs font-medium ${positive ? 'text-green-700' : 'text-red-700'} mb-2`}>
                        PROFIT RATIO PER DAY
                    </div>
                    <div className={`text-3xl font-bold ${positive ? 'text-green-800' : 'text-red-800'}`}>
                        {positive ? '73%' : '-70%'}
                    </div>
                </div>

                <div className={`rounded-xl p-4 border ${positive ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <div className={`text-xs font-medium ${positive ? 'text-green-700' : 'text-red-700'} mb-2`}>
                        PROFIT PER MONTH
                    </div>
                    <div className={`text-3xl font-bold ${positive ? 'text-green-800' : 'text-red-800'}`}>
                        {positive ? '$94.64' : '$ -90.66'}
                    </div>
                </div>
            </div>

            {/* Time Period Cards */}
            <div>
                <StatRow
                    title="Day"
                    money="$ 3.15"
                    mined={`${currencySymbol} 0.00009627`}
                    powerCost="$ 4.32"
                    poolFee="$ 0.07550"
                    positive={positive}
                />
                <StatRow
                    title="Week"
                    money="$ 22.08"
                    mined={`${currencySymbol} 0.000528`}
                    powerCost="$ 30.24"
                    poolFee="$ 0.528"
                    positive={positive}
                />
                <StatRow
                    title="Month"
                    money="$ 94.64"
                    mined={`${currencySymbol} 0.00227`}
                    powerCost="$ 129.60"
                    poolFee="$ 2.27"
                    positive={positive}
                />
            </div>
        </div>
    )
}