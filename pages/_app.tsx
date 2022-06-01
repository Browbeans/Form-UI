import { HelloWorld } from "../src/Pages/HelloWorld";
import "../public/css/styles.css";
import React from "react";
function HomePage() {
    return (
        <React.StrictMode>
            <HelloWorld />
        </React.StrictMode>
    );
}

export default HomePage;
