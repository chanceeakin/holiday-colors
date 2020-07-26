import { theme } from "../lib/index";

describe("holiday colors", () => {
  it("creates a default theme", () => {
    expect(theme()).toBe(1);
  });
});
