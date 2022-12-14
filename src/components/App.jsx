import { BrowserRouter, Routes, Route } from "react-router-dom"
import Container from "./layout/Container"
import Header from "./layout/Header"
import Home from "./home"
import Employee from "./employee"
import Error from "./error/Error"

export default function App() {

  return (
    <BrowserRouter>
      <Container>
        <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employee-list" element={<Employee />} />
              <Route path="*" element={<Error />} />
            </Routes>
      </Container>
  </BrowserRouter>
  ) 
}




