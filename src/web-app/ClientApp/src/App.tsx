import React from "react";
import { CenterContent } from "./Components/CenterContent/CenterContent";
import { ImageEditor } from "./Components/ImageEditor/ImageEditor";
import { AppLayout } from "./Components/Layout/AppLayout";

export const App = () => {

    return (
        <AppLayout>
            <CenterContent>
                <ImageEditor />
            </CenterContent>
        </AppLayout>
    );
}