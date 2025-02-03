import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "../ui/button"
import UsernameMenu from "./UsernameMenu"

const Main = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const handleLogin = async () => {
   console.log("object")
   await loginWithRedirect()
  }
  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (<UsernameMenu />):(    <Button
    onClick={handleLogin}
    variant="ghost"
    className="font-bold hover:text-orange-500 hover:bg-white"
    >
      Log In
    </Button>)}

    </span>

  )
}

export default Main
