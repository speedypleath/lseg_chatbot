import { Box, InputAdornment, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default function Footer() {
  return (
    <Box display="flex" flexDirection="row" bgcolor='#eeeeee' >
      <TextField fullWidth disabled value='Please pick an option.'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SendIcon color='disabled' />
            </InputAdornment>
          ),
        }} />
    </Box>
  )
}