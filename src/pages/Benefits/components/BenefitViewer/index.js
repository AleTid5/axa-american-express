import React, { useState } from "react";
import CardDataHeader from "../../../../components/CardDataHeader";
import { Container } from "@material-ui/core";
import { actions } from "../../../../mocks/benefits.mock";
import banner from "../../../../assets/images/banner-vertical.jpg";
import styles from "./styles";
import MainContent from "./components/MainContent";
import useScreenResizer from "../../../../customHooks/useScreenResizer";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function BenefitViewer() {
  const [actionKey, setActionKey] = useState(0);
  const [{ width }] = useScreenResizer();
  const classes = styles();
  const isMobile = width < 960;

  return (
    <>
      <CardDataHeader
        title="The Platinum Card®"
        subtitle="American Express | Argentina"
        cardNumber="37641800000"
      />
      <Container
        fixed
        className={isMobile ? classes.mobileContainer : classes.container}
      >
        <div
          className={isMobile ? classes.mobileMainActions : classes.mainActions}
        >
          {isMobile ? (
            <Navbar
              actions={actions}
              selectedKey={actionKey}
              handleClick={setActionKey}
            />
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
        <div
          className={isMobile ? classes.mobileMainContent : classes.mainContent}
        >
          <MainContent content={actions[actionKey].content} />
        </div>
        <div
          className={isMobile ? classes.mobileMainBanner : classes.mainBanner}
        >
          {isMobile ? (
            <div
              style={{
                background: `url(${banner}) center center / cover no-repeat`,
              }}
              className={classes.mobileImageBanner}
            />
          ) : (
            <img alt="" src={banner} className={classes.imageBanner} />
          )}
        </div>
      </Container>
    </>
  );
}
