
export interface Attr {
    [key: string]: string;
}

export function genearateHtmlTag(tag: string = 'DIV', clasNames: string[] = [], atributes: Attr[] | null = []): HTMLElement {
    const element = document.createElement(tag);
    if (clasNames && clasNames.length > 0) {
        element.classList.add(...clasNames);
    }
    if (atributes && atributes.length > 0) {
        for (const attr of atributes) {
            for (const key in attr) {
                if (attr.hasOwnProperty(key)) {
                    element.setAttribute(key, attr[key]);
                }
            }
        }
    }
    return element;
}
