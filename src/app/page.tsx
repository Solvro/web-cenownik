import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Component from "@/components/example-chart";
import { Button } from "@/components/ui/button";
import { IResponse } from "@/types";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/info");
  if (!data) {
    return notFound();
  }
  const result = (await data.json()) as IResponse[];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden">
      <h1>Mój fajny scraper</h1>
      <ul>
        {result.map((res) => (
          <li>{res.name}</li>
        ))}
      </ul>
    </div>
  );
}
