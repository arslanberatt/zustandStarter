import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="md:hidden" variant="secondary">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 bg-white shadow-lg p-6">
        <SheetHeader>
          <SheetTitle className="text-lg font-bold text-gray-900">
            Menu
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col space-y-4 mt-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Contact
          </Link>
        </nav>

        <div className="mt-6 border-t pt-4">
          <Label htmlFor="search" className="text-gray-700">
            Search
          </Label>
          <Input id="search" placeholder="Search..." className="mt-2" />
        </div>

        <SheetClose asChild>
          <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white">
            Close
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
