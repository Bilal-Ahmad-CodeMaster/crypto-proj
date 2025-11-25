'use client'
import React from 'react'

interface StatRowProps {
    title: string;
    money: string;
    poolFee: string;
    mined: string;
    minedLabel: string;
    powerCost: string;
    positive?: boolean;
}

export default function StatRow({
    title,
    money,
    poolFee,
    mined,
    minedLabel,
    powerCost,
    positive = true
}: StatRowProps) {
    return (
        <div className="mb-4 rounded-xl overflow-hidden flex bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">

            {/* LEFT colored block */}
            <div
                className={`w-48 p-5 text-white relative
                ${positive
                        ? 'bg-gradient-to-br from-green-600 to-green-700'
                        : 'bg-gradient-to-br from-red-500 to-red-600'
                    }`}
            >
                {/* Corner label */}
                <span className="absolute top-2 left-2 bg-white/20 text-xs px-3 py-1 rounded-full">
                    {title}
                </span>

                {/* Money */}
                <div className="mt-8 text-2xl font-bold">{money}</div>

                {/* Pool fee */}
                <div className="text-xs opacity-90 mt-1">Pool Fee {poolFee}</div>
            </div>

            {/* RIGHT Content */}
            <div className="flex-1 grid grid-cols-3 items-center px-6 py-4 gap-4">

                {/* Mined */}
                <div className="text-center border-r pr-4">
                    <div className={`text-lg font-semibold 
                        ${positive ? 'text-green-700' : 'text-red-600'}`}>
                        {mined}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{minedLabel}</div>
                </div>

                {/* Power cost */}
                <div className="col-span-2 text-right">
                    <div className={`text-lg font-semibold 
                        ${positive ? 'text-green-700' : 'text-red-600'}`}>
                        {powerCost}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Power cost/{title.toLowerCase()}</div>
                </div>
            </div>
        </div>
    )
}
