import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "../ui/button"

const Main = () => {
  const { loginWithRedirect } = useAuth0()
  const handleLogin = async () => {
   console.log("object")
   await loginWithRedirect()
  }
  return (
    <Button
    onClick={handleLogin}
    variant="ghost"
    className="font-bold hover:text-orange-500 hover:bg-white"
    >
      Log In
    </Button>
  )
}

export default Main
