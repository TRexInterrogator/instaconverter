import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { Dropdown, IDropdownOption } from "../Dropdown/Dropdown";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import "./ImageEditor.css";
import { ImageBroders, ImageSizes } from "./ImageEditorOptions";


export const ImageEditor = () => {

    const _ref_file = useRef<HTMLInputElement>(null);
    const _ref_print = useRef<HTMLDivElement>(null);

    const [ img_data, setImgData ] = useState<string>();
    const [ img_filename, setImgFilename ] = useState<string>();
    const [ img_size, setImgSize ] = useState(1080);
    const [ img_border, setImgBorder ] = useState(3);

    


    const OnDownloadClicked = async () => {
        if (_ref_print && _ref_print.current && img_filename) {
            const element = _ref_print.current;
            const canvas = await html2canvas(element, { allowTaint: true, useCORS: true });
            const data = canvas.toDataURL('image/jpg');
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


    const HandleImageSizeChanged = (option: IDropdownOption) => {
        if (option.data) {
            setImgSize(option.data);
        }
    };

    const HandleMarginChanged = (option: IDropdownOption) => {
        if (option.data) {
            setImgBorder(option.data);
        }
    };

    const HandleImageDataChanged = () => {
        if (_ref_file && _ref_file.current) {
            if (_ref_file.current.files) {
                const file = _ref_file.current.files[0];
                const obj_url = URL.createObjectURL(file);
                setImgData(obj_url);
                setImgFilename(file.name);
            }
        }
    };


    return (
        <div>
            <div>
                <div>
                    <input 
                        ref={_ref_file}
                        type="file" 
                        accept="image/*" 
                        onChange={HandleImageDataChanged} />
                </div>

                <div className="image-editor-options">
                    <div>
                        <Dropdown 
                            label="Image size:"
                            onChange={HandleImageSizeChanged}
                            options={ImageSizes} />

                        <Dropdown 
                            style={{ marginLeft: "15px" }}
                            label="Border size:"
                            onChange={HandleMarginChanged}
                            options={ImageBroders} />
                    </div>

                    { img_data &&
                        <div>
                            <PrimaryButton 
                                onClicked={OnDownloadClicked}
                                icon="file_download">
                                    Download
                            </PrimaryButton>
                        </div>
                    }

                </div>
            </div>

            { img_data &&
                <div 
                    ref={_ref_print}
                    style={{ width: `${img_size}px`, height: `${img_size}px` }} 
                    className="image-editor-img">
                        <div style={{ padding: `${img_border}%` }}>
                            <img alt="insta" src={img_data} />
                        </div>
                </div>
            }

            <br />
            <br />
        </div>
    );
}