"use client";
import React from "react";
import Image from "next/image";

function Footer() {
    return (
        <footer className="w-full bg-[#e4e3e3]">
            <div className="max-w-6xl mx-auto p-4 flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-20 items-center min-h-20">
                <Image
                    src="/11.png"
                    alt="Brand 1"
                    width={80}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition hover:scale-110 object-contain w-16 md:w-20 lg:w-24"
                />

                <Image
                    src="/12.png"
                    alt="Brand 2"
                    width={80}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition hover:scale-110 object-contain w-16 md:w-20 lg:w-24"
                />

                <Image
                    src="/13.png"
                    alt="Brand 3"
                    width={80}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition hover:scale-110 object-contain w-16 md:w-20 lg:w-24"
                />

                <Image
                    src="/15.png"
                    alt="Brand 4"
                    width={80}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition hover:scale-110 object-contain w-16 md:w-20 lg:w-24"
                />
            </div>
        </footer>
    );
}

export default Footer;