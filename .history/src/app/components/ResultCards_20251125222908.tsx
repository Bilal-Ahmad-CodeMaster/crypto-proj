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
    compact?: boolean;
}

function StatCard({ title, profitLabel, profitAmount, poolFee, minedAmount, powerCost, positive = true, compact = false }: StatCardProps) {
    return (
        <div className={`rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all duration-200 ${compact ? 'mb-3' : 'mb-4'}`}>
            {/* Header */}
            <div className="px-5 py-3 border-b border-gray-100">
                <div className={`font-bold ${positive ? 'text-green-600' : 'text-red-600'} ${compact ? 'text-base' : 'text-lg'}`}>
                    {title}
                </div>
            </div>

            {/* Three Columns */}
            <div className="grid grid-cols-3">
                {/* Profit Section */}
                <div className={`border-r border-gray-100 ${compact ? 'p-3' : 'p-4'}`}>
                    <div className={`text-gray-600 mb-1 ${compact ? 'text-xs' : 'text-sm'}`}>{profitLabel}</div>
                    <div className={`font-bold mb-1 ${positive ? 'text-green-600' : 'text-red-600'} ${compact ? 'text-lg' : 'text-xl'}`}>
                        {profitAmount}
                    </div>
                    <div className={`text-gray-500 ${compact ? 'text-xs' : 'text-sm'}`}>Pool Fee {poolFee}</div>
                </div>

                {/* Mined Section */}
                <div className={`border-r border-gray-100 ${compact ? 'p-3' : 'p-4'}`}>
                    <div className={`text-gray-600 mb-1 ${compact ? 'text-xs' : 'text-sm'}`}>Mined/{title.toLowerCase()}</div>
                    <div className={`font-semibold mb-1 text-blue-600 ${compact ? 'text-base' : 'text-lg'}`}>
                        {minedAmount}
                    </div>
                    <div className={`text-gray-500 ${compact ? 'text-xs' : 'text-sm'}`}>{positive} coins</div>
                </div>

                {/* Power Cost Section */}
                <div className={`${compact ? 'p-3' : 'p-4'}`}>
                    <div className={`text-gray-600 mb-1 ${compact ? 'text-xs' : 'text-sm'}`}>Power cost/{title.toLowerCase()}</div>
                    <div className={`font-semibold mb-1 text-gray-700 ${compact ? 'text-base' : 'text-lg'}`}>
                        {powerCost}
                    </div>
                    <div className={`text-gray-500 ${compact ? 'text-xs' : 'text-sm'}`}>Electricity</div>
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
        },
        year: {
            profit: "$ 1,151.46",
            poolFee: "$ 27.24",
            mined: "Ƀ 0.034656",
            powerCost: "$ 1,576.80"
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

                <StatCard
                    title="Year"
                    profitLabel="Profit per year"
                    profitAmount={statsData.year.profit}
                    poolFee={statsData.year.poolFee}
                    minedAmount={statsData.year.mined}
                    powerCost={statsData.year.powerCost}
                    positive={positive}
                    compact={true}
                />
            </div>
        </div>
    )
}