'use client'
import Image from 'next/image'
import React from 'react'

export default function HashingForm({ active }: { active: string }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center p-4">
                    <Image
                        src={`/${active.toLowerCase()}.png`}
                        alt="logo"
                        width={64}
                        height={64}
                        className="object-contain w-12 h-12 md:w-16 md:h-16"
                    />
                </div>
            </div>

            <div className="bg-linear-to-r from-gray-50 to-gray-100 text-center py-4 text-sm text-gray-600 border-b border-gray-100">
                Calculated for
                <div className="font-semibold text-gray-900 mt-1">1 {active.toUpperCase()} = $376.23</div>
            </div>

            <div className="p-3 md:p-4 space-y-3 md:space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hashing Power</label>
                    <div className="flex rounded-lg overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
                        <input
                            type="number"
                            defaultValue={1}
                            className="flex-1 px-3 py-2 outline-none bg-white text-sm md:text-base"
                        />
                        <select className="px-3 py-2 bg-gray-50 border-l border-gray-300 text-gray-700 text-sm md:text-base">
                            <option>H/s</option>
                            <option>KH/s</option>
                            <option>MH/s</option>
                            <option>GH/s</option>
                            <option>TH/s</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Power consumption (w)</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base"
                        defaultValue={1500} type="number"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cost per KWh ($)</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base"
                        defaultValue={0.12} type="number"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pool Fee (%)</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base"
                        defaultValue={1} type="number"
                    />
                </div>
            </div>
        </div>
    )
}