import Stock from "./Stock";

export default interface Exchange {
    name: string;
    stocks: Stock[];
}