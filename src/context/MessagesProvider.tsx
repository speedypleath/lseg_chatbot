import { MessageContext, MessageDispatchContext } from "./MessagesContext";
import { useReducer } from 'react';
import Exchange from '../models/Exchange';
import Message from '../models/Message';
import Stock from '../models/Stock';

export function MessagesProvider({ children }: { children: React.ReactNode }) {
    const [tasks, dispatch] = useReducer(dispatchAction, []);

    return (
        <MessageContext.Provider value={tasks}>
            <MessageDispatchContext.Provider value={dispatch}>
                {children}
            </MessageDispatchContext.Provider>
        </MessageContext.Provider>
    );
}

function selectExchange(messages: Message[], exchange: Exchange) {
    messages.push({ text: exchange.name, userInput: true })
    messages.push({ text: 'Please select a stock.', userInput: false, options: exchange.stocks })

    return messages
}

function selectStock(messages: Message[], stock: Stock) {
    messages.push({ text: stock.name, userInput: true })
    messages.push({ text: `Stock price of ${stock.name} is ${stock.price}`, userInput: false })

    return messages
}

function returnToMainMenu(messages: Message[]) {
    messages.push({ text: 'Main Menu', userInput: true })
    // second message contains the list of exchanges
    messages.push(messages[1])

    return messages
}

export interface Action {
    action: string;
    payload: Exchange | Stock | undefined | Message[];
}

function dispatchAction(messages: Message[], payload: Action): Message[] {
    switch (payload.action) {
        case 'initialise':
            return payload.payload as Message[];
        case 'home':
            return returnToMainMenu(messages);
        case 'select':
            return payload.payload && 'price' in payload.payload ? selectStock(messages, payload.payload as Stock) : selectExchange(messages, payload.payload as Exchange);
        case 'back':
            // append second to last message
            return [...messages, messages[messages.length - 3]];
        default:
            throw new Error('Invalid option');
    }
}