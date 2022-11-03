import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Container from "./layout/Container"
import Header from "./layout/Header"
import Home from "./home"
import Employee from "./employee"
import Footer from "./layout/Footer"
import Error from "./error/Error"

export default function App() {

  return (
    <BrowserRouter>
      <Container>
        <Header />
            <Routes>
              <Route path="/" element={<Navigate replace to="/home"></Navigate>} />
              <Route path="/home" element={<Home />} />
              <Route path="/employee-list" element={<Employee />} />
              <Route path="*" element={<Error />} />
            </Routes>
        <Footer />
      </Container>
  </BrowserRouter>
  ) 
}




