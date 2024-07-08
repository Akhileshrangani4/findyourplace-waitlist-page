import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      

      <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col justify-center items-center">
      <main className="flex flex-col gap-8 mt-8 justify-center items-center px-6 pb-10 text-center">
        <h1 className="font-semibold tracking-tight text-3xl leading-tight md:text-4xl max-w-lg">
          findyourplace.
        </h1>
        <p className="text-gray-400">
          Join the waitlist to be notified when our app is available!
        </p>
        <EmailForm />
      </main>
    </div>
    </>
  );
}
