import React from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { Add, Search } from "@material-ui/icons";
import styles from "./styles";
import { DropzoneDialog } from "material-ui-dropzone";
import MassIssuanceUploadFilesManager from "../MassIssuanceUploadFilesManager";
import UploadErrorMessage from "../UploadErrorMessage";

const fileErrors = [
  {
    line: 2,
    column: "CPF, Passport",
    message: "Lorem Ipsum",
  },
  {
    line: 3,
    column: "Cellphone area code",
    message: "Lorem Ipsum",
  },
  {
    line: 4,
    column: "CPF",
    message: "Lorem Ipsum",
  },
  {
    line: 4,
    column: "E-mail",
    message: "Lorem Ipsum",
  },
];

export default function MassIssuanceUploader() {
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const classes = styles();

  const handleFileUpload = (newFiles) => {
    setFiles([...files, ...newFiles]);
    setOpen(false);
  };

  return (
    <>
      <Container
        fixed
        maxWidth="md"
        className={classes.container}
        classes={{ maxWidthMd: classes.containerMaxWidthMd }}
      >
        <Grid
          container
          justify="center"
          spacing={2}
          className={classes.massButtonsContainer}
        >
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.massButton}
              onClick={() => setOpenModal(true)}
            >
              Mass Certificate Upload Spreadsheet
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={`${classes.massButton} ${classes.primaryDarkBackground}`}
            >
              Mass Certificate Upload Guide
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h6" className={classes.subtitle}>
          Archivo importación
        </Typography>
        <Grid
          container
          justify="center"
          spacing={2}
          className={classes.uploadButtonsContainer}
        >
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.uploadButton}
              classes={{ label: classes.uploadButtonLabel }}
              endIcon={<Add />}
              onClick={() => setOpen(true)}
            >
              Añadir
            </Button>
            <DropzoneDialog
              acceptedFiles={[
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "application/vnd.ms-excel",
              ]}
              cancelButtonText="cancel"
              submitButtonText="upload"
              maxFileSize={5000000}
              open={open}
              onClose={() => setOpen(false)}
              onSave={handleFileUpload}
              showPreviews={true}
              showFileNamesInPreview={true}
              filesLimit={10}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.uploadButton}
              classes={{ label: classes.uploadButtonLabel }}
              endIcon={<Search />}
            >
              Buscar archivos
            </Button>
          </Grid>
        </Grid>
      </Container>
      <MassIssuanceUploadFilesManager
        files={files}
        errorFiles={files}
        successFiles={files}
      />
      <UploadErrorMessage
        open={openModal}
        handleClose={() => setOpenModal(false)}
        fileName="Massive Upload file with forced errors jul 2020.xlsx"
        fileErrors={fileErrors}
      />
    </>
  );
}
