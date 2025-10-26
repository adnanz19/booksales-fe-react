import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PublicLayout() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
}