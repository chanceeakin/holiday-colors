"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
exports.createTheme = function (e) {
  for (
    var t = e.date,
      r = e.defaultTheme,
      a = e.temporaryThemes,
      n = t || new Date(),
      o = 0;
    o < a.length;
    o++
  ) {
    var g = a[o],
      h = g.startDate,
      s = g.endDate,
      u = g.theme;
    if (
      n.getMonth() === h.getMonth() &&
      n.getDate() >= h.getDate() &&
      n.getDate() < s.getDate()
    )
      return u;
  }
  return r;
};
