"use client";
import React from "react";
import Image from "next/image";

function Footer() {
    return (
        <footer className="w-full bg-[#0c0f1a] ">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 md:gap-20 items-center h-14">

                <Image
                    src="/11.png"
                    alt="Brand 1"
                    width={140}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition hover:scale-110 object-contain"
                />

                <Image
                    src="/12.png"
                    alt="Brand 2"
                    width={140}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition hover:scale-110 object-contain"
                />

                <Image
                    src="/13.png"
                    alt="Brand 3"
                    width={140}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition hover:scale-110 object-contain"
                />

                <Image
                    src="/15.png"
                    alt="Brand 4"
                    width={140}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition hover:scale-110 object-contain"
                />
            </div>
        </footer>
    );
}

export default Footer;
