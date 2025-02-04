import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

function injectReactApp() {
	const rootDiv = document.createElement("div");
	rootDiv.id = "react-widget-root";
	document.body.appendChild(rootDiv);

	ReactDOM.createRoot(rootDiv).render(React.createElement(App));
}

injectReactApp();
