'use client'
import React from 'react'

export default function Tabs({ active, setActive, tabs }: { active: string; setActive: (s: string) => void; tabs: { id: string; label: string }[] }) {
    return (
        <div className="flex gap-2 items-end">
            {tabs.map(t => (
                <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`px-5 py-3 rounded-t-lg text-sm font-medium transition-all ${active === t.id
                            ? 'bg-white text-gray-900 border-t border-l border-r border-gray-200 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200'
                        }`}
                    style={{ minWidth: 56 }}
                >
                    {t.label}
                </button>
            ))}
        </div>
    )
}