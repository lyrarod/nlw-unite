//...

import Link from "next/link";
import { FileCode2 } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full dark:border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow">
      <nav className="container flex items-center justify-between w-full p-8">
        <Link href={"/"} className="flex items-center gap-x-2" title="nlwUnite">
          <FileCode2 className="sm:size-8" />
          <h1 className="flex items-baseline text-lg font-semibold tracking-wider sm:text-xl">
            nlw
            <span className="text-primary">Unite</span>
          </h1>
        </Link>

        <ModeToggle />
      </nav>
    </header>
  );
}
