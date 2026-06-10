export class Interactor {
    constructor(){}

    static getHTML(id: string) {return document.getElementById(id) as HTMLInputElement}

    static printMessage (message: string, element: HTMLInputElement) {return element.innerHTML = message}
}