import type { LotteryResponse } from "../types/lottery.types";
import type { LotteryHistoryItem } from "../types/lottery.types";

export function randomNumLogic(): number {
   return Math.floor(Math.random() * 10) + 1;
}

const history: LotteryHistoryItem[] = [];

export function lotteryResponseLogic (): string {
    let randomNum = randomNumLogic();
    let userInput = Number(document.getElementById("user_input"));
    let responseElement = document.getElementById("response") as HTMLElement;
    let errorMessage: string = "Por favor introduce un número válido.";
    let succesMessage: string = `Correcte, el teu número ${userInput} coincideix amb el de la loteria ${randomNumLogic}!`
    let tryAgainMessage: string = `El teu número ${userInput} no coincideix amb el de la loteria ${randomNumLogic}, torna a intentar-ho!`
    

    if (userInput < 1 || userInput > 10 || isNaN(userInput)){
        return errorMessage
    } else if (userInput === randomNum) {

        const newLotteryResponse: LotteryResponse = {
            success: true,
	        result: succesMessage,
	        randomNumber: randomNum
        }

        const newLotteryHistoryItem: LotteryHistoryItem = {
            userNumber: userInput,
            randomNumber: randomNum,
            result: succesMessage
        }

        history.push(newLotteryHistoryItem);
        return responseElement.innerHTML = `${newLotteryResponse}`

    } else {

         const newLotteryResponse: LotteryResponse = {
            success: false,
	        result: succesMessage,
	        randomNumber: randomNum
        }

        const newLotteryHistoryItem: LotteryHistoryItem = {
            userNumber: userInput,
            randomNumber: randomNum,
            result: tryAgainMessage
        }

        history.push(newLotteryHistoryItem);
        return responseElement.innerHTML = `${newLotteryResponse}`;

    }
}

