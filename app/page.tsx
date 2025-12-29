"use client";

import { FormEvent } from "react";

export default function Home() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");

    await fetch("/api/create", {
      method: "POST",
      headers: {
        "Conyent-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">送信</button>
    </form>
  );
}
