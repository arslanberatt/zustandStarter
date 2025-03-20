"use client";
import { Input } from "@/components/ui/input";
import { useStore } from "@/store/useStore";
import Image from "next/image";

export default function Home() {
  const { setText } = useStore();

  return (
    <div>
      <Image
        src="/1.png"
        alt="Blog slider"
        width={1170}
        height={500}
        className="w-216 h-auto"
      />
      <div className="bg-red-500 mt-4">
        <Input onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
}
