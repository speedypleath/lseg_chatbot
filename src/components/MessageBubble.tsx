import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Message from "../models/Message";
import { Menu } from "../models/Menu";
import { useContext } from "react";
import { MessageDispatchContext } from "../context/MessagesContext";
import Exchange from "../models/Exchange";
import Stock from "../models/Stock";

export default function MessageBubble(message: Message, key: number, homeButton: boolean, disabled: boolean, setMenu: React.Dispatch<React.SetStateAction<Menu>>) {
  const buttonClick = useContext(MessageDispatchContext);

  function onButtonClick(e: React.MouseEvent, action: string, payload: Exchange | Stock | undefined) {
    e.stopPropagation();
    let newMenu: Menu;

    if (action === 'home') {
      newMenu = Menu.MainMenu;
    } else if (action === 'back') {
      newMenu = Menu.StockMenu;
    } else if (payload && 'stocks' in payload) {
      newMenu = Menu.StockMenu;
    } else {
      newMenu = Menu.LastMenu;
    }

    setMenu(newMenu);
    buttonClick && buttonClick({ action, payload });
  }

  // Currying the function to pass the option to the event handler
  const handleOnClick = (action: string, payload: Exchange | Stock | undefined = undefined) => {
    return (e: any) => onButtonClick(e, action, payload);
  }

  return (
    // backgroundColor and alignSelf are determined by the sender of the message
    <ListItem key={key} style={{
      backgroundColor: message.userInput ? '#f2f2f2' : '#e9f6ff',
      alignSelf: message.userInput ? 'flex-end' : 'flex-start',
      flexDirection: 'column',
    }
    }>
      <ListItemText primary={message.text} sx={{ textAlign: 'left', alignSelf: 'start' }} />
      <Box marginX='-10px' alignSelf='stretch' minWidth={message.options ? '500px' : '0'}>
        {message.options && message.options.map((option, index) => (
          <ListItemButton disabled={disabled} onClick={handleOnClick('select', option)}
            // Overriding the disabled style
            sx={{
              '&.Mui-disabled': {
                opacity: 1
              }
            }}
            key={index}>
            <ListItemText primary={option.name} />
          </ListItemButton>
        ))}
        {(homeButton && !message.options) &&
          <ListItemButton onClick={handleOnClick('back')}>
            <ListItemText primary="Go back" />
          </ListItemButton>

        }
        {
          homeButton &&
          <ListItemButton onClick={handleOnClick('home')}>
            <ListItemText primary="Main Menu" />
          </ListItemButton>
        }
      </Box>
    </ListItem>
  )
}