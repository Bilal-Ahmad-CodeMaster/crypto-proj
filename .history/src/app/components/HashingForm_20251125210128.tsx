"use client";
import React from "react";

export default function HashingForm() {
    return (
        <div className="bg-white shadow rounded-lg p-5 w-full max-w-sm">
            <div className="mb-4">
                <label className="block text-sm font-medium">Hashing Power</label>
                <div className="flex border rounded px-2">
                    <input
                        className="w-full p-2 outline-none"
                        type="number"
                        defaultValue={10}
                    />
                    <select className="p-2 outline-none bg-transparent">
                        <option>H/s</option>
                        <option>KH/s</option>
                        <option>MH/s</option>
                        <option>GH/s</option>
                        <option>TH/s</option>
                    </select>
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Power Consumption (W)</label>
                <input className="w-full border rounded p-2" type="number" defaultValue={1500} />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium">Cost per KWh ($)</label>
                <input className="w-full border rounded p-2" type="number" defaultValue={0.12} />
            </div>

            <div>
                <label className="block text-sm font-medium">Pool Fee (%)</label>
                <input className="w-full border rounded p-2" type="number" defaultValue={1} />
            </div>
        </div>
    );
}
