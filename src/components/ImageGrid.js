import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { Box, LinearProgress, Grid, Typography } from "@material-ui/core";
import ImageCard from "./ImageCard";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  innerBox: {
    display: "flex",
    margin: "0 auto",
    maxWidth: 1400,
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  loadingBox: {
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  loadingBarTop: {
    marginBottom: theme.spacing(2),
  },
  loadingBarBottom: {
    marginTop: theme.spacing(2),
  },
  loadingText: {
    fontStyle: "italic",
  },
}));

export default function ImageGrid() {
  const posts = useSelector((state) => state.posts);
  const loadingData = useSelector((state) => state.loadingData.value);
  const startDate = useSelector((state) => state.startDate.value);

  const classes = useStyles();

  return (
    <Box className={classes.innerBox}>
      {!loadingData ? (
        <Grid container spacing={4}>
          {posts.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ImageCard item={item} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Box className={classes.loadingBox}>
          <Box>
            <LinearProgress className={classes.loadingBarTop} />
            <Typography
              className={classes.loadingText}
              color="primary"
              variant="h4"
            >
              Retrieving all images uploaded since{" "}
              {format(new Date(startDate), "yyyy-MM-dd")}
            </Typography>
            <LinearProgress className={classes.loadingBarBottom} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
