import React from 'react';
import "./CenterContent.css";


interface ICenterContentProps {
    children?: any;
}

export const CenterContent = (props: ICenterContentProps) => {
    return (
        <div className="center-content center-content-fade">
            { props.children }
        </div>
    );
}