import { history } from "../types/lottery.types";
import { Interactor } from "../types/dom-interactor";
import { Messages } from "../types/messages";

export function seeHistory(): void {
    const responseElement = Interactor.getHTML("response")
    if (history.length === 0){
        Interactor.printMessage(Messages.emptyArrayMessage(), responseElement);
    } else {
        Interactor.printMessage(`<ol><li>${history.map(result => result.result).join('</li><li>')}</li></ol>`, responseElement);
    }
}