import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AppLayout from "./layouts/AppLayout";

const Dashboard = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
            ]
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
        },
        
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Dashboard