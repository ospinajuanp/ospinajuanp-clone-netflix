'use client'
import { useSearchParams } from "next/navigation";
import Nav from "../components/Nav/Nav";
import HeroBanner from "../components/HeroBanner/HeroBanner";

export default function BrowsePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <Nav id={id}/>
      <HeroBanner/>

    </>
  );
}
