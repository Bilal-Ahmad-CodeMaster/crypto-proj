'use client'
import React from 'react'

export default function HeroSection() {
    return (
        <section className="relative h-screen max-h-[500px] w-full overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
                poster="/hero-poster.jpg" // Add a poster frame for loading
            >
                <source src="/mining.mp4" type="video/mp4" />
                <source src="/hero-video.webm" type="video/webm" />
                {/* Fallback image if video doesn't load */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-900 to-purple-900"></div>
            </video>

        </section>
    )
}