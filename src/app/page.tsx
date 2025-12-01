import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Cards from "@/components/cards";
import Component from "@/components/example-chart";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { IResponse } from "@/types";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/info");
  if (!data) {
    return notFound();
  }
  const result = (await data.json()) as IResponse[];

  return (
    <div className="flex min-h-screen flex-col items-center gap-10 overflow-hidden">
      <Navbar />
      <Cards />
    </div>
  );
}
