
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

const getTopics = async () => {
  // try {
  //   const res = await fetch("http://localhost:3000/api/topics", {
  //     cache: "no-store",
  //   });

  //   if (!res.ok) {
  //     console.log("failed to fetch")
  //     throw new Error("Failed to fetch topics");
  //   }

  //   return res.json();
  // } catch (error) {
  //   // return []; // Return empty string if fetching fails
  //   console.log("Error loading topics: ", error);
  // }
};

export default async function TopicsList() {
  
  // const { topics } = await getTopics();

  return (
    <>
      {/* {topics.map((t: { _id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))} */}
    </>
  );
}