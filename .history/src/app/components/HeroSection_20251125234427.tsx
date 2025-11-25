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
                    <source src="/hero-video.mp4" type="video/mp4" />
                    <source src="/hero-video.webm" type="video/webm" />
                    {/* Fallback image if video doesn't load */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900"></div>
                </video>

                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white px-4 max-w-4xl mx-auto">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Crypto Mining
                        <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Made Simple
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
                        Maximize your mining profits with real-time calculations and optimized strategies
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                            <div className="text-gray-300 text-sm md:text-base">Uptime Guarantee</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
                            <div className="text-gray-300 text-sm md:text-base">Monitoring</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">$2.5M+</div>
                            <div className="text-gray-300 text-sm md:text-base">Profits Calculated</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Start Mining Now
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                            Learn More
                        </button>
                    </div>

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