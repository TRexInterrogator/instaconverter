import { IDropdownOption } from "../Dropdown/Dropdown";

export const ImageSizes: IDropdownOption[] = [
    { key: 0, label: "MAX (1080x1080)", data: 1080 },
    { key: 1, label: "MED (600x600)", data: 600 },
    { key: 2, label: "MIN (400x400)", data: 400 }
];

export const ImageBroders: IDropdownOption[] = [
    { key: 1, label: "3%", data: 3 },
    { key: 2, label: "4%", data: 4 },
    { key: 3, label: "5%", data: 5 }
];