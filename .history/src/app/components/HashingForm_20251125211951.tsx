'use client'
import React, { act } from 'react'


export default function HashingForm({ active }: { active: string }) {
    return (
        <div className="bg-white left-card border border-gray-200 p-0 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex items-center justify-center">
                <img src={`${active.tolo}`} alt="logo" className="w-28 h-28 object-contain" />
            </div>


            <div className="bg-gray-100 text-center py-3 text-sm text-gray-600 border-b border-gray-200">
                Calculated for
                <div className="font-semibold mt-1">1 {active.toUpperCase()} = $ 376.23</div>
            </div>


            <div className="p-5">
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Hashing Power</label>
                    <div className="flex border rounded shadow-sm overflow-hidden">
                        <input type="number" defaultValue={1} className="w-full p-3 outline-none" />
                        <select className="p-3 bg-white border-l">
                            <option>H/s</option>
                            <option>KH/s</option>
                            <option>MH/s</option>
                            <option>GH/s</option>
                            <option>TH/s</option>
                        </select>
                    </div>
                </div>


                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Power consumption (w)</label>
                    <input className="w-full p-3 border rounded shadow-sm" defaultValue={1500} />
                </div>


                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Cost per KWh ($)</label>
                    <input className="w-full p-3 border rounded shadow-sm" defaultValue={0.12} />
                </div>


                <div>
                    <label className="block text-sm font-semibold mb-2">Pool Fee (%)</label>
                    <input className="w-full p-3 border rounded shadow-sm" defaultValue={1} />
                </div>
            </div>
        </div>
    )
}