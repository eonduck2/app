import Image from "next/image";

export default function Home() {
  return (
    <div
      className="w-svw h-svh bg-white overflow-hidden flex justify-center items-center gap-20"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/564x/e0/97/81/e097814065839fdd1877617ce43e1696.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", // 이미지가 div의 중앙에 위치하도록 설정
        backgroundSize: "cover", // 이미지가 전체 div를 덮도록 설정
      }}
    >
      <h1 className="text-7xl text-black font-semibold">
        서브웨이를 주문했어요
      </h1>
    </div>
  );
}
