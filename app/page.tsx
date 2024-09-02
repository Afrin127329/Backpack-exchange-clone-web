"use client";

import Navbar from "@/packages/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Navbar />
      <h1 className=" text-redText">Home Page</h1>
    </main>
  );
}
