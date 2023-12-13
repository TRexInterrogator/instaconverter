import React from "react";
import { AppLayout } from "./Components/Layout/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InstaLayoutPage } from "./Pages/InstaLayout/InstaLayoutPage";
import { CalendarLayoutPage } from "./Pages/CalendarLayout/CalendarLayoutPage";

export const App = () => {
    return (
        <BrowserRouter>
            <AppLayout>
                <Routes>
                    <Route path={"/"} element={<InstaLayoutPage />} />       
                    <Route path={"/calendar"} element={<CalendarLayoutPage />} />             
                </Routes>
            </AppLayout>
        </BrowserRouter>
    );
}