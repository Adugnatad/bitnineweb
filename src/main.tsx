import ReactDOM from "react-dom/client";
import "./index.css";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Header from "./components/Header.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import Usecases from "./pages/Usecases.tsx";
import Services from "./pages/Services.tsx";
import "./App.css";
import Resources from "./pages/Resources.tsx";
import Blog from "./pages/Blog.tsx";
import Company from "./pages/Company.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/usecases" element={<Usecases />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </ChakraProvider>
);
