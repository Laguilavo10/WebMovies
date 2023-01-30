import React from "react";
import { Recent } from "../components/Recent";
import { Trends } from "../components/Trends";
import { Genres } from "../components/Genres";
import '../index.css'

export function Home() {
  return (
    <>
    <div className="home">
      <Trends/>
      <Recent/>
      <Genres/>
    </div>
    </>

  );
}
