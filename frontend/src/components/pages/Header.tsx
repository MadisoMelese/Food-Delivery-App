import { Link } from "react-router-dom"
import MobileNav from "./MobileNav"
import Main from "./Main"

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}
          className="text-3xl font-bold text-orange-500 tracking-tight"
        >FoodEats.com</Link>
        <div className="hidden md:block">
          <Main />
        </div>

        {/* //Mobile view */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  )
}

export default Header
