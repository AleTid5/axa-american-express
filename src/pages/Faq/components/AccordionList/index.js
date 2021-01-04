import React, { useContext } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { faqs } from "../../../../mocks/faq.mock";
import { FilterContext } from "../FilterContext";
import styles from "./styles";
import "./styles.scss";

export default function AccordionList() {
  const { titleFilter } = useContext(FilterContext);
  const [expanded, setExpanded] = React.useState(null);
  const classes = styles();

  return (
    <Container fixed maxWidth="xl" className={classes.container}>
      {faqs
        .filter(({ title }) =>
          title.toLowerCase().includes(titleFilter.toLowerCase())
        )
        .map(({ title, component: Component }, key) => (
          <Accordion
            key={key}
            className="faq-accordion"
            expanded={key === expanded}
            onChange={(_e, isExpanded) => setExpanded(isExpanded ? key : null)}
            classes={{
              root: classes.accordionRoot,
              expanded: classes.accordionExpanded,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              classes={{
                root: classes.accordionSummaryRoot,
                content: classes.accordionSummaryContent,
                expanded: classes.accordionSummaryExpanded,
              }}
            >
              <Typography className={classes.title}>
                <div dangerouslySetInnerHTML={{ __html: title }} />
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              classes={{
                root: classes.accordionDetailsRoot,
              }}
            >
              <Component />
            </AccordionDetails>
          </Accordion>
        ))}
    </Container>
  );
}
