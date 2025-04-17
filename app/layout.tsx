import { ReactNode } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import menu from "./menu.json" assert { type: "json" };
import { Menu } from "../types/menu";
import MenuDesktop from "../components/MenuDesktop";
import MenuMobile from "../components/MenuMobile";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Type assertion for menu
const typedMenu = menu as Menu;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {" "}
      <body className={inter.className + " antialiased"}>
        <div className="h-min-screen md:grid md:grid-cols-[25ch_auto] md:gap-8">
          <div className="hidden md:block h-screen top-0 sticky overflow-y-auto border-r border-gray-200 p-8 text-neutral-500">
            <Link href="/" className="block mb-4">
              <h1 className="text-3xl font-bold hover:underline">Docs</h1>
            </Link>
            <MenuDesktop menu={typedMenu} />
          </div>
          <div className="fixed md:hidden right-0 bottom-0 left-0 p-6 md:p-8 bg-white z-[1000]">
            <MenuMobile menu={typedMenu} />
          </div>
          <div className="pb-[200px] mx-auto p-6 md:p-8">
            <div className="md:w-[768px] content">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
