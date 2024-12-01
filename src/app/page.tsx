"use client";

import { TokenInput } from "@/components/TokenInput";
import { useRouter } from "next/navigation";
import { setCookie } from "@/lib/utils";

export default function Home() {
  const router = useRouter();

  const handleTokenSubmit = async (submittedToken: string) => {
    setCookie("xcxtoken", submittedToken);
    router.push("/records");
  };

  return (
    <div className="bg-white py-20 px-4">
      <TokenInput onSubmit={handleTokenSubmit} />
    </div>
  );
}
