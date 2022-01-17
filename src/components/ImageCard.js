import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";

import InfoIcon from "@material-ui/icons/InfoOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorder";
import LikeIconFilled from "@material-ui/icons/Favorite";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
  },
  cardContent: {
    maxHeight: "200px",
    overflowX: "hidden",
    overflowY: "scroll",
  },
  cardHeader: {},
  tooltip: {
    cursor: "pointer",
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  tooltipSize: {
    fontSize: "16px",
  },
  heart: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: "auto",
    width: "200px",
    height: "200px",
    opacity: 0,
  },
  heartAnimation: {
    animation: `$animateEffect 1000ms ${theme.transitions.easing.sharp}`,
  },
  "@keyframes animateEffect": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },
}));

export default function ImageCard(props) {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const existingLike = localStorage.getItem(props.item.url);
    if (JSON.parse(existingLike) === true) {
      setLiked(true);
    }
  }, [props.item.url]);

  const handleLike = () => {
    setLiked(!liked);
    localStorage.setItem(props.item.url, liked ? false : true);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleLike}>
        <LikeIconFilled
          className={clsx(classes.heart, {
            [classes.heartAnimation]: liked,
          })}
          color="secondary"
        />
        <CardMedia
          component="img"
          height="500"
          image={props.item.url}
          alt={props.item.title}
        />
        <CardHeader
          action={
            <Tooltip
              arrow
              classes={{ tooltip: classes.tooltipSize }}
              className={classes.tooltip}
              title={props.item.copyright ? props.item.copyright : ""}
            >
              <InfoIcon />
            </Tooltip>
          }
          className={classes.cardHeader}
          titleTypographyProps={{ variant: "h6" }}
          title={props.item.title}
          subheader={props.item.date}
        ></CardHeader>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="subtitle2" component="div">
            {props.item.explanation}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <IconButton aria-label="like-button" onClick={handleLike}>
          {liked ? <LikeIconFilled color="secondary" /> : <LikeIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}
