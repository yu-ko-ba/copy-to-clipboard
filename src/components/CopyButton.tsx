import { Button, Snackbar, Stack } from "@mui/material";
import React from "react";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CopyButton(props: any) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    props.onClick();
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>{props.children}</Button>
      <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          コピーしました！
        </Alert>
      </Snackbar>
    </>
  );
}
