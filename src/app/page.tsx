import Image from "next/image";

export default function Home() {
  const data=process.env.ENVIRONMENT
  console.log("ok",process.env.ENVIRONMENT)
  return (
    <>
    <span>ok no issue</span>
    <div>
      {data}
    </div>
    </>

  );
}
