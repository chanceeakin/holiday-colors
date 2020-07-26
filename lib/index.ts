import themes, { Theme } from "./constants/index";

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

// take an object with a theme, a date to start and a date to end.

export const createTheme = (config: ThemeCreation): Theme => {
  const { date, defaultTheme, temporaryThemes } = config;
  const usedDate = date ? date : new Date();
  for (let i = 0; i < temporaryThemes.length; i++) {
    const { startDate, endDate, theme } = temporaryThemes[i];
    if (
      usedDate.getMonth() === startDate.getMonth() &&
      usedDate.getDate() >= startDate.getDate() &&
      usedDate.getDate() < endDate.getDate()
    ) {
      return theme;
    }
  }
  return defaultTheme;
};
