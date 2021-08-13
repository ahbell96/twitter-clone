import react, { useState } from "react";
import { Grid, Typography, Button, Box, spacing } from "@material-ui/core";
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
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Box display="flex" flexDirection="column" width="275px">
          <Box display="flex" p={1}>
            <FontAwesomeIcon
              icon={faTwitter}
              className="nav-icons"
            ></FontAwesomeIcon>
          </Box>
          <Box display="flex" p={1}>
            <Box display="flex">
              <FontAwesomeIcon
                icon={faHome}
                className="nav-icons"
              ></FontAwesomeIcon>
              <Box width="50" display="flex" alignItems="center">
                <Typography
                  style={{ padding: "0 0 0 10" }}
                  style={{ fontWeight: 700 }}
                >
                  Home
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" p={1} style={{ fontWeight: 500 }}>
            <FontAwesomeIcon
              icon={faHashtag}
              className="nav-icons"
            ></FontAwesomeIcon>
            <Box width="50" display="flex" alignItems="center">
              <Typography style={{ padding: "0 0 0 10" }}>Explore</Typography>
            </Box>
          </Box>
          <Box display="flex" p={1} style={{ fontWeight: 500 }}>
            <FontAwesomeIcon
              icon={faBell}
              className="nav-icons"
            ></FontAwesomeIcon>
            <Box width="50" display="flex" alignItems="center">
              <Typography style={{ padding: "0 0 0 10" }}>
                Notifications
              </Typography>
            </Box>
          </Box>
          <Box display="flex" p={1}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="nav-icons"
            ></FontAwesomeIcon>
            <Box width="50" display="flex" alignItems="center">
              <Typography style={{ padding: "0 0 0 10" }}>Messages</Typography>
            </Box>
          </Box>
          <Box display="flex" p={1}>
            <FontAwesomeIcon
              icon={faBookmark}
              className="nav-icons"
            ></FontAwesomeIcon>
            <Box width="50" display="flex" alignItems="center">
              <Typography style={{ padding: "0 0 0 10" }}>Bookmarks</Typography>
            </Box>
          </Box>
          <Box display="flex" p={1}>
            <FontAwesomeIcon
              icon={faList}
              className="nav-icons"
            ></FontAwesomeIcon>
            <Box width="50" display="flex" alignItems="center">
              <Typography style={{ padding: "0 0 0 10" }}>Lists</Typography>
            </Box>
          </Box>
          <Box display="flex" p={1}>
            <FontAwesomeIcon
              icon={faUser}
              className="nav-icons"
            ></FontAwesomeIcon>
            <Box width="50" display="flex" alignItems="center">
              <Typography style={{ padding: "0 0 0 10" }}>Profile</Typography>
            </Box>
          </Box>
          <Box display="flex" p={1}>
            <Box>
              <Box>
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  className="nav-icons"
                ></FontAwesomeIcon>
              </Box>
            </Box>
            <Box width="50" display="flex" alignItems="center">
              <Typography style={{ padding: "0 0 0 10" }}>More</Typography>
            </Box>
          </Box>
          <Box className="tweet-side-menu" style={{ width: "90%" }}>
            <Button
              className="tweet-twitter tweet-side-menu"
              style={{ width: "90%" }}
            >
              <Typography
                className="tweet-twitter"
                style={{ textTransform: "capitalize" }}
              >
                Tweet
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MenuSideNavBar;
