import { Menu } from "lucide-react"
import { Sidebar } from "./sidebar";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
             <Menu />
             </SheetTrigger>
             <SheetContent side="left" className="p-0 bg-white">
                <VisuallyHidden.Root>
                <SheetTitle>Menu</SheetTitle>
                </VisuallyHidden.Root>
                <Sidebar/>
             </SheetContent>
        </Sheet>
   );
}
