import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet"

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>

      <SheetContent>
        <SheetTitle>
          <span>Welcome</span>
        </SheetTitle>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
