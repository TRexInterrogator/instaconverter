import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Page1 } from "./Pages/Page1";
import { Page2 } from "./Pages/Page2";


export const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
            </Routes>           
        </BrowserRouter>
    );
}