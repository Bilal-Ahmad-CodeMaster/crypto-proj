"use client";

import { useState } from "react";
import Tabs from "./components/Tabs";
import HashingForm from "./components/HashingForm";
import ResultCards from "./components/ResultCards";

export default function Home() {
  const [active, setActive] = useState("btc");

  const currencies = [
    { id: "btc", label: "BTC" },
    { id: "etc", label: "ETC" },
    { id: "xmr", label: "XMR" },
    { id: "zec", label: "ZEC" },
    { id: "dash", label: "DASH" },
    { id: "ltc", label: "LTC" },
    { id: "kas", label: "KAS" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Currency</h1>

      <Tabs active={active} setActive={setActive} tabs={currencies} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <HashingForm />
        <div className="lg:col-span-2">
          <ResultCards />
        </div>
      </div>
    </div>
  );
}
