import Header from './components/Header';
import { Box, Button, Snackbar, TextField } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Header />
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <TextField
          label='コピーしたい文字列'
          variant='outlined'
          value={searchParams.get("text") || ""}
          onChange={(event) => {
            const text = event.target.value;
            if (text) {
              setSearchParams({ text });
            } else {
              setSearchParams({});
            }
          }}
        />
        <Box sx={{ marginTop: '10vw' }}>
          <Button
            variant='contained'
            onClick={() => {
              copyToClipboard(searchParams.get("text") || "");
              handleClick();
            }}
          >
            コピー
          </Button>
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          コピーしました！
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default App;
