import { Theme } from "./constants/index";
interface TemporaryTheme {
    startDate: Date;
    endDate: Date;
    theme: any;
    name?: string;
}
interface ThemeCreation {
    defaultTheme: any;
    temporaryThemes: TemporaryTheme[];
    date?: Date;
}
export declare const createTheme: (config: ThemeCreation) => Theme;
export {};
