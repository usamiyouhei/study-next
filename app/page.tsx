// "use client";

// import { FormEvent } from "react";

export default function Home() {
  const createAction = async (formData: FormData) => {
    "use server";

    const name = formData.get("name");
    console.log("ServerActionで実行されました", name);
  };
  return (
    <form action={createAction}>
      <input type="text" name="name" />
      <button type="submit">送信</button>
    </form>
  );
}
