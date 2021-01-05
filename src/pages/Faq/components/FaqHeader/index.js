import React, { useContext } from "react";
import { Container, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { OutlinedInput } from "../../../../components/Extended";
import { FilterContext } from "../FilterContext";
import styles from "./styles";
import ContentHeader from "../../../../components/ContentHeader";

export default function FaqHeader() {
  const { title, setTitleFilter } = useContext(FilterContext);
  const classes = styles();

  return (
    <Container fixed maxWidth="xl">
      <ContentHeader title="¿Necesitas ayuda?" />
      <Typography className={classes.subtitle}>
        Preguntas frecuentes sobre el Portal de Beneficios
      </Typography>
      <OutlinedInput
        className={classes.inputContainer}
        lightBorder={false}
        value={title}
        setValue={setTitleFilter}
        endIcon={<Search className={classes.icon} />}
      />
    </Container>
  );
}
