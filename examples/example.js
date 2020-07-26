import { createTheme } from "../dist/index.es.js";

let date = new Date();

document.querySelector("#date").valueAsDate = date;

const themeObj = {
  temporaryThemes: [
    {
      name: "christmas",
      theme: {
        primary: "#003e1f",
        secondary: "#ba2d0b",
        error: "#01110a",
      },
      startDate: new Date("December 1"),
      endDate: new Date("December 26"),
    },

    {
      name: "valentines",
      theme: {
        primary: "#b23a48",
        secondary: "#8c2f39",
        error: "#fed0bb6",
      },
      startDate: new Date("February 1"),
      endDate: new Date("February 15"),
    },
    {
      name: "thanksgiving",
      theme: {
        primary: "#955e42",
        secondary: "#748e54",
        error: "#232020",
      },
      startDate: new Date("November 1"),

      endDate: new Date("November 25"),
    },
  ],
  defaultTheme: {
    primary: "#03312E",
    secondary: "#00B9AE",
    error: "#8E3B46",
  },
};

function updateColors() {
  const theme = createTheme({ ...themeObj, date });
  console.log(theme);
  ["primary", "secondary", "error"].forEach((opt) => {
    document.querySelector(`.${opt}`).style.background = theme[opt];
  });
}
function changeDate(e) {
  date = new Date(e.target.value);
  updateColors();
}

document.querySelector("#date").addEventListener("change", changeDate);

updateColors();
