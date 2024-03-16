import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
      primary: {
        main: '#1e2cfd'
      },
      action: {
        disabled: "#9a9a9a",
      }
    },
    components: {
      MuiListItem: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            margin: '5px',
            width: 'fit-content',
          }
        }
      },
      MuiList: {
        styleOverrides: {
          root: {
            display: 'flex',
            flexDirection: 'column',
          }
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            backgroundColor: 'white',
            borderRadius: '8px',
            margin: '5px',
            padding: '5px',
          }
        }
      },
      MuiListItemText: {
        styleOverrides: {
          root: {
            textAlign: 'center' 
          }
        }
      },
  }})
  