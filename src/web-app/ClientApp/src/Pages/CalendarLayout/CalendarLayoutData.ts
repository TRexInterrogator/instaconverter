import { IDropdownOption } from "../../Components/Dropdown/Dropdown";


export interface IDate {
    index: number;
    day: string;
    date_str: string;
};


export const MonthOptions: IDropdownOption[] = [
    { key: 1, label: "Jan", data: 1 },
    { key: 2, label: "Feb", data: 2 },
    { key: 3, label: "Mar", data: 3 },
    { key: 4, label: "Apr", data: 4 },
    { key: 5, label: "Mai", data: 5 },
    { key: 6, label: "Jun", data: 6 },
    { key: 7, label: "Jul", data: 7 },
    { key: 8, label: "Aug", data: 8 },
    { key: 9, label: "Sep", data: 9 },
    { key: 10, label: "Okt", data: 10 },
    { key: 11, label: "Nov", data: 11 },
    { key: 12, label: "Dez", data: 12 }
];


export const GenerateYearOptions = (): IDropdownOption[] => {

    const start_year = new Date().getFullYear();
    const options: IDropdownOption[] = [];

    for (let i = 0; i < 5; i++) {
        options.push({ key: i + 1, label: (start_year + i).toString(), data: start_year + i });
    }

    return options;
};


export const CalcMonthDates = (year: number, month: number): IDate[] => {

    const date_data: IDate[] = [];
    const start_date = new Date(year, month - 1, 1);
    const tmp_date = new Date(start_date);
    let counter = 0;
    
    while (start_date.getMonth() === tmp_date.getMonth()) {

        let day_str = "";

        switch (tmp_date.getDay()) {
            case 0:
                day_str = "SO";
                break;
            case 1:
                day_str = "MO";
                break;
            case 2:
                day_str = "DI";
                break;
            case 3:
                day_str = "MI";
                break;
            case 4:
                day_str = "DO";
                break;
            case 5:
                day_str = "FR";
                break;
            case 6: 
                day_str = "SA";
                break;
        }

        date_data.push({ index: counter, day: day_str, date_str: tmp_date.getDate().toString() });
        tmp_date.setDate(tmp_date.getDate() + 1);
        counter++;
    }

    return date_data;
};


export const LayoutOpts: IDropdownOption[] = [
    { key: 0, label: "A4 - Hochkant", data: 2480 },
    { key: 1, label: "A4 - Quer", data: 3508 },
    { key: 3, label: "A3 - Hochkant", data: 3508 },
    { key: 4, label: "A3 - Quer", data: 4961 }
];