import React, { useState } from "react";
import {
  Divider,
  Link,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import useScreenResizing from "screen-resizing";
import styles from "./styles";

export default function FilesTable({
  className,
  files,
  title,
  backgroundWhite = true,
}) {
  const [filesPerPage, setFilesPerPage] = useState(10);
  const { isScreen } = useScreenResizing();
  const classes = styles();

  return (
    <div className={className}>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <TableContainer component={Paper} className={classes.tableContainerRoot}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCellHead}>Archivo</TableCell>
              <TableCell className={classes.tableCellHead}>Lote</TableCell>
              <TableCell className={classes.tableCellHead}>
                Fecha de importación
              </TableCell>
              <TableCell className={classes.tableCellHead}>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={backgroundWhite && classes.whiteBackground}>
            {files.map(({ name }, key) => (
              <TableRow key={key}>
                <TableCell className={classes.tableCellRow}>{name}</TableCell>
                <TableCell className={classes.tableCellRow}>xxxxxx</TableCell>
                <TableCell className={classes.tableCellRow}>
                  xx/xx/xxxx
                </TableCell>
                <TableCell className={classes.tableCellLinkRow}>
                  <Link href="#" className={classes.link}>
                    Ver Certificados
                  </Link>
                  {isScreen ? " | " : <br />}
                  <Link href="#" className={classes.link}>
                    Descargar Archivo Enviado
                  </Link>
                  {isScreen ? " | " : <br />}
                  <Link href="#" className={classes.link}>
                    Reenviar Correos Electrónicos
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.paginationContainer}>
        <div className={classes.filesPerPage}>
          <div className={classes.labelFilesMR}>Filas por página:</div>
          <Select
            native
            value={filesPerPage}
            onChange={({ target: { value } }) => setFilesPerPage(value)}
            className={classes.labelFilesMR}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </Select>
          <div>1-2 de 2</div>
        </div>
        <Divider variant="middle" className={classes.divider} />
        <Pagination
          className={classes.pagination}
          classes={{ ul: classes.paginationUl }}
          count={Math.ceil(files.length / filesPerPage) * 5}
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  );
}
