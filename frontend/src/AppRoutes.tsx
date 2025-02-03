import { Navigate, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/user" element={<div>User</div>} />
      <Route path="*" element={<Navigate to={"/"}/>} />
    </Routes>
  )
}

export default AppRoutes
