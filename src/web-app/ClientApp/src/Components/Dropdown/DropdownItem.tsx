import React from "react";
import { IDropdownOption } from "./Dropdown";

interface IDropdownItemProps {
    option: IDropdownOption;
    onClick: (option: IDropdownOption) => void;
}


export const DropdownItem = (props: IDropdownItemProps) => {
    const { onClick, option } = props;

    return (
        <div 
            className="dropdown-option"
            onClick={e => onClick(option)}>

                { option.icon ?
                    <p id="icon-lbl">
                        <span className="material-icons">{option.icon}</span>
                        {option.label}
                    </p>
                    :
                    <p>{option.label}</p>
                }

                
        </div>
    );
}