'use client'
import Image from 'next/image'
import React from 'react'

export default function HashingForm({ active }: { active: string }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-center">
                <div className="w-24 h-24 bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center p-4">
                    <Image
                        src={`/${active.toLowerCase()}.png`}
                        alt="logo"
                        width={64}
                        height={64}
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="bg-linear-to-r from-gray-50 to-gray-100 text-center py-4 text-sm text-gray-600 border-b border-gray-100">
                Calculated for
                <div className="font-semibold text-gray-900 mt-1">1 {active.toUpperCase()} = $376.23</div>
            </div>

            <div className="p-3 space-y-3">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hashing Power</label>
                    <div className="flex rounded-lg overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
                        <input
                            type="number"
                            defaultValue={1}
                            className="flex-1 px-3 py-2 outline-none bg-white"
                        />
                        <select className="px-4 py-3 bg-gray-50 border-l border-gray-300 text-gray-700">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        defaultValue={1500}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cost per KWh ($)</label>
                    <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        defaultValue={0.12}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pool Fee (%)</label>
                    <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        defaultValue={1}
                    />
                </div>
            </div>
        </div>
    )
}