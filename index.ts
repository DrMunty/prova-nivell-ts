import { Interactor } from "./src/types/dom-interactor";
import { seeHistory } from "./src/scripts/see-atempts";
import { printLotteryResponse } from "./src/scripts/lottery-ui";

Interactor.getHTML("play_lottery").addEventListener("click", () => {
  printLotteryResponse(); 
});

Interactor.getHTML("see_attempts").addEventListener("click", () => {
  seeHistory();
});