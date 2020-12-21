import React from "react";
import CardDataHeader from "../../../components/CardDataHeader";
import { Container, Divider } from "@material-ui/core";
import { actions } from "../../../mocks/benefits.mock";
import banner from "../../../assets/images/banner-vertical.jpg";
import styles from "./styles";
import MainContent from "./MainContent";
import { KeyboardArrowRight } from "@material-ui/icons";
import useScreenResizer from "../../../customHooks/useScreenResizer";

export default function BenefitViewer() {
  const [actionKey, setActionKey] = React.useState(0);
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
          {actions.map(({ icon, title, content }, key) => (
            <>
              {!isMobile && key !== 0 && <Divider />}
              <div
                key={key}
                className={
                  isMobile
                    ? classes.mobileActionContainer
                    : classes.actionContainer
                }
                onClick={() => setActionKey(key)}
              >
                <div className={isMobile ? classes.mobileIcon : classes.icon}>
                  <img alt="" src={icon} className={classes.iconImage} />
                </div>
                <div
                  className={isMobile ? classes.mobileTitle : classes.title}
                  style={{
                    fontWeight: key === actionKey ? 700 : 200,
                  }}
                >
                  {title}
                </div>
                <div
                  className={
                    isMobile
                      ? classes.mobileRightArrowContainer
                      : classes.rightArrowContainer
                  }
                >
                  {!isMobile && (
                    <KeyboardArrowRight className={classes.rightArrowIcon} />
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
        <div
          className={isMobile ? classes.mobileMainContent : classes.mainContent}
        >
          <MainContent content={actions[actionKey].content} />
        </div>
        <div
          className={isMobile ? classes.mobileMainBanner : classes.mainBanner}
        >
          <img alt="" src={banner} className={classes.imageBanner} />
        </div>
      </Container>
    </>
  );
}
