import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>Lucide React</Layout>} />
      <Route path="/user" element={<div>User</div>} />
      <Route path="*" element={<Navigate to={"/"}/>} />
    </Routes>
  )
}

export default AppRoutes
