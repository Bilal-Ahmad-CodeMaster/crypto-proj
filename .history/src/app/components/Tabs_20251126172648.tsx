'use client'
import React, { useState } from 'react'

export default function Tabs({ active, setActive, tabs }: { active: string; setActive: (s: string) => void; tabs: { id: string; label: string }[] }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="w-full">
            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex justify-end mb-2">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all border border-gray-200"
                >
                    <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                        <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Tabs - Desktop & Mobile */}
            <div className={`flex flex-row lg:flex-row gap-2 items-end ${isMenuOpen ? 'block' : 'hidden lg:flex'}`}>
                {tabs.map(t => (
                    <button
                        key={t.id}
                        onClick={() => {
                            setActive(t.id)
                            setIsMenuOpen(false)
                        }}
                        className={`px-4 py-3 lg:px-5 lg:py-3 rounded-t-lg text-sm font-medium transition-all ${active === t.id
                            ? 'bg-white text-gray-900 border-t border-l border-r border-gray-200 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200'
                            }`}
                        style={{ minWidth: 56 }}
                    >
                        {t.label}
                    </button>
                ))}
            </div>
        </div>
    )
}