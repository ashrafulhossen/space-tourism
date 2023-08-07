import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main.jsx";
import Crew from "./Page/Crew.jsx";
import Destination from "./Page/Destination.jsx";
import Home from "./Page/Home.jsx";
import Technology from "./Page/Technology.jsx";
import "./index.scss";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/destination", element: <Destination /> },
			{ path: "/crew", element: <Crew /> },
			{ path: "/technology", element: <Technology /> }
		]
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
