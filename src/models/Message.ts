import Exchange from "./Exchange";
import Stock from "./Stock";

export default interface Message {
    text: string;
    userInput: boolean;
    options?: Exchange[] | Stock[];
}