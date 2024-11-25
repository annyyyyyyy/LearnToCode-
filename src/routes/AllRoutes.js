import { Route, Routes } from "react-router-dom";
import { HomePage, ProductList, ProductDetail, Login, Register, CartPage, OrderPage, DashbaordPage, PageNotFound } from "../pages";
import { ProtectedRoute } from './ProtectedRoute';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />

      <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
      <Route path="dashboard" element={<ProtectedRoute><DashbaordPage /></ProtectedRoute>} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}