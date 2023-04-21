import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homepage";
import Sidebar from "./components/sidebar";
import ProjectPage from "./pages/projects";
import AboutPage from "./pages/aboutpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Sidebar />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "projects",
                element: <ProjectPage />,
            },
            {
                path: "aboutme",
                element: <AboutPage />,
            }
        ],
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
