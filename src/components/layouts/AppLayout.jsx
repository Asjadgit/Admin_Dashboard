import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import "./AppLayout.css";

const AppLayout = () => {
    return (
        <>
            <Header />
            <div className="layout-container">
                <SideBar />
                <main className="content">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
};

export default AppLayout;
