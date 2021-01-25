import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import IconUploadFile from "../../../../assets/icons/ico-upload-file.png";
import styles from "./styles";
import ProgressBar from "../../../../components/Extended/ProgressBar";
import FilesTable from "../FilesTable";

const getRandomNumber = () =>
  Math.floor(Math.random() * 10 + 1) % 2 ? 10 : 20;

export default function MassIssuanceUploadFilesManager({
  files = [],
  errorFiles = [],
  successFiles = [],
}) {
  const [progresses, setProgresses] = React.useState([]);
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
        <FilesTable
          className={classes.filesMarginTop}
          title="Estado de archivos importados sin errores"
          files={successFiles}
        />
      )}
    </Container>
  );
}
