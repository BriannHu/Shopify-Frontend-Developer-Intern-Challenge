import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStartDate } from "../actions/startDate";
import {
  Avatar,
  Box,
  IconButton,
  Link,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardDatePicker } from "@material-ui/pickers";

import PersonIcon from "@material-ui/icons/Person";
import MoonIcon from "@material-ui/icons/NightsStayOutlined";
import SunIcon from "@material-ui/icons/WbSunnyOutlined";

const useStyles = makeStyles((theme) => ({
  boxItem: {
    display: "flex",
    alignItems: "center",
  },
  darkModeBox: {
    marginLeft: theme.spacing(1),
  },
  header: {
    position: "fixed",
    width: "100%",
    zIndex: 1,
  },
  innerBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  sunIcon: {
    color: "yellow",
  },
  tooltip: {
    fontSize: "16px",
  },
  title: {
    marginLeft: theme.spacing(2),
    fontWeight: "bold",
  },
  rootBox: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    margin: "0 auto",
    maxWidth: 1400,
  },
}));

export default function Appbar(props) {
  const classes = useStyles();
  const startDate = useSelector((state) => state.startDate.value);
  const [selectedDate, handleDateChange] = useState(startDate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateStartDate(selectedDate, "yyyy-MM-dd"));
  }, [dispatch, selectedDate]);

  return (
    <Paper className={classes.header} component="header" square>
      <Box className={classes.rootBox}>
        <Box className={classes.innerBox}>
          <Box className={classes.boxItem}>
            {" "}
            <Tooltip
              classes={{ tooltip: classes.tooltip }}
              title="Created & Submitted by Brian Hu"
              placement="right"
            >
              <Link href="http://www.brianhu.ca" target="_blank">
                <Avatar color="primary">
                  <PersonIcon />
                </Avatar>
              </Link>
            </Tooltip>
            <KeyboardDatePicker style={{ visibility: "hidden" }} />
          </Box>
          <Box className={classes.boxItem}>
            {" "}
            <Typography className={classes.title} variant="h4">
              Spacestagram
            </Typography>
          </Box>
          <Box className={classes.boxItem}>
            <Box className={classes.calenderBox}>
              <KeyboardDatePicker
                autoOk
                variant="inline"
                label="Start Date"
                format="yyyy-MM-dd"
                InputAdornmentProps={{ position: "start" }}
                value={selectedDate}
                onChange={(date) => handleDateChange(date)}
              />
            </Box>
            <Box className={classes.darkModeBox}>
              <IconButton
                aria-label="theme-button"
                className={classes.iconButton}
                onClick={props.handleThemeChange}
              >
                {props.darkState ? <SunIcon /> : <MoonIcon />}
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
