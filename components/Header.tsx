"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { IoBook } from "react-icons/io5";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex  justify-center ">
      <ul className="flex w-full justify-between px-10 py-3 items-center">
        <li>
          <Link href={"/"}>
            <IoBook size={35} />
          </Link>
        </li>{" "}
        <li>
          <Link
            className={cn(
              "text baee", // Assuming "baee" is a class; might be a typo?
              pathname === "/library" ? "text-blue-500" : "text-light-100"
            )}
            href="/library"
          >
            library
          </Link>
        </li>{" "}
      </ul>
    </header>
  );
};
export default Header;
