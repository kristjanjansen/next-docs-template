"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu } from "../types/menu";

export default function MenuMobile({ menu }: { menu: Menu }) {
  const router = useRouter();
  const [selectedRoute, setSelectedRoute] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const path = event.target.value;
    setSelectedRoute(path);
    if (path) {
      router.push(path);
    }
  };

  return (
    <select
      value={selectedRoute}
      onChange={handleChange}
      className="px-3 py-2 border-2 rounded w-full"
    >
      <option value="">Select a page</option>
      {menu.map((section, i) => (
        <optgroup label={section.title} key={i}>
          {section.items.map((item, j) => (
            <option value={item.path} key={j}>
              {item.title}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}
