import React, { useState, useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import CssBaseline from "@material-ui/core/CssBaseline";
import nunito from "typeface-nunito";
import Appbar from "../components/Appbar";
import ImageGrid from "../components/ImageGrid";

export default function Home() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.startDate.value);

  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    typography: {
      fontFamily: '"Nunito"',
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [nunito],
        },
      },
    },
    palette: {
      type: palletType,
    },
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
    localStorage.setItem("darkState", !darkState);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, selectedDate]);

  useEffect(() => {
    const existingDarkState = localStorage.getItem("darkState");
    if (existingDarkState) {
      setDarkState(true);
    } else {
      setDarkState(false);
      localStorage.setItem("darkState", "light");
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CssBaseline />
        <Appbar darkState={darkState} handleThemeChange={handleThemeChange} />
        <ImageGrid />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}
