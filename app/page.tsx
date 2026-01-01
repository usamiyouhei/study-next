// "use client";

// import { FormEvent } from "react";
import { revalidateTag } from "next/cache";
import { cacheTag, revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

async function getHeavyData() {
  "use cache";
  cacheTag("posts");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "重いデータの取得完了";
}

fetch("hoge.com", {
  next: { tags: ["posts"] },
});

revalidateTag("posts");

const router = useRouter();
router.refresh();

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
