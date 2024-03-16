import { Dispatch, createContext } from "react";
import Message from "../models/Message";
import { Action } from "./MessagesProvider";

export const MessageContext = createContext<Message[]>([]);
export const MessageDispatchContext = createContext<Dispatch<Action>>({} as Dispatch<Action>);