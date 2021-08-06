import react, { useState } from "react";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import {} from '@fortawesome/fontawesome-svg-core';
// import {fa} from '@fortawesome/free-regular-svg-icons';
import {
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

const MenuSideNavBar = () => {
  return (
    <>
      <Box>
        <Box display="flex" flexDirection="column" alignItems="flex-start" width="50%" style={{margin: '0 auto'}}>
          <Box display='flex'>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </Box>
          <Box display='flex'>
            <FontAwesomeIcon icon={faHome} style={{padding: "0 10 0 0"}}></FontAwesomeIcon><Typography style={{padding: "0 0 0 10"}}>Home</Typography>
          </Box>
          <Box display='flex'>
            <FontAwesomeIcon icon={faHashtag} style={{padding: "0 10 0 0"}}></FontAwesomeIcon><Typography style={{padding: "0 0 0 10"}}>Explore</Typography>
          </Box>
          <Box display='flex'>
            <FontAwesomeIcon icon={faBell} style={{padding: "0 10 0 0"}}></FontAwesomeIcon><Typography style={{padding: "0 0 0 10"}}>Notifications</Typography>
          </Box>
          <Box display='flex'>
            <FontAwesomeIcon icon={faEnvelope} style={{padding: "0 10 0 0"}}></FontAwesomeIcon><Typography style={{padding: "0 0 0 10"}}>Messages</Typography>
          </Box>
          <Box display='flex'>
            <FontAwesomeIcon icon={faBookmark} style={{padding: "0 10 0 0"}}></FontAwesomeIcon><Typography style={{padding: "0 0 0 10"}}>Bookmarks</Typography>
          </Box>
          <Box display='flex'>
            <FontAwesomeIcon icon={faList} style={{padding: "0 10 0 0"}}></FontAwesomeIcon><Typography style={{padding: "0 0 0 10"}}>Lists</Typography>
          </Box>
          <Box display='flex'>
            <FontAwesomeIcon icon={faUser} style={{padding: "0 10 0 0"}}></FontAwesomeIcon><Typography style={{padding: "0 0 0 10"}}>Profile</Typography>
          </Box>
          <Box display='flex' justifyContent='center'>
            <Box style={{ borderRadius: "50%", border: "1px solid white"}}>
              <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
            </Box>
            <Typography style={{padding: "0 0 0 10"}}>More</Typography>
          </Box>
          <Button className='tweet-twitter'>Tweet</Button>
        </Box>
      </Box>
    </>
  );
};

export default MenuSideNavBar;
