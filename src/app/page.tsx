import Image from "next/image";

export default function Home() {
  return (
    <div
      className="w-screen h-screen bg-white overflow-hidden flex justify-center items-center gap-20"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/564x/e0/97/81/e097814065839fdd1877617ce43e1696.jpg")',
      }}
    >
      <div className="w-28 h-24 bg-red-400" />
      <div className="w-28 h-24 bg-red-400" />
    </div>
  );
}
