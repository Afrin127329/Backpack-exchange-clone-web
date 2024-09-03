"use client";

import Hero from "@/packages/components/Hero";
import Markets from "@/packages/components/Markets";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Hero />
      <div className="w-11/12 flex gap-4 my-6 justify-between items-center">
        <Markets />
        <Markets />
        <Markets />
      </div>
    </main>
  );
}
