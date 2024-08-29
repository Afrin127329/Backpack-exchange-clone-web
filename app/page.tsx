import PrimaryButton from "@/packages/components/primaryButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <h1 className=" text-redText">Home Page</h1>
      <PrimaryButton />
    </main>
  );
}
