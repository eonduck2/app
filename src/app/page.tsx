"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const QRCode = dynamic(() => import("qrcode.react"), { ssr: false });

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="w-svw h-svh bg-white overflow-hidden flex justify-center flex-col items-center gap-20"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/564x/e0/97/81/e097814065839fdd1877617ce43e1696.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-8xl text-black font-semibold">AWS를 마스터 해봐요</h1>
      {isClient && (
        <QRCode
          value="https://release.d20qj9z66btjk0.amplifyapp.com"
          size={130}
        />
      )}
    </div>
  );
}
