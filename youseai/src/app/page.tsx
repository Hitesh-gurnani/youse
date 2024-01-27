import Image from "next/image";
import HomePage from "./home/page";
import Agent from "./agent/page";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  return (
    <main className="">
      <PageTitle title="Home page"/>
      <HomePage/>
    </main>
  );
}
