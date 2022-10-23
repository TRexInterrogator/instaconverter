import React, { ChangeEvent, CSSProperties, useEffect, useState } from "react";
import "./ColorPicker.css";


interface IColorPickerProps {
    label?: string;
    onChange?: (new_color: string) => void;
    default_value?: string;
    style?: CSSProperties;
    disabled?: boolean;
}



export const ColorPicker = (props: IColorPickerProps) => {
    const { label, style, onChange, default_value, disabled } = props;
    const [ color_value, setColorValue ] = useState(default_value);
    const [ is_disabled, setDisabled ] = useState(disabled);

    useEffect(() => {
        setDisabled(disabled);
        setColorValue(default_value);
    }, [ disabled, default_value ]);


    const OnColorChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setColorValue(e.target.value);
        if (onChange) onChange(e.target.value);
    };

    const OnResetClicked = () => {
        const reset_val = default_value ? default_value : "#ffffff";
        setColorValue(reset_val);
        if (onChange) onChange(reset_val);
    };


    return (
        <div style={style}>

            { label &&
                <p className="color-picker-lbl">{label}</p>
            }

            <div className="color-picker-container">
                <input 
                    disabled={is_disabled}
                    value={color_value}
                    onChange={e => OnColorChanged(e)}
                    type="color" />

                <p onClick={OnResetClicked}>Reset</p>
            </div>
        </div>
    );
}