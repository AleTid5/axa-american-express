import React, { useState } from "react";
import CardDataHeader from "../../../../components/CardDataHeader";
import { Container, Typography } from "@material-ui/core";
import { actions } from "../../../../mocks/benefits.mock";
import banner from "../../../../assets/images/banner-benefits_aumentacobertura.jpg";
import mobileBanner from "../../../../assets/images/banner-benefits_mobile_aumentarcobertura.jpg";
import styles from "./styles";
import MainContent from "./components/MainContent";
import useScreenResizer from "../../../../customHooks/useScreenResizer";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function BenefitViewer() {
  const [actionKey, setActionKey] = useState(0);
  const [{ isTablet }] = useScreenResizer();
  const classes = styles();

  return (
    <>
      <CardDataHeader
        title="The Platinum Card®"
        subtitle="American Express | Argentina"
        cardNumber="37641800000"
      />
      <Container fixed className={classes.container}>
        <div
          className={isTablet ? classes.mobileMainActions : classes.mainActions}
        >
          {isTablet ? (
            <Navbar
              actions={actions}
              selectedKey={actionKey}
              handleClick={setActionKey}
            >
              <Typography
                variant="subtitle1"
                className={classes.mobileNavbarTitle}
              >
                {actions[actionKey].title}
              </Typography>
            </Navbar>
          ) : (
            actions.map(({ icon, title }, key) => (
              <Sidebar
                key={key}
                icon={icon}
                title={title}
                index={key}
                selectedKey={actionKey}
                handleClick={setActionKey}
              />
            ))
          )}
        </div>
        <div className={classes.mainContent}>
          <MainContent content={actions[actionKey].content} />
        </div>
        <div className={classes.mainBanner}>
          <img
            alt="Aumentá tu cobertura aquí"
            src={isTablet ? mobileBanner : banner}
            className={classes.imageBanner}
          />
        </div>
      </Container>
    </>
  );
}
