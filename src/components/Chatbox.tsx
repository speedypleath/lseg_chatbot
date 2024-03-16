import { Box, List } from "@mui/material";
import Message from "../models/Message";
import MessageBubble from "./MessageBubble";
import { useContext, useState } from "react";
import { MessageContext, MessageDispatchContext } from "../context/MessagesContext";
import { Menu } from "../models/Menu";
import { useEffect } from "react";
import loadJson from "../utils/loadJson";

export default function Chatbox() {
    const [menu, setMenu] = useState<Menu>(Menu.MainMenu);
    const messages = useContext(MessageContext);
    const dispatch = useContext(MessageDispatchContext);

    useEffect(() => {
        loadJson().then((data) => {
            const exchanges = data.map((exchange: any) => {
                return {
                    name: exchange.stockExchange,
                    stocks: exchange.topStocks.map((stock: any) => {
                        return {
                            name: stock.stockName,
                            price: stock.price,
                        }
                    })
                }
            });

            // initialise the chat with the list of exchanges
            dispatch({
                action: 'initialise', payload: [
                    { text: "Hello! Welcome to LSEG. I'm here to help you.", userInput: false },
                    { text: "Please select a Stock Exchange.", userInput: false, options: exchanges }
                ]
            });
        });
    }, [dispatch])

    return (
        <Box style={{ overflow: 'auto' }} alignSelf='stretch' flex={1} position='relative'>
            <List>
                {messages.map((message: Message, index) => MessageBubble(message,
                    index,
                    menu !== Menu.MainMenu && index === messages.length - 1,
                    index === messages.length - 1 ? false : true,
                    setMenu
                ))}
            </List>
        </Box>
    )
}