import React from "react";
import { AppLayout } from "./Components/Layout/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InstaLayoutPage } from "./Pages/InstaLayout/InstaLayoutPage";
import { CalendarLayoutPage } from "./Pages/CalendarLayout/CalendarLayoutPage";
 
export const ROUTE = process.env.NODE_ENV === "development" ? "" : process.env.REACT_APP_ROUTE;

export const App = () => {
    return (
        <BrowserRouter>
            <AppLayout>
                <Routes>
                    <Route path={`${ROUTE}`} element={<InstaLayoutPage />} />       
                    <Route path={`${ROUTE}/calendar`} element={<CalendarLayoutPage />} />             
                </Routes>
            </AppLayout>
        </BrowserRouter>
    );
}