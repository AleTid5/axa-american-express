import React, { useContext } from "react";
import {
  Box,
  Container,
  FormControl,
  Link,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { LanguageContext } from "../../contexts/LanguageContext";
import styles from "./styles";

export default function Footer() {
  const { language, setLanguage, languages } = useContext(LanguageContext);
  const classes = styles();

  return (
    <div className={classes.appFooter}>
      <Container fixed maxWidth="md" className={classes.container}>
        <Box display="flex" className={classes.languageContainer}>
          <Box className={classes.languageLabel}>Idioma</Box>
          <Box width="100%" className={`${classes.mt5} ${classes.ml10}`}>
            <FormControl className={classes.formControl}>
              <Select
                value={language}
                onChange={({ target: { value } }) => setLanguage(value)}
                classes={{ root: classes.selectRoot, select: classes.select }}
              >
                {languages.map(({ value, content }, key) => (
                  <MenuItem key={key} value={value}>
                    {content}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box flexShrink={1} className={classes.mt10}>
            <Link href="#" onClick={({ preventDefault }) => preventDefault()}>
              FAQ
            </Link>
          </Box>
          <Box flexShrink={0} className={`${classes.mt10} ${classes.ml10}`}>
            <Link href="#" onClick={({ preventDefault }) => preventDefault()}>
              Contactanos
            </Link>
          </Box>
        </Box>
        <Box display="flex" className={classes.actionsContainer}>
          <Link
            href="#"
            onClick={({ preventDefault }) => preventDefault()}
            variant="caption"
          >
            Requisitos Regulatorios
          </Link>
          <Link
            href="#"
            className={classes.ml10}
            onClick={({ preventDefault }) => preventDefault()}
            variant="caption"
          >
            Términos y Condiciones
          </Link>
          <Link
            href="#"
            className={classes.ml10}
            onClick={({ preventDefault }) => preventDefault()}
            variant="caption"
          >
            Política de Privacidad
          </Link>
        </Box>
        <Box display="flex" className={classes.copyrightContainer}>
          <Typography variant="caption">
            2020 © AXA Partners All Right Reserved
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
