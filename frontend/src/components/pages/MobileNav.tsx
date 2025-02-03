import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Separator } from "@radix-ui/react-separator"
import { Button } from "../ui/button"

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="">
        <Menu className="text-orange-500" />
      </SheetTrigger>

      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Welcome To Eats House</span>
        </SheetTitle>
        <Separator />

        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
