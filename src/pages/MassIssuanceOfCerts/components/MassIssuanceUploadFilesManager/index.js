import React from "react";
import {
  Container,
  Grid,
  Link,
  Paper,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Divider,
  Select,
} from "@material-ui/core";
import IconUploadFile from "../../../../assets/icons/ico-upload-file.png";
import styles from "./styles";
import ProgressBar from "../../../../components/Extended/ProgressBar";
import useScreenResizing from "screen-resizing";
import { Pagination } from "@material-ui/lab";

const getRandomNumber = () =>
  Math.floor(Math.random() * 10 + 1) % 2 ? 10 : 20;

export default function MassIssuanceUploadFilesManager({
  files = [],
  errorFiles = [],
  successFiles = [],
}) {
  const [progresses, setProgresses] = React.useState([]);
  const [filesPerPage, setFilesPerPage] = React.useState(10);
  const { isScreen } = useScreenResizing();
  const classes = styles();

  React.useEffect(() => {
    setProgresses(new Array(files.length).fill(0));
    const randomProgress = getRandomNumber();
    const timer = setInterval(() => {
      setProgresses((prevProgresses) =>
        prevProgresses.map((prevProgress) =>
          prevProgress >= 100 ? 100 : prevProgress + randomProgress
        )
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, [files]);

  return (
    <Container
      fixed
      maxWidth="xl"
      className={classes.container}
      classes={{ maxWidthMd: classes.containerMaxWidthMd }}
    >
      <Typography variant="h6" className={classes.subtitle}>
        ATENCIÓN: El límite para la generación de certificados por archivo es de
        50 líneas.
      </Typography>
      {errorFiles.length > 0 && (
        <div className={classes.filesContainer}>
          {errorFiles.map(({ name }, key) => (
            <Grid container key={key}>
              <Grid item xs={3} sm={2} md={1} className={classes.iconContainer}>
                <img
                  src={IconUploadFile}
                  alt="Icon File Upload"
                  className={classes.icon}
                />
              </Grid>
              <Grid item xs={9} sm={10} md={11} className={classes.errorFile}>
                <div>Massive Upload file with forced errors {name}</div>
              </Grid>
            </Grid>
          ))}
        </div>
      )}
      {files.length > 0 && (
        <div className={classes.filesMarginTop}>
          {files.map(({ name }, key) => (
            <div key={key}>
              <Typography variant="h6" className={classes.uploadFileTitle}>
                Massive Upload file {name}
              </Typography>
              <Grid container className={classes.progressContainer}>
                <Grid item xs={3} className={classes.progressLabelContainer}>
                  <Typography variant="h6" className={classes.progress}>
                    Progreso: {progresses[key]}%
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={9}
                  xl={6}
                  className={classes.progressUploaderContainer}
                >
                  <ProgressBar
                    variant="determinate"
                    value={progresses[key] || 0}
                  />
                </Grid>
              </Grid>
            </div>
          ))}
        </div>
      )}
      {successFiles.length > 0 && (
        <div className={classes.filesMarginTop}>
          <Typography variant="h6" className={classes.successFilesTitle}>
            Estado de archivos importados sin errores
          </Typography>
          <TableContainer
            component={Paper}
            className={classes.tableContainerRoot}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableCellHead}>
                    Archivo
                  </TableCell>
                  <TableCell className={classes.tableCellHead}>Lote</TableCell>
                  <TableCell className={classes.tableCellHead}>
                    Fecha de importación
                  </TableCell>
                  <TableCell className={classes.tableCellHead}>
                    Estado
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={classes.whiteBackground}>
                {successFiles.map(({ name }, key) => (
                  <TableRow key={key}>
                    <TableCell className={classes.tableCellRow}>
                      {name}
                    </TableCell>
                    <TableCell className={classes.tableCellRow}>
                      xxxxxx
                    </TableCell>
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
              count={Math.ceil(successFiles.length / filesPerPage) * 5}
              showFirstButton
              showLastButton
            />
          </div>
        </div>
      )}
    </Container>
  );
}
