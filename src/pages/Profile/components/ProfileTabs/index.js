import React from "react";
import { AppBar, Box, Container, Tab, Tabs } from "@material-ui/core";
import PersonalInformation from "./PersonalInformation";
import CardsManager from "./CardsManager";
import styles from "./styles";

const profileComponents = [
  {
    component: PersonalInformation,
    label: "Información Personal",
  },
  {
    component: CardsManager,
    label: "Administrar Tarjetas",
  },
];

export default function ProfileTabs() {
  const [value, setValue] = React.useState(1);
  const classes = styles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container fixed maxWidth="xl" className={classes.container}>
      <AppBar position="static" className={classes.tabContainer}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="Profile tab"
          textColor="primary"
          classes={{ root: classes.tabRoot, indicator: classes.tabIndicator }}
        >
          {profileComponents.map(({ component, label }, key) => (
            <Tab
              key={key}
              label={label}
              id={`tab-${key}`}
              aria-controls={`tab-control-${key}`}
              classes={{
                selected: classes.selectedTab,
                textColorPrimary: classes.textColorPrimaryTab,
                wrapper: classes.wrapperTab,
              }}
            />
          ))}
        </Tabs>
      </AppBar>
      {profileComponents.map(({ component, label }, key) => (
        <div
          key={key}
          role="tabpanel"
          hidden={value !== key}
          id={`simple-tabpanel-${key}`}
          aria-labelledby={`simple-tab-${key}`}
        >
          {value === key && <Box p={3}>{component}</Box>}
        </div>
      ))}
    </Container>
  );
}
