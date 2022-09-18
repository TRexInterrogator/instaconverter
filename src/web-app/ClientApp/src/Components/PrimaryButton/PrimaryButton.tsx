import React, { CSSProperties, useEffect } from 'react';
import './PrimaryButton.css';



export interface IPrimaryButtonProps {
    onClicked?: () => void;
    style?: CSSProperties;
    disabled?: boolean;
    icon?: string;
    children?: any;
}



export const PrimaryButton = (props: IPrimaryButtonProps) => {

    const { onClicked, style, disabled, icon, children } = props;
    useEffect(() => {}, [ props ]);

    return (
        <button 
            disabled={disabled}
            className="primary-btn"
            style={style} 
            onClick={onClicked}>
                
                { icon &&
                    <span className="material-icons">
                        {icon}
                    </span>
                }

                { children }
        </button>
    );
};