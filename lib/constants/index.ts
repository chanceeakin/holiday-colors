export type Theme = {
  primary: string;
  secondary: string;
  error: string;
  startDate?: Date;
  endDate?: Date;
};

const defaultTheme: Theme = {
  primary: "#03312E",
  secondary: "#00B9AE",
  error: "#8E3B46",
};

const christmas: Theme = {
  primary: "#003e1f",
  secondary: "#ba2d0b",
  error: "#01110a",
  startDate: new Date("December 1"),
  endDate: new Date("December 26"),
};

const valentines: Theme = {
  primary: "#b23a48",
  secondary: "#8c2f39",
  error: "#fed0bb6",
  startDate: new Date("February 1"),
  endDate: new Date("February 15"),
};

const thanksgiving: Theme = {
  primary: "#955e42",
  secondary: "#748e54",
  error: "#232020",
  startDate: new Date("November 1"),
  endDate: new Date("November 25"),
};

export default {
  defaultTheme,
  thanksgiving,
  christmas,
  valentines,
};
