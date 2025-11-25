'use client'
import React from 'react'


export default function Tabs({ active, setActive, tabs }: { active: string; setActive: (s: string) => void; tabs: { id: string; label: string }[] }) {
    return (
        <div className="flex gap-3 items-end">
            {tabs.map(t => (
                <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`tab-pill ${active === t.id ? 'bg-white border-gray-200 shadow-md text-green-800' : 'text-gray-600 hover:text-gray-800'}`}
                    style={{ minWidth: 56 }}
                >
                    {t.label}
                </button>
            ))}
        </div>
    )
}