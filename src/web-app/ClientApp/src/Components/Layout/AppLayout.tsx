import React, { ReactNode } from "react";
import "./AppLayout.css";


interface IAppLayoutProps {
    children?: ReactNode;
}

export const AppLayout = (props: IAppLayoutProps) => {

    const { children } = props;

    return (
        <div className="app-layout">
            <div className="app-layout-head">
                <h1>Insta Square Converter</h1>
            </div>
            <div className="app-layout-content">
                { children }
            </div>
        </div>
    );
}