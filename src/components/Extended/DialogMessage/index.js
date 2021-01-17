import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Typography,
} from "@material-ui/core";
import styles from "./styles";
import "../styles.scss";

export default function DialogMessage({
  className,
  title,
  actionTitle,
  dialogTitle,
  dialogContent,
  buttons = [
    { label: "No", action: null },
    { label: "Yes", action: null },
  ],
}) {
  const [open, setOpen] = React.useState(false);
  const classes = styles();

  return (
    <div className={className}>
      {title && <Typography className={classes.title}>{title}</Typography>}
      <FormControl fullWidth variant="outlined" className={classes.formControl}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setOpen(true)}
        >
          {actionTitle}
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-content"
        >
          {dialogTitle && (
            <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
          )}
          <DialogContent>
            <DialogContentText id="alert-dialog-content">
              {dialogContent}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {buttons.map(({ label, action }, key) => (
              <Button
                key={key}
                onClick={action || (() => setOpen(false))}
                color="primary"
                autoFocus
              >
                {label}
              </Button>
            ))}
          </DialogActions>
        </Dialog>
      </FormControl>
    </div>
  );
}
