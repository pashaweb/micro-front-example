export interface DataAttr {
    [key: string]: string;
}

export function genearateHtmlTag(tag: string = 'DIV', clasNames: string[] = [], datAttr: DataAttr | null): HTMLElement {
    const element = document.createElement(tag);
    if (clasNames && clasNames.length > 0) {
        element.classList.add(...clasNames);
    }
    if (datAttr && datAttr.key && datAttr.val) {
        element.dataset[datAttr.key] = datAttr.val;
    }
    return element;
    //return  `<${tag} class="${clasNames.join(' ')}" data-${datAttr.key}="${datAttr.val}"></${tag}>`;
}
