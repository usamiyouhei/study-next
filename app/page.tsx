"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.alert("Hello");
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => alert("Clicked!")}>Click me!</button>
    </div>
  );
}
