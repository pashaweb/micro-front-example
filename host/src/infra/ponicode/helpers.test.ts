/** @jest-environment jsdom */
import { DataAttr, genearateHtmlTag } from "../helpers"
describe("genearateHtmlTag", () => {
    it("should generate a html tag", () => {
        const tag = "div";
        const clasNames = ["class1", "class2"];
        const datAttr:DataAttr = { key: "key", val: "val" };
        const element = genearateHtmlTag(tag, clasNames, datAttr);
        expect(element.tagName).toBe(tag.toUpperCase());
        expect(element.classList.contains(clasNames[0])).toBe(true);
        expect(element.classList.contains(clasNames[1])).toBe(true);
        expect(element.dataset[datAttr.key]).toBe(datAttr.val);
    });

    it("should generate a html tag with no class", () => {  
        const tag = "div";
        const clasNames:string[] = [];
        const datAttr:DataAttr = { key: "key", val: "val" };
        const element = genearateHtmlTag(tag, clasNames, datAttr);
        expect(element.tagName).toBe(tag.toUpperCase());
        expect(element.classList.length).toBe(0);
        expect(element.dataset[datAttr.key]).toBe(datAttr.val);

    });

    it("should generate a html tag with no data attribute", () => {
        const tag = "div";
        const clasNames = ["class1", "class2"];
        const datAttr = { key: "", val: "" };
        const element = genearateHtmlTag(tag, clasNames, datAttr);
        expect(element.tagName).toBe(tag.toUpperCase());
        expect(element.classList.contains(clasNames[0])).toBe(true);
        expect(element.classList.contains(clasNames[1])).toBe(true);
        expect(element.dataset[datAttr.key]).toBe(undefined);
    });

    it("should generate a html tag with no class and no data attribute", () => {
        const tag = "div";
       
        const element = genearateHtmlTag(tag, [], null);
        expect(element.tagName).toBe(tag.toUpperCase());
        expect(element.classList.length).toBe(0);
        expect(JSON.stringify(element.dataset)).toEqual('{}');
    }
    );

})
