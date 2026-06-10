import { Interactor } from "../types/dom-interactor";
import { Messages } from "../types/messages";
import { randomNumLogic } from "../scripts/random-num-logic";
import { lotteryLogic } from "../scripts/lottery";
import { history } from "../types/lottery.types";

export function printLotteryResponse(): void {
  const userInput = Number(Interactor.getHTML("user_input").value);
  const responseElement = Interactor.getHTML("response");
  const randomNum = randomNumLogic();

  try {
    const lotteryResult = lotteryLogic(userInput, randomNum);

    history.push({
        userNumber: userInput,
        randomNumber: lotteryResult.randomNumber,
        result: lotteryResult.result
    });

    Interactor.printMessage(lotteryResult.result, responseElement);

  } catch (error) {

    const errorMessage = (error as Error).message;
    
    Interactor.printMessage(errorMessage, responseElement);
    
  }
}