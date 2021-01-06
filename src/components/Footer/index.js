import React, { useContext } from "react";
import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import useScreenResizing from "screen-resizing";
import { LanguageContext } from "../../contexts/LanguageContext";
import styles from "./styles";
import { Link } from "react-router-dom";

export default function Footer() {
  const { language, setLanguage, languages } = useContext(LanguageContext);
  const { isMiniMobile } = useScreenResizing({ miniMobile: 270 });
  const classes = styles();

  const FAQLinks = () => (
    <>
      <Box flexShrink={1} className={classes.mt10}>
        <Link className={classes.link} to="/faq">
          FAQ
        </Link>
      </Box>
      <Box flexShrink={0} className={`${classes.mt10} ${classes.ml10}`}>
        <Link className={classes.link} to="/contact-us">
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
          {!isMiniMobile && <FAQLinks />}
        </Box>
        {isMiniMobile && (
          <Box display="flex" style={{ padding: "8px 0 0 8px" }}>
            <FAQLinks />
          </Box>
        )}
        <Box display="flex" className={classes.actionsContainer}>
          <Link className={classes.link} to="#" variant="caption">
            Requisitos Regulatorios
          </Link>
          <Link
            className={classes.link}
            to="#"
            variant="caption"
            style={{ marginLeft: 10 }}
          >
            Términos y Condiciones
          </Link>
          <Link
            className={classes.link}
            to="#"
            variant="caption"
            style={{ marginLeft: 10 }}
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
