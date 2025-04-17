import Link from "next/link";
import { Fragment } from "react";
import { Menu, MenuSection, MenuItem } from "../types/menu";

interface MenuDesktopProps {
  menu: Menu;
}

export default function MenuDesktop({ menu }: MenuDesktopProps) {
  return (
    <div>
      {menu.map((section, i) => (
        <Fragment key={i}>
          <h2 className="mb-2 font-semibold">{section.title}</h2>
          <div className="mb-8 flex flex-col gap-2">
            {section.items.map((item, j) => (
              <Link key={j} href={item.path} className="block hover:underline">
                {item.title}
              </Link>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
