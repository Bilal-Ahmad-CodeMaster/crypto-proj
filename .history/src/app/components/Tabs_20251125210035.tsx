"use client";
import React from "react";

interface Props {
    active: string;
    setActive: (id: string) => void;
    tabs: { id: string; label: string }[];
}

export default function Tabs({ active, setActive, tabs }: Props) {
    return (
        <div className="flex space-x-4 border-b mb-6">
            {tabs.map((t) => (
                <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`pb-2 px-2 text-sm font-medium 
            ${active === t.id ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
                >
                    {t.label}
                </button>
            ))}
        </div>
    );
}
