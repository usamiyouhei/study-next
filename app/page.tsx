// "use client";

// import { FormEvent } from "react";

async function getHeavyData() {
  "use cache";
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "重いデータの取得完了";
}

export default async function Home() {
  const data = await getHeavyData();
  // const createAction = async (formData: FormData) => {
  //   "use server";

  //   const name = formData.get("name");
  //   console.log("ServerActionで実行されました", name);
  // };

  // // fetch('hoge.com', {cache: 'no-store'})
  // fetch("hoge.com", { cache: "force-cache" });

  return (
    <div>
      <h1>{data}</h1>
    </div>
    // <form action={createAction}>
    //   <input type="text" name="name" />
    //   <button type="submit">送信</button>
    // </form>
  );
}
