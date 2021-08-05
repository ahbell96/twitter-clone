import react, { useState } from "react";
import { Grid, Typography, Button, Box } from "@material-ui/core";

const MenuSideNavBar = () => {
  return (
    <>
      <Box>
        <Box>Twitter Logo</Box>
        <Box>Home</Box>
        <Box>Explore</Box>
        <Box>Notifications</Box>
        <Box>Messages</Box>
        <Box>Bookmarks</Box>
        <Box>Lists</Box>
        <Box>Profile</Box> 
        <Box>More</Box>
        <Button className="tweet-twitter">Tweet</Button>
      </Box>
    </>
  );
};

export default MenuSideNavBar;
