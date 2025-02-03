import { CircleUserRound, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Separator } from "@radix-ui/react-separator"
import { useAuth0 } from "@auth0/auth0-react"
import Login from "./Login"
import Logout from "./Logout"

const MobileNav = () => {
  const { isAuthenticated, user, } = useAuth0()

  return (
    <Sheet>
      <SheetTrigger className="">
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ?
            (<span className="flex items-center font-bold gap-2">
              <CircleUserRound
                className="text-orange-500"
              />
              {user?.email}
            </span>) :
            (<span>Welcome To Eats House</span>)}

        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          {!isAuthenticated ? <Login /> : <Logout />}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
