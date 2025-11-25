"use client";
import React from "react";
import Image from "next/image";

function Footer() {
    return (
        <footer className="w-full bg-[#e4e3e3] ">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 md:gap-20 items-center min-h-20">

                <Image
                    src="/11.png"
                    alt="Brand 1"
                    width={100}
                    height={50}
                    className="opacity-80 hover:opacity-100 transition hover:scale-110 object-contain"
                />

                <Image
                    src="/12.png"
                    alt="Brand 2"
                    width={100}
                    height={50}
                    className="opacity-80 hover:opacity-100 transition hover:scale-110 object-contain"
                />

                <Image
                    src="/13.png"
                    alt="Brand 3"
                    width={100}
                    height={50}
                    className="opacity-80 hover:opacity-100 transition hover:scale-110 object-contain"
                />

                <Image
                    src="/15.png"
                    alt="Brand 4"
                    width={100}
                    height={50}
                    className="opacity-80 hover:opacity-100 transition hover:scale-110 object-contain"
                />
            </div>
        </footer>
    );
}

export default Footer;
