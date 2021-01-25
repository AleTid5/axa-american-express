import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import IconAlert from "../../../../assets/icons/ico-alert.png";
import styles from "./styles";

export default function UploadErrorMessage({
  open,
  handleClose,
  fileName,
  fileErrors,
}) {
  const classes = styles();

  return (
    <Dialog
      fullWidth
      maxWidth="xl"
      open={open}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogContent>
        <div className={classes.iconContainer}>
          <img src={IconAlert} alt="Alert icon" className={classes.icon} />
        </div>
        <div className={classes.title}>Formulario con datos no válidos</div>
        <div className={classes.fileName}>{fileName}</div>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                classes={{ root: classes.tableCellRoot }}
                className={classes.tableCellHead}
                style={{ width: "15%" }}
              >
                Línea
              </TableCell>
              <TableCell
                classes={{ root: classes.tableCellRoot }}
                className={classes.tableCellHead}
                style={{ width: "25%" }}
              >
                Columna
              </TableCell>
              <TableCell
                classes={{ root: classes.tableCellRoot }}
                className={classes.tableCellHead}
              >
                Mensaje
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.whiteBackground}>
            {fileErrors.map(({ line, column, message }, key) => (
              <TableRow key={key}>
                <TableCell
                  classes={{ root: classes.tableCellRoot }}
                  className={classes.tableCellHead}
                >
                  {line}
                </TableCell>
                <TableCell
                  classes={{ root: classes.tableCellRoot }}
                  className={classes.tableCellHead}
                >
                  {column}
                </TableCell>
                <TableCell
                  classes={{ root: classes.tableCellRoot }}
                  className={classes.tableCellHead}
                >
                  {message}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.subtitle}>
          Aplique las correcciones donde corresponda y vuelva a cargar el
          archivo.
        </div>
        <div className={classes.centerAlign}>
          <Button
            variant="contained"
            size="large"
            className={classes.button}
            onClick={handleClose}
          >
            Aceptar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
