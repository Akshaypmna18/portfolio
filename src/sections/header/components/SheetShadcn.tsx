import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TextAlignRightIcon } from "@radix-ui/react-icons";
import NavLinks from "./NavLinks";
import links from "@/lib/navLinks";
import { LinksType } from "@/lib/types";
import LinkIcons from "./LinkIcons";

function SheetShadcn() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <TextAlignRightIcon className="h-8 w-8 hover:text-primaryColor cursor-pointer lg:hidden" />
      </SheetTrigger>
      <SheetContent
        side="left"
        onOpenAutoFocus={(e: Event): void => e.preventDefault()}
        className="flex flex-col gap-y-4"
      >
        <ul className="flex flex-col gap-y-4 mt-12">
          {links.map(({ hash, name }: LinksType) => (
            <SheetClose key={hash} className="text-start text-[calc(1rem+1vw)]">
              <li>
                <NavLinks hash={hash} name={name} />
              </li>
            </SheetClose>
          ))}
        </ul>
        <LinkIcons />
      </SheetContent>
    </Sheet>
  );
}

export default SheetShadcn;
