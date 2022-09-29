/** @jest-environment jsdom */
import { genearateHtmlTag } from "./helpers";

describe("genearateHtmlTag", () => {
    it("should return a div element with class 'image'", () => {
        const element = genearateHtmlTag("DIV", ["image"], null);
        expect(element.tagName).toBe("DIV");
        expect(element.classList.contains("image")).toBe(true);
    });
    it("should return a div element with class 'image' and data attribute", () => {
        const element = genearateHtmlTag("DIV", ["image"], [{ "id": "test" }]);
        expect(element.tagName).toBe("DIV");
        expect(element.classList.contains("image")).toBe(true);
        expect(element.id).toBe("test");
    });
    it("should return a div element with class 'image' and data attribute", () => {
        const element = genearateHtmlTag("DIV", ["image"], [{ "data-test": "test" }]);
        expect(element.tagName).toBe("DIV");
        expect(element.classList.contains("image")).toBe(true);
        expect(element.dataset["test"]).toBe("test");
    })
});