import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { HighlightOff } from "@material-ui/icons";
import iconChat from "../../assets/icons/ico-chat.png";
import styles from "./styles";

export default function withChat(Component) {
  const classes = styles();
  return (props) => (
    <>
      <Container fixed className={classes.container}>
        <Grid container className={classes.chatContainer}>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={2} className={classes.chatIconContainer}>
                <img alt="Chat" src={iconChat} className={classes.chatIcon} />
              </Grid>
              <Grid item xs={10} className={classes.chatTextContainer}>
                <Typography variant="subtitle1" className={classes.chatText}>
                  CHAT
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} className={classes.closeIconContainer}>
            <HighlightOff className={classes.closeIcon} />
          </Grid>
        </Grid>
      </Container>
      <Component {...props} />
    </>
  );
}
