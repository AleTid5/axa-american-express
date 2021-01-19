import React from "react";
import { Button, Grid } from "@material-ui/core";
import { DropzoneDialog } from "material-ui-dropzone";
import { Delete } from "@material-ui/icons";
import styles from "./styles";

export default function DropzoneWithButton({
  description,
  buttonTitle = "Add",
}) {
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const classes = styles();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div>{description}</div>
        </Grid>

        <Grid item xs={12} md={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            {buttonTitle}
          </Button>
        </Grid>

        <Grid item xs={12} md={4}>
          <div>
            {files.map(({ name }, key) => (
              <Grid container spacing={2} key={key}>
                <Grid item xs={12} md={10}>
                  <div>{name}</div>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Delete
                    className={classes.iconDelete}
                    onClick={() => setFiles(files.filter((_v, k) => key !== k))}
                  />
                </Grid>
              </Grid>
            ))}
          </div>
        </Grid>
      </Grid>

      <DropzoneDialog
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        open={open}
        onClose={() => setOpen(false)}
        onSave={(newFiles) => {
          setFiles([...files, ...newFiles]);
          setOpen(false);
        }}
        showPreviews={true}
        showFileNamesInPreview={true}
        filesLimit={10}
      />
    </>
  );
}
