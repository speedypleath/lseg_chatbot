import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import SmartToyIcon from '@mui/icons-material/SmartToy';

export default function TopBar() {
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                <SmartToyIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                LSEG chatbot
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
