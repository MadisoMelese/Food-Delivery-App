import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "../ui/button"


const Login = () => {
  const { loginWithRedirect } = useAuth0()
  const handleLogin = async ()=>{
    await loginWithRedirect()
  }
  return (
<Button
          onClick={handleLogin}
          className="flex-1 font-bold bg-orange-500">Log In</Button>
  )
}

export default Login
