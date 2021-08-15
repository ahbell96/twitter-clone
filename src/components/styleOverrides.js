import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// material ui overrides
const styleOverrides = makeStyles((theme) => ({
  input: {
    color: "white !important",
  },
}));

export default styleOverrides;
