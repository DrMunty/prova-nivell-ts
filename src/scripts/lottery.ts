import type { LotteryResponse } from "../types/lottery.types";
import type { LotteryHistoryItem } from "../types/lottery.types";

const history: LotteryHistoryItem[] = [];

function lotteryResponseLogic(): string {
    let randomNum = randomNumLogic();
    const userInput = document.getElementById('user_input') as HTMLInputElement | null;
    const valorIngresado = Number(userInput?.value);
    let responseElement = document.getElementById("response") as HTMLElement;
    let errorMessage: string = "Por favor introduce un número válido.";
    let succesMessage: string = `Correcte, el teu número ${userInput} coincideix amb el de la loteria ${randomNum}!`
    let tryAgainMessage: string = `El teu número ${userInput} no coincideix amb el de la loteria ${randomNum}, torna a intentar-ho!`
    
    if (valorIngresado < 1 || valorIngresado > 10 || !Number(valorIngresado)){
        return errorMessage
    } else if (valorIngresado === randomNum) {
        console.log(valorIngresado, "input")
        const newLotteryResponse: LotteryResponse = {
            success: true,
	        result: succesMessage,
	        randomNumber: randomNum
        }

        const newLotteryHistoryItem: LotteryHistoryItem = {
            userNumber: valorIngresado,
            randomNumber: randomNum,
            result: succesMessage
        }

        history.push(newLotteryHistoryItem);
        return responseElement.innerHTML = `${newLotteryResponse}`

    } else {

         const newLotteryResponse: LotteryResponse = {
            success: false,
	        result: tryAgainMessage,
	        randomNumber: randomNum
        }

        const newLotteryHistoryItem: LotteryHistoryItem = {
            userNumber: valorIngresado,
            randomNumber: randomNum,
            result: tryAgainMessage
        }

        history.push(newLotteryHistoryItem);
        return responseElement.innerHTML = `${newLotteryResponse}`;

    }

}

function seeHistory(){
    let responseElement = document.getElementById("response") as HTMLElement;
    return responseElement.innerHTML = history.join('')
}

let button = document.getElementById("lottery")
button?.addEventListener('click', () => lotteryResponseLogic())
