import react, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Input,
  TextField,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ query }) => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='flex-start'
      className='button-radius'
      pl={1.5}
      my={1.5}
      style={{
        fontWeight: "400",
        fontSize: "15",
        backgroundColor: "rgb(32, 35, 39)",
      }}
    >
      <form>
        <FontAwesomeIcon icon={faSearch} style={{ minWidth: "32px" }} />
        <Input
          placeholder='Search Twitter'
          style={{ padding: "6px", color: "#fff" }}
        />
      </form>
    </Box>
  );
};

export default SearchBar;
