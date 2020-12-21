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
import useScreenResizer from "../../customHooks/useScreenResizer";

export default function Footer() {
  const { language, setLanguage, languages } = useContext(LanguageContext);
  const [{ width }] = useScreenResizer();
  const classes = styles();
  const isTinyMobile = width < 270;

  const FAQLinks = () => (
    <>
      <Box flexShrink={1} className={classes.mt10}>
        <Link
          href="#"
          onClick={({ preventDefault }) => preventDefault()}
          style={{ textDecoration: "underline" }}
        >
          FAQ
        </Link>
      </Box>
      <Box flexShrink={0} className={`${classes.mt10} ${classes.ml10}`}>
        <Link
          href="#"
          onClick={({ preventDefault }) => preventDefault()}
          style={{ textDecoration: "underline" }}
        >
          Contactanos
        </Link>
      </Box>
    </>
  );

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
          {!isTinyMobile && <FAQLinks />}
        </Box>
        {isTinyMobile && (
          <Box display="flex" style={{ padding: "8px 0 0 8px" }}>
            <FAQLinks />
          </Box>
        )}
        <Box display="flex" className={classes.actionsContainer}>
          <Link
            href="#"
            onClick={({ preventDefault }) => preventDefault()}
            variant="caption"
            style={{ textDecoration: "underline" }}
          >
            Requisitos Regulatorios
          </Link>
          <Link
            href="#"
            className={classes.ml10}
            onClick={({ preventDefault }) => preventDefault()}
            variant="caption"
            style={{ textDecoration: "underline" }}
          >
            Términos y Condiciones
          </Link>
          <Link
            href="#"
            className={classes.ml10}
            onClick={({ preventDefault }) => preventDefault()}
            variant="caption"
            style={{ textDecoration: "underline" }}
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
