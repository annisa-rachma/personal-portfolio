import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Annisa Rachmasari | Personal Portfolio",
  description:
    "A web developer and designer who love using code to merge design and technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] `}>
        <div className="bg-[#0000F4] opacity-60 absolute -z-10 top-[14rem] right-[30rem] h-[8rem] w-[8rem] rounded-full blur-[6rem] sm:w-[10rem] "></div>
        <div></div>
        {/* <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
        <div></div> */}
        <div className="bg-[#0000F4] h-[8rem] w-[8rem] top-[3rem] left-[8rem] rounded-full absolute"></div>
        <img src="/comp.png" alt="" className="absolute w-[16rem] top-[5rem] left-[7rem] " />
        <img src="/dot.svg" alt="" className="absolute top-[28rem] left-[2rem] rotate-90"/>
        <img src="/Asterisk.svg" alt="" className="absolute top-[34rem] h-[5.5rem] left-[12rem] "/>
        <img src="/Asterisk.svg" alt="" className="absolute top-[6rem] h-[4rem] right-[12rem] "/>
        <div className="bg-[#0000F4] h-[13rem] w-[13rem] top-[32rem] -right-[5rem] rounded-full absolute"></div>
        <img src="/dot.svg" alt="" className="absolute top-[22rem] right-[5rem] "/>
        <img src="/hand.png" alt="" className="absolute h-[28rem] top-[18rem] right-0 -rotate-45 "/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
