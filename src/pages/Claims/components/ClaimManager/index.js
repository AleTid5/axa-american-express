import React, { Fragment } from "react";
import CardDataHeader from "../../../../components/CardDataHeader";
import {
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { Add, CallMade, CallReceived, Publish } from "@material-ui/icons";
import { actions, claims } from "../../../../mocks/claims.mock";
import IconCard from "../../../../components/IconCard";
import useScreenResizer from "../../../../customHooks/useScreenResizer";
import styles from "./styles";

export default function ClaimManager() {
  const [{ isBiggerThanTablet, isNotebook, isMobile }] = useScreenResizer();
  const classes = styles();

  return (
    <>
      <CardDataHeader
        title="The Platinum Card®"
        subtitle="Interbank | Perú"
        cardNumber="3777.526***"
      />
      <Container fixed className={classes.container}>
        <Grid container spacing={3} className={classes.mt20}>
          {claims.map(
            ({ icon, title, code, dateData, message, completed }, key) => (
              <Fragment key={key}>
                <IconCard
                  icon={icon}
                  xs={12}
                  md={6}
                  iconContainerClassName={`${
                    completed ? classes.middleAlign : classes.topAlign
                  } ${classes.iconCardContainer}`}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={9}>
                      <Typography variant="h6" className={classes.cardTitle}>
                        {title}
                      </Typography>
                      <Typography variant="h6" className={classes.cardSubtitle}>
                        {code}
                      </Typography>
                      {completed && (
                        <>
                          <Typography
                            variant="h6"
                            className={classes.cardSubtitle}
                          >
                            {dateData}
                          </Typography>
                          <Typography
                            variant="h6"
                            className={classes.cardMessage}
                          >
                            {message}
                          </Typography>
                        </>
                      )}
                    </Grid>
                    <Grid item xs={3} className={classes.iconsContainer}>
                      <Grid
                        container
                        spacing={1}
                        className={classes.justifyContentFlexEnd}
                      >
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          className={classes.iconContainer}
                        >
                          {completed ? (
                            <CallReceived className={classes.icon} />
                          ) : (
                            <CallMade className={classes.icon} />
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  {!completed && (
                    <>
                      <Divider className={classes.cardDivider} />
                      <Grid container spacing={1}>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={12}
                          lg={6}
                          className={
                            isNotebook || isMobile
                              ? classes.middleStartAlign
                              : classes.middleAlign
                          }
                        >
                          <Typography
                            variant="h6"
                            className={classes.cardMessage}
                          >
                            {dateData}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={12}
                          lg={6}
                          className={
                            isNotebook || isMobile
                              ? classes.middleStartAlign
                              : classes.rightAlign
                          }
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.cardButton}
                            endIcon={<Publish className={classes.buttonIcon} />}
                          >
                            <div className={classes.cardButtonText}>
                              Añadir documentos
                            </div>
                          </Button>
                        </Grid>
                      </Grid>
                    </>
                  )}
                </IconCard>
                {isBiggerThanTablet && <Grid item md={6} />}
              </Fragment>
            )
          )}
        </Grid>
        <Divider className={classes.divider} />
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          endIcon={<Add className={classes.buttonIcon} />}
        >
          <div className={classes.buttonText}>Añadir reclamo</div>
        </Button>
        <Grid container spacing={3} className={classes.mt10}>
          {actions.map(({ icon, title }, key) => (
            <IconCard
              key={key}
              icon={icon}
              xs={12}
              md={6}
              lg={4}
              middleAlign
              className={`${classes.paddingCard} ${classes.middleAlign}`}
            >
              <Typography variant="h6" className={classes.cardTitle}>
                {title}
              </Typography>
            </IconCard>
          ))}
        </Grid>
      </Container>
    </>
  );
}
