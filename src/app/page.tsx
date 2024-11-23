"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex w-screen h-screen justify-center items-center gap-x-8">
      <Button size={"lg"} onClick={() => router.push("/vendors")}>
        Vendor
      </Button>
      <Button size={"lg"} onClick={() => router.push("/customer")}>
        Customer
      </Button>
    </div>
  );
}
