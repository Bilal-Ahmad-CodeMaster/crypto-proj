'use client'
import React from 'react'

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/hero-poster.jpg" // Add a poster frame for loading
                >
                    <source src="/mining.mp4" type="video/mp4" />
                    <source src="/hero-video.webm" type="video/webm" />
                    {/* Fallback image if video doesn't load */}
                    <div className="absolute inset-0 bg-linear-to-br from-blue-900 to-purple-900"></div>
                </video>


            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white px-4 max-w-4xl mx-auto">
                 

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}