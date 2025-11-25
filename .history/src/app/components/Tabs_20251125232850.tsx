'use client'
import React, { useState } from 'react'

export default function Tabs({ active, setActive, tabs }: { active: string; setActive: (s: string) => void; tabs: { id: string; label: string }[] }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            {/* Mobile Hamburger Button */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all"
                >
                    <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                        <span className={`block h-0.5 w-full bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block h-0.5 w-full bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-0.5 w-full bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)}>
                    <div className="absolute top-20 left-4 right-4 bg-white rounded-lg shadow-lg p-4" onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-col gap-2">
                            {tabs.map(t => (
                                <button
                                    key={t.id}
                                    onClick={() => {
                                        setActive(t.id)
                                        setIsMenuOpen(false)
                                    }}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${active === t.id
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {t.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop Tabs */}
            <div className="hidden lg:flex gap-2 items-end">
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
        </>
    )
}