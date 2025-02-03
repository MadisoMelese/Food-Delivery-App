import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "../ui/button"

const Logout = () => {
  const {logout} = useAuth0()
  const handleLogout = () => {
    console.log("Logged out ")
    logout()
  }
  return (
    <Button className="flex flex-1 font-bold bg-orange-500"
      onClick={handleLogout}
    >
      Log Out
    </Button>
  )
}

export default Logout
