"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle"; // Adjust path if necessary

export default function Header() {
  const pathname = usePathname();

  // Helper function for active link styles
  const getLinkStyle = (path: string) => {
    const isActive = pathname === path;
    return `text-sm px-3 py-2 rounded-md transition-colors ${
      isActive
        ? "underline text-foreground font-bold"
        : "text-muted-foreground hover:text-foreground hover:bg-accent"
    }`;
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container max-w-screen-lg mx-auto flex justify-between items-center px-4 py-4">
        
        <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground">
          PASTELERO
        </Link>

        <nav className="flex items-center gap-4">
          <ul className="flex items-center gap-2">
            <li>
              <Link href="/" className={getLinkStyle("/")}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about" className={getLinkStyle("/about")}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/skills" className={getLinkStyle("/skills")}>
                SKILLS
              </Link>
            </li>
          </ul>

          {/* Vertical Divider */}
          <div className="h-6 w-[1px] bg-border mx-2 hidden sm:block" />

          {/* Theme Toggle Button */}
          <ModeToggle />
        </nav>

      </div>
    </header>
  );
}