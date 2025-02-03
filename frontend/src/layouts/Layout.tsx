import Footer from "@/components/pages/Footer"
import Header from "@/components/pages/Header"
import Hero from "@/components/pages/Hero"

type Props = {
  children:React.ReactNode,
}
const Layout = ({children}:Props) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <Hero />

      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
