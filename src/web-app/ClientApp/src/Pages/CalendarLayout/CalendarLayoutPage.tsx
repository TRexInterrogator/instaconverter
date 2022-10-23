import React, { useRef, useState } from "react";
import { CenterContent } from "../../Components/CenterContent/CenterContent";
import { Dropdown, IDropdownOption } from "../../Components/Dropdown/Dropdown";
import { CalcMonthDates, GenerateYearOptions, IDate, LayoutOpts, MonthOptions } from "./CalendarLayoutData";
import "./CalendarLayout.css";
import { PrimaryButton } from "../../Components/PrimaryButton/PrimaryButton";
import html2canvas from "html2canvas";
import { ColorPicker } from "../../Components/ColorPicker/ColorPicker";


export const CalendarLayoutPage = () => {

    const _ref_print = useRef<HTMLDivElement>(null);

    const [ year_opts ] = useState(GenerateYearOptions());
    const [ month_opts ] = useState(MonthOptions);
    const [ layout_opts ] = useState(LayoutOpts);

    const [ sel_year, setSelYear ] = useState(new Date().getFullYear());
    const [ sel_month, setSelMonth ] = useState(1);
    const [ sel_bg, setSelBG ] = useState("#000");
    const [ layout_data, setLayoutData ] = useState(CalcMonthDates(new Date().getFullYear(), 1));
    const [ sel_layout, setSelLayout ] = useState(LayoutOpts[0].data as number);
    const [ img_filename, setImgFilename ] = useState<string>(`${new Date().getFullYear()}-1-layout.png`);

    const HandleYearChanged = (opt: IDropdownOption) => {
        setSelYear(opt.data);
        setLayoutData(CalcMonthDates(opt.data, sel_month));
        setImgFilename(`${opt.data}-${sel_month}-layout.png`);
    };

    const HandleMonthChanged = (opt: IDropdownOption) => {
        setSelMonth(opt.data);
        setLayoutData(CalcMonthDates(sel_year, opt.data));
        setImgFilename(`${sel_year}-${opt.data}-layout.png`);
    };

    const HandleOnSave = async () => {
        if (_ref_print && _ref_print.current && img_filename) {
            const element = _ref_print.current;
            const canvas = await html2canvas(element, { allowTaint: true, useCORS: true });
            const data = canvas.toDataURL('image/png');
            const link = document.createElement('a');

            if (typeof link.download === 'string') {
                link.href = data;
                link.download = img_filename;
        
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } 
            else {
                window.open(data);
            }
        }     
    };


    return (
        <div>
            <CenterContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Dropdown 
                        label="Year:"
                        onChange={HandleYearChanged}
                        options={year_opts} />

                    <Dropdown 
                        style={{ marginLeft: "10px" }}
                        label="Month:"
                        onChange={HandleMonthChanged}
                        options={month_opts} />

                    <Dropdown 
                        style={{ marginLeft: "10px" }}
                        label="Layout:"
                        onChange={opt => setSelLayout(opt.data)}
                        options={layout_opts} />

                    <ColorPicker 
                        default_value="#000000"
                        onChange={v => setSelBG(v)}
                        style={{ marginLeft: "10px" }} 
                        label="BG-Color:" />
                </div>
            </CenterContent>
            
            <br />
            <br />

            <div ref={_ref_print} style={{ width: `${sel_layout}px` }}>
                <div className="cal-month-layout" style={{ backgroundColor: `${sel_bg}` }}>
                    { layout_data.map(d => {
                        return (
                            <div key={d.index} className="cal-month-layout-date">
                                { d.day === "SO" ?
                                    <>
                                        <h3 style={{ color: "#db1818" }}>{d.day}</h3>
                                        <p style={{ color: "#db1818" }}>{d.date_str}</p>
                                    </>
                                    :
                                    <>
                                        <h3>{d.day}</h3>
                                        <p>{d.date_str}</p>
                                    </>
                                }

                            </div>
                        );
                    })
                    }
                </div>
            </div>

            <br />
            <br />
            
            <CenterContent>
                <PrimaryButton 
                    icon="download"
                    onClicked={HandleOnSave}>
                        Save Layout
                </PrimaryButton>
            </CenterContent>
        </div>
    );
};