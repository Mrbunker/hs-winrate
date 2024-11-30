"use client";

import { TokenInput } from "@/components/TokenInput";
import { useRouter } from "next/navigation";
import { setCookie } from "./utils";

export default function Home() {
  const router = useRouter();

  const handleTokenSubmit = async (submittedToken: string) => {
    setCookie("xcxtoken", submittedToken);
    router.push("/records");
  };

  return <TokenInput onSubmit={handleTokenSubmit} />;
}
