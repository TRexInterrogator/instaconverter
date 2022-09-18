import React, {  CSSProperties, useEffect, useState } from "react";
import "./Dropdown.css";
import { DropdownItem } from "./DropdownItem";


export interface IDropdownOption {
    label: string | null;
    data?: any;
    key: number | string;
    icon?: string;
}


interface IDropdownProps {
    onChange?: (option: IDropdownOption) => void;
    options: IDropdownOption[];
    style?: CSSProperties;
    disabled?: boolean;
    label?: string;
    className?: string;
}


const OptionsAreEqual = (old_items: IDropdownOption[], new_items: IDropdownOption[]): boolean => {

    let are_equal = true;

    if (old_items.length === new_items.length) {
        const old_sorted = old_items.slice().sort();
        const new_sorted = new_items.slice().sort();
        are_equal = old_sorted.every((item, index) => { return item === new_sorted[index]});
    }
    else {
        are_equal = false;
    }

    return are_equal;
};


export const Dropdown = (props: IDropdownProps) => {

    const { style, className, label, disabled, options, onChange } = props;
    const [ selected_option, setSeletedOption ] = useState<IDropdownOption | undefined>();
    const [ show_options, setShowOptions ] = useState(false);
    const [ drop_options, setDropOptions ] = useState<IDropdownOption[]>([]);
    const [ drop_disabled, setDropDisabled ] = useState(disabled);


    useEffect(() => {;
        setDropDisabled(disabled);
        
        if (!OptionsAreEqual(drop_options, options)) {
            setDropOptions(options);

            if (options.length >= 1) setSeletedOption(options[0]);
            else setSeletedOption(undefined);
        }

    }, [ options, disabled, drop_options ]);


    const OnToggleSuggestionsClicked = () => {
        if (!drop_disabled) {
            setShowOptions(!show_options);
        }
    }

    const OnOptionSelected = (option: IDropdownOption) => {

        if (!drop_disabled) {
            setShowOptions(false);
            setSeletedOption(option);
            
            if (onChange) onChange(option);
        }
    }


    return (
        <div style={style} className={`dropdown-can ${className ? className : ""}`}>

            { label &&
                <p id="lbl">{label}</p>
            }


            <div className={drop_disabled ? "dropdown dropdown-disabled" : "dropdown"} onClick={OnToggleSuggestionsClicked}>
                <div>
                    { selected_option &&
                        <p>{selected_option.label}</p>
                    }
                    <span className="material-icons">expand_more</span>
                </div>
            </div>

            { show_options &&
                <div className="dropdown-options">
                    <div className="dropdown-flyout">
                        { drop_options.map(opt => {
                            return (
                                <DropdownItem 
                                    key={opt.key}
                                    option={opt} 
                                    onClick={OnOptionSelected} />
                            );
                        })
                        }
                    </div>
                </div>
            }
        </div>
    );
};