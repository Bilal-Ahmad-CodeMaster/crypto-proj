'use client'
import React from 'react'

interface StatCardProps {
    title: string;
    profitLabel: string;
    profitAmount: string;
    poolFee: string;
    minedAmount: string;
    powerCost: string;
    positive?: boolean;
}

function StatCard({ title, profitLabel, profitAmount, poolFee, minedAmount, powerCost, positive = true }: StatCardProps) {
    return (
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 overflow-hidden">
            {/* Header with colored label */}
            <div className={`px-6 py-3 ${positive ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-red-500 to-red-600'}`}>
                <div className="text-sm font-semibold text-white uppercase tracking-wide">
                    {title}
                </div>
            </div>

            {/* Three Column Content */}
            <div className="grid grid-cols-3 divide-x divide-gray-100">
                {/* Profit Column */}
                <div className="p-6 text-center">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                        {profitLabel}
                    </div>
                    <div className={`text-2xl font-bold mb-2 ${positive ? 'text-green-600' : 'text-red-600'}`}>
                        {profitAmount}
                    </div>
                    <div className="text-xs text-gray-500">
                        Pool Fee {poolFee}
                    </div>
                </div>

                {/* Mined Column */}
                <div className="p-6 text-center">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                        Mined/{title.toLowerCase()}
                    </div>
                    <div className={`text-xl font-semibold ${positive ? 'text-blue-600' : 'text-orange-600'}`}>
                        {minedAmount}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                        {positive.toUpperCase()} mined
                    </div>
                </div>

                {/* Power Cost Column */}
                <div className="p-6 text-center">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                        Power cost/{title.toLowerCase()}
                    </div>
                    <div className="text-xl font-semibold text-gray-700">
                        {powerCost}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                        Electricity cost
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ResultCards({ active }: { active: string }) {
    const positive = active !== 'etc'

    // Sample data - you can replace with dynamic data
    const statsData = {
        day: {
            profit: "$ 3.15",
            poolFee: "$ 0.07550",
            mined: "Ƀ 0.00009627",
            powerCost: "$ 4.32"
        },
        week: {
            profit: "$ 22.08",
            poolFee: "$ 0.528",
            mined: "Ƀ 0.00067389",
            powerCost: "$ 30.24"
        },
        month: {
            profit: "$ 94.64",
            poolFee: "$ 2.27",
            mined: "Ƀ 0.002888",
            powerCost: "$ 129.60"
        }
    }

    return (
        <div>
            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-6 mb-8">
                <div className={`rounded-2xl p-6 ${positive ? 'bg-gradient-to-br from-green-50 to-green-100 border border-green-200' : 'bg-gradient-to-br from-red-50 to-red-100 border border-red-200'}`}>
                    <div className={`text-xs font-semibold ${positive ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'} inline-block px-4 py-2 rounded-full mb-4`}>
                        PROFIT RATIO PER DAY
                    </div>
                    <div className={`text-4xl font-bold ${positive ? 'text-green-700' : 'text-red-700'}`}>
                        {positive ? '73%' : '-70%'}
                    </div>
                </div>

                <div className={`rounded-2xl p-6 ${positive ? 'bg-gradient-to-br from-green-50 to-green-100 border border-green-200' : 'bg-gradient-to-br from-red-50 to-red-100 border border-red-200'}`}>
                    <div className={`text-xs font-semibold ${positive ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'} inline-block px-4 py-2 rounded-full mb-4`}>
                        PROFIT PER MONTH
                    </div>
                    <div className={`text-4xl font-bold ${positive ? 'text-green-700' : 'text-red-700'}`}>
                        {positive ? '$94.64' : '$ -90.66'}
                    </div>
                </div>
            </div>

            {/* Detailed Stats Cards */}
            <div>
                <StatCard
                    title="Day"
                    profitLabel="Profit per day"
                    profitAmount={statsData.day.profit}
                    poolFee={statsData.day.poolFee}
                    minedAmount={statsData.day.mined}
                    powerCost={statsData.day.powerCost}
                    positive={positive}
                />

                <StatCard
                    title="Week"
                    profitLabel="Profit per week"
                    profitAmount={statsData.week.profit}
                    poolFee={statsData.week.poolFee}
                    minedAmount={statsData.week.mined}
                    powerCost={statsData.week.powerCost}
                    positive={positive}
                />

                <StatCard
                    title="Month"
                    profitLabel="Profit per month"
                    profitAmount={statsData.month.profit}
                    poolFee={statsData.month.poolFee}
                    minedAmount={statsData.month.mined}
                    powerCost={statsData.month.powerCost}
                    positive={positive}
                />
            </div>
        </div>
    )
}