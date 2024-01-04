import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Students from "./pages/Students";

import { QueryClient, QueryClientProvider } from "react-query";

import PageNotFound from "./pages/PageNotFound";


import StudentView from "./pages/StudentView";



import RegisterStudent from "./pages/RegisterStudent";

import { ToastContainer } from "react-toastify";


const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
 
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin/",
    element: <Students />,
  },
  {
    path: "/admin/students/register",
    element: <RegisterStudent />,
  },
  
  
  {
    path: "/admin/students/student-view/:id",
    element: <StudentView />,
  },
  
  {
    path: "/*",
    element: <PageNotFound />,
  },
]);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClic={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="dark"
      />
    </QueryClientProvider>
  </React.StrictMode>
);
