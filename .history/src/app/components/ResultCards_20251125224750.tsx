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
        <div className="mb-3 rounded-lg border border-gray-200 bg-white hover:shadow-sm transition-all">
            <div className="flex">
                {/* First part with background color */}
                <div className={`w-56 p-2 text-white relative ${positive ? 'bg-[#3FB488]' : 'bg-[#F15C5C]'}`}>
                    <div className={`text-xs font-medium inline-block px-3 py-1 rounded-r-full mb-3 absolute top-0 left-0 ${positive ? 'bg-[#258C66]' : 'bg-[#C14848]'}`}>{title}</div>
                    <div>
                        <div className="text-2xl font-bold mb-1">{money}</div>
                        <div className="text-xs opacity-90">Pool Fee $0.26</div>
                        <div className="text-xs opacity-90">Pool Fee $0.26</div>
                    </div>
                </div>

                {/* Second and third parts without background color */}
                <div className="flex-1 grid grid-cols-2 items-center">
                    {/* Mined Column */}
                    <div className="text-center border-r border-gray-200 py-4">
                        <div className="text-sm font-semibold text-gray-700 mb-2">Mined/{title.toLowerCase()}</div>
                        <div className="text-lg font-bold text-gray-800">{mined}</div>
                    </div>

                    {/* Power Cost Column */}
                    <div className="text-center py-4">
                        <div className="text-sm font-semibold text-gray-700 mb-2">Power cost/{title.toLowerCase()}</div>
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
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className={`rounded-xl p-6 shadow-md ${positive ? 'bg-[#C4E8DB]' : 'bg-[#FFE0E0]'}`}>
                    <div className="text-xs font-semibold bg-white/90 inline-block px-3 py-1 rounded-full shadow">PROFIT RATIO PER DAY</div>
                    <div className={`text-4xl font-bold mt-4 ${positive ? 'text-green-700' : 'text-red-700'}`}>{positive ? '73%' : '-70%'}</div>
                </div>


                <div className={`rounded-xl p-6 shadow-md ${positive ? 'bg-[#C4E8DB]' : 'bg-[#FFE0E0]'}`}>
                    <div className="text-xs font-semibold bg-white/90 inline-block px-3 py-1 rounded-full shadow">PROFIT PER MONTH</div>
                    <div className={`text-4xl font-bold mt-4 ${positive ? 'text-green-700' : 'text-red-700'}`}>{positive ? '$ 94.64' : '$ -90.66'}</div>
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