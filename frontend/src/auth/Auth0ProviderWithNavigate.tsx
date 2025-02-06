// import { useCreateMyUser } from "@/api/MyUserApi";
import {  Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
type Props = {
  children: React.ReactNode;
};
const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DAMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("unable to connect")
  }
  const onRedirectCallback = () => {
    navigate("/auth-callback")
    // console.log("User Redirect", user)
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate
