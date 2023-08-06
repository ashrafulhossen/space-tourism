import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main.jsx";
import "./index.scss";

const router = createBrowserRouter([
	{ path: "/", element: <Main />, children: [] }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
